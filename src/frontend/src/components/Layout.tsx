import { Outlet } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { VoiceRecordingDialog } from "./VoiceRecordingDialog";

export function Layout() {
  const [voiceDialogOpen, setVoiceDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />

      {/* Floating "Unable to pick a service?" button */}
      <button
        type="button"
        onClick={() => setVoiceDialogOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-accent/90 hover:bg-accent text-accent-foreground text-sm font-body font-medium px-4 py-3 rounded-full shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-card"
        aria-label="Unable to pick a service? Leave a voice message"
        data-ocid="floating.voice_button"
      >
        <MessageCircle className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
        <span className="hidden sm:inline">Unable to pick a service?</span>
      </button>

      <VoiceRecordingDialog
        open={voiceDialogOpen}
        onOpenChange={setVoiceDialogOpen}
      />
    </div>
  );
}
