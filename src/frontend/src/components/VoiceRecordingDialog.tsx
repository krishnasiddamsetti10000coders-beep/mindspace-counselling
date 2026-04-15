import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActor } from "@caffeineai/core-infrastructure";
import { CheckCircle2, Mic, Square } from "lucide-react";
import { useState } from "react";
import { ExternalBlob, createActor } from "../backend";
import { useVoiceRecorder } from "../hooks/useVoiceRecorder";

type Step = "info" | "record" | "success";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function formatTime(s: number) {
  const m = Math.floor(s / 60)
    .toString()
    .padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

export function VoiceRecordingDialog({ open, onOpenChange }: Props) {
  const { actor } = useActor(createActor);

  const [step, setStep] = useState<Step>("info");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [infoErrors, setInfoErrors] = useState<{
    name?: string;
    phone?: string;
  }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const recorder = useVoiceRecorder();

  const handleClose = () => {
    recorder.reset();
    setStep("info");
    setName("");
    setPhone("");
    setInfoErrors({});
    setSubmitting(false);
    setSubmitError(null);
    onOpenChange(false);
  };

  const handleInfoContinue = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: { name?: string; phone?: string } = {};
    if (!name.trim()) errs.name = "Please enter your name.";
    if (!phone.trim()) errs.phone = "Please enter your phone number.";
    if (Object.keys(errs).length > 0) {
      setInfoErrors(errs);
      return;
    }
    setStep("record");
  };

  const handleSend = async () => {
    if (!recorder.audioBlob || !actor) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const arrayBuffer = await recorder.audioBlob.arrayBuffer();
      const uint8 = new Uint8Array(arrayBuffer);
      const externalBlob = ExternalBlob.fromBytes(uint8);
      // The actor's _uploadFile will handle storage and return the encoded key
      // We pass a URL as the storage key if direct upload isn't possible
      const storageKey = externalBlob.getDirectURL();
      await actor.storeVoiceSubmission(name.trim(), phone.trim(), storageKey);
      setStep("success");
    } catch (err) {
      console.error(err);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-md rounded-2xl border border-border/50 shadow-soft"
        data-ocid="voice_dialog.dialog"
      >
        {step === "info" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl font-semibold text-foreground">
                Let us reach out to you
              </DialogTitle>
              <p className="font-body text-sm text-muted-foreground pt-1 leading-relaxed">
                Share your details so we can follow up after your message.
              </p>
            </DialogHeader>

            <form
              onSubmit={handleInfoContinue}
              className="space-y-4 pt-2"
              noValidate
            >
              <div className="space-y-1.5">
                <Label
                  htmlFor="vd-name"
                  className="font-body text-sm text-foreground"
                >
                  Your Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="vd-name"
                  type="text"
                  placeholder="e.g. Alex Johnson"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (infoErrors.name)
                      setInfoErrors((p) => ({ ...p, name: undefined }));
                  }}
                  className="rounded-xl border-input font-body text-sm"
                  aria-invalid={!!infoErrors.name}
                  data-ocid="voice_dialog.name_input"
                />
                {infoErrors.name && (
                  <p
                    className="text-xs font-body text-destructive"
                    data-ocid="voice_dialog.name_field_error"
                  >
                    {infoErrors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="vd-phone"
                  className="font-body text-sm text-foreground"
                >
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="vd-phone"
                  type="tel"
                  placeholder="e.g. +44 7700 123456"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (infoErrors.phone)
                      setInfoErrors((p) => ({ ...p, phone: undefined }));
                  }}
                  className="rounded-xl border-input font-body text-sm"
                  aria-invalid={!!infoErrors.phone}
                  data-ocid="voice_dialog.phone_input"
                />
                {infoErrors.phone && (
                  <p
                    className="text-xs font-body text-destructive"
                    data-ocid="voice_dialog.phone_field_error"
                  >
                    {infoErrors.phone}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-accent/80 hover:bg-accent text-accent-foreground font-body transition-smooth mt-2"
                data-ocid="voice_dialog.continue_button"
              >
                Continue to record
              </Button>
            </form>
          </>
        )}

        {step === "record" && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl font-semibold text-foreground">
                Tell us how you're feeling
              </DialogTitle>
              <p className="font-body text-sm text-muted-foreground pt-1 leading-relaxed">
                Press record and speak freely — there's no right or wrong way to
                feel.
              </p>
            </DialogHeader>

            <div className="pt-2 space-y-6">
              {/* Recorder controls */}
              <div className="flex flex-col items-center gap-4">
                {recorder.error && (
                  <p
                    className="text-xs font-body text-destructive text-center"
                    data-ocid="voice_dialog.error_state"
                  >
                    {recorder.error}
                  </p>
                )}

                {recorder.state === "idle" && (
                  <button
                    type="button"
                    onClick={() => recorder.start()}
                    className="w-20 h-20 rounded-full bg-accent/15 hover:bg-accent/25 border-2 border-accent/40 flex items-center justify-center transition-smooth group"
                    aria-label="Start recording"
                    data-ocid="voice_dialog.record_button"
                  >
                    <Mic
                      className="w-8 h-8 text-accent group-hover:scale-110 transition-smooth"
                      strokeWidth={1.5}
                    />
                  </button>
                )}

                {recorder.state === "recording" && (
                  <>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={recorder.stop}
                        className="w-20 h-20 rounded-full bg-destructive/15 hover:bg-destructive/25 border-2 border-destructive/40 flex items-center justify-center transition-smooth"
                        aria-label="Stop recording"
                        data-ocid="voice_dialog.stop_button"
                      >
                        <Square
                          className="w-7 h-7 text-destructive"
                          strokeWidth={1.5}
                        />
                      </button>
                      {/* Pulse ring */}
                      <span
                        className="absolute inset-0 rounded-full border-2 border-destructive/30 animate-ping"
                        aria-hidden="true"
                      />
                    </div>
                    <p
                      className="font-body text-sm font-medium text-destructive tabular-nums"
                      data-ocid="voice_dialog.loading_state"
                    >
                      Recording · {formatTime(recorder.seconds)}
                    </p>
                  </>
                )}

                {recorder.state === "stopped" && recorder.audioUrl && (
                  <div className="w-full space-y-4">
                    {/* biome-ignore lint/a11y/useMediaCaption: user-generated voice recording, no caption available */}
                    <audio
                      src={recorder.audioUrl}
                      controls
                      className="w-full rounded-xl"
                      data-ocid="voice_dialog.audio_preview"
                    />
                    <p className="font-body text-xs text-muted-foreground text-center">
                      Duration: {formatTime(recorder.seconds)}
                    </p>
                  </div>
                )}
              </div>

              {/* Actions */}
              {recorder.state === "stopped" && (
                <div className="space-y-2">
                  {submitError && (
                    <p
                      className="text-xs font-body text-destructive text-center"
                      data-ocid="voice_dialog.error_state"
                    >
                      {submitError}
                    </p>
                  )}
                  <Button
                    onClick={handleSend}
                    disabled={submitting || !recorder.audioBlob}
                    className="w-full rounded-full bg-primary/90 hover:bg-primary text-primary-foreground font-body shadow-soft transition-smooth"
                    data-ocid="voice_dialog.send_button"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      "Send voice message"
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={recorder.reset}
                    className="w-full rounded-full font-body text-muted-foreground"
                    data-ocid="voice_dialog.re_record_button"
                  >
                    Record again
                  </Button>
                </div>
              )}

              {recorder.state === "idle" && (
                <p className="font-body text-xs text-muted-foreground text-center">
                  Tap the microphone to begin
                </p>
              )}
            </div>
          </>
        )}

        {step === "success" && (
          <div
            className="flex flex-col items-center text-center py-6 gap-4"
            data-ocid="voice_dialog.success_state"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
              <CheckCircle2
                className="w-8 h-8 text-secondary"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Message saved
            </h3>
            <p className="font-body text-muted-foreground text-sm max-w-xs leading-relaxed">
              Your message has been saved — we'll contact you shortly.
            </p>
            <Button
              onClick={handleClose}
              className="mt-2 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground font-body shadow-soft"
              data-ocid="voice_dialog.close_button"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
