import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useActor } from "@caffeineai/core-infrastructure";
import { ArrowRight, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { createActor } from "../backend";
import { useScrollAnimationDiv } from "../hooks/useScrollAnimation";

function AnimatedDiv({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useScrollAnimationDiv(delay);
  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const COUNSELLING_TYPES = [
  "Individual Counselling",
  "Couples Counselling",
  "Behavioural Therapy",
];

const clinicInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Wellness Ave, Suite 4\nLondon, W1A 1AA",
  },
  { icon: Phone, label: "Phone", value: "+44 20 1234 5678" },
  {
    icon: Clock,
    label: "Opening Hours",
    value: "Mon–Fri: 9am – 6pm\nSat: 10am – 3pm",
  },
];

export function ContactSection() {
  const { actor } = useActor(createActor);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [counsellingType, setCounsellingType] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const validate = () => {
    const next: { name?: string; phone?: string } = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!phone.trim()) next.phone = "Please enter your phone number.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    if (!actor) return;
    setStatus("loading");
    try {
      await actor.storeContactSubmission(
        name.trim(),
        phone.trim(),
        counsellingType || "Not specified",
      );
      setStatus("success");
      setName("");
      setPhone("");
      setCounsellingType("");
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 section-blue-tint"
      data-ocid="contact.section"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <AnimatedDiv className="text-center max-w-2xl mx-auto mb-14">
          <Badge
            variant="outline"
            className="mb-4 rounded-full border-primary/30 text-primary bg-primary/8 px-4 py-1 text-xs font-body font-medium tracking-wider uppercase"
          >
            Reach out
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-snug mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-muted-foreground text-base leading-relaxed">
            Ready to take the first step? Fill in the form and we'll be in touch
            within 24 hours.
          </p>
        </AnimatedDiv>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Clinic location */}
          <AnimatedDiv delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Visit the Clinic
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  We offer a warm, private space where you can feel comfortable
                  sharing. All sessions are strictly confidential.
                </p>
              </div>

              <div className="space-y-5">
                {clinicInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon
                        className="w-5 h-5 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-0.5">
                        {label}
                      </p>
                      <p className="font-body text-sm text-foreground whitespace-pre-line leading-relaxed">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-2xl p-5 border border-border/50 shadow-card">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-secondary shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    All conversations are completely confidential. Your privacy
                    and comfort are our priority.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedDiv>

          {/* Right: Contact form */}
          <AnimatedDiv delay={200}>
            <div
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-card"
              data-ocid="contact.form_card"
            >
              {status === "success" ? (
                <div
                  className="flex flex-col items-center text-center py-8 gap-4"
                  data-ocid="contact.success_state"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle2
                      className="w-7 h-7 text-secondary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Message received!
                  </h3>
                  <p className="font-body text-muted-foreground text-sm max-w-xs leading-relaxed">
                    Thank you, we'll be in touch soon!
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 rounded-full border-border font-body"
                    onClick={() => setStatus("idle")}
                    data-ocid="contact.send_another_button"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    Send a Message
                  </h3>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="font-body text-sm text-foreground"
                    >
                      Your Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Sarah Mitchell"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name)
                          setErrors((p) => ({ ...p, name: undefined }));
                      }}
                      className="rounded-xl border-input font-body text-sm"
                      aria-invalid={!!errors.name}
                      data-ocid="contact.name_input"
                    />
                    {errors.name && (
                      <p
                        className="text-xs font-body text-destructive"
                        data-ocid="contact.name_field_error"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-phone"
                      className="font-body text-sm text-foreground"
                    >
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="e.g. +44 7700 123456"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone)
                          setErrors((p) => ({ ...p, phone: undefined }));
                      }}
                      className="rounded-xl border-input font-body text-sm"
                      aria-invalid={!!errors.phone}
                      data-ocid="contact.phone_input"
                    />
                    {errors.phone && (
                      <p
                        className="text-xs font-body text-destructive"
                        data-ocid="contact.phone_field_error"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Counselling Type */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-type"
                      className="font-body text-sm text-foreground"
                    >
                      Type of Counselling
                    </Label>
                    <Select
                      value={counsellingType}
                      onValueChange={setCounsellingType}
                    >
                      <SelectTrigger
                        id="contact-type"
                        className="rounded-xl border-input font-body text-sm"
                        data-ocid="contact.counselling_type_select"
                      >
                        <SelectValue placeholder="Select a service (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {COUNSELLING_TYPES.map((type) => (
                          <SelectItem
                            key={type}
                            value={type}
                            className="font-body"
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {status === "error" && (
                    <p
                      className="text-xs font-body text-destructive"
                      data-ocid="contact.error_state"
                    >
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-soft transition-smooth font-body"
                    data-ocid="contact.submit_button"
                  >
                    {status === "loading" ? (
                      <span
                        className="flex items-center gap-2"
                        data-ocid="contact.loading_state"
                      >
                        <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs font-body text-muted-foreground text-center">
                    We'll respond within 24 hours · Strictly confidential
                  </p>
                </form>
              )}
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}
