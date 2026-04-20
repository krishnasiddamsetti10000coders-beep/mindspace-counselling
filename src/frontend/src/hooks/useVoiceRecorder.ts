import { useCallback, useEffect, useRef, useState } from "react";

export type RecorderState = "idle" | "recording" | "processing" | "stopped";

export interface VoiceRecorderResult {
  state: RecorderState;
  seconds: number;
  audioBlob: Blob | null;
  audioUrl: string | null;
  start: () => Promise<void>;
  stop: () => void;
  reset: () => void;
  error: string | null;
}

export function useVoiceRecorder(): VoiceRecorderResult {
  const [state, setState] = useState<RecorderState>("idle");
  const [seconds, setSeconds] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioUrlRef = useRef<string | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const stopStream = useCallback(() => {
    if (streamRef.current) {
      for (const track of streamRef.current.getTracks()) {
        track.stop();
      }
      streamRef.current = null;
    }
  }, []);

  const start = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];

      const mimeType = MediaRecorder.isTypeSupported("audio/webm")
        ? "audio/webm"
        : "audio/ogg";
      const recorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        // Ensure we collect any final chunk before building the blob
        const blob = new Blob(chunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(blob);
        audioUrlRef.current = url;
        setAudioBlob(blob);
        setAudioUrl(url);
        // Only transition to "stopped" AFTER blob + url are set
        setState("stopped");
        stopStream();
      };

      recorder.start(250);
      setState("recording");

      timerRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } catch (err) {
      setError(
        "Microphone access was denied. Please allow access and try again.",
      );
      console.error(err);
    }
  }, [stopStream]);

  const stop = useCallback(() => {
    clearTimer();
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state !== "inactive") {
      // Set processing state immediately so UI shows interim state
      setState("processing");
      // Request any buffered data before stopping
      try {
        recorder.requestData();
      } catch {
        // requestData not supported in all browsers — safe to ignore
      }
      recorder.stop();
    }
  }, [clearTimer]);

  const reset = useCallback(() => {
    clearTimer();
    stopStream();
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
    }
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }
    setAudioBlob(null);
    setAudioUrl(null);
    setState("idle");
    setSeconds(0);
    setError(null);
    mediaRecorderRef.current = null;
    chunksRef.current = [];
  }, [clearTimer, stopStream]);

  useEffect(() => {
    return () => {
      clearTimer();
      stopStream();
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    };
  }, [clearTimer, stopStream]);

  return { state, seconds, audioBlob, audioUrl, start, stop, reset, error };
}
