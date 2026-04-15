import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  CalendarCheck,
  CheckCircle2,
  Heart,
  Lock,
  Mic,
  Quote,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import { ContactSection } from "../components/ContactSection";
import { VoiceRecordingDialog } from "../components/VoiceRecordingDialog";
import { useScrollAnimationDiv } from "../hooks/useScrollAnimation";

// ─── Animated Section Wrapper ────────────────────────────────────────────────
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

// ─── Section Heading ─────────────────────────────────────────────────────────
function SectionHeading({
  badge,
  title,
  subtitle,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <AnimatedDiv className="text-center max-w-2xl mx-auto mb-14">
      {badge && (
        <Badge
          variant="outline"
          className="mb-4 rounded-full border-primary/30 text-primary bg-primary/8 px-4 py-1 text-xs font-body font-medium tracking-wider uppercase"
        >
          {badge}
        </Badge>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-snug mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-muted-foreground text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedDiv>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const feelings = [
  { icon: "🌊", label: "Overwhelmed by thoughts or emotions" },
  { icon: "💔", label: "Struggling in your relationship" },
  { icon: "🔄", label: "Stuck in patterns you can't change" },
  { icon: "😔", label: "Feeling anxious, stressed, or lost" },
  { icon: "🌫️", label: "Wanting clarity but not knowing where to start" },
];

const services = [
  {
    icon: Heart,
    title: "Individual Counselling",
    description:
      "A space to explore your thoughts, emotions, and personal challenges with guidance and care.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Couples Counselling",
    description:
      "Helping partners understand each other better, improve communication, and rebuild connection.",
    color: "text-secondary",
    bg: "bg-secondary/20",
  },
  {
    icon: Brain,
    title: "Behavioural Support",
    description:
      "Work through habits, patterns, and behaviours that may be holding you back.",
    color: "text-accent",
    bg: "bg-accent/20",
  },
];

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book a session",
    description:
      "Choose a time that suits you. Online or in-person — your comfort comes first.",
  },
  {
    number: "02",
    icon: Lock,
    title: "Talk in confidence",
    description:
      "Share openly in a safe, non-judgmental space. Everything stays between us.",
  },
  {
    number: "03",
    icon: Star,
    title: "Grow together",
    description:
      "Work through your challenges with compassionate, personalised guidance.",
  },
];

const trustPoints = [
  "10+ years of experience",
  "Confidential and safe environment",
  "Personalised approach for every individual",
];

const testimonials = [
  {
    quote: "I finally felt heard and understood.",
    author: "M. P.",
    role: "Individual counselling",
  },
  {
    quote: "It helped me see things differently and clearly.",
    author: "S. K.",
    role: "Couples counselling",
  },
  {
    quote: "A safe space where I could truly open up.",
    author: "L. T.",
    role: "Behavioural support",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export function HomePage() {
  const [voiceDialogOpen, setVoiceDialogOpen] = useState(false);

  const handleBooking = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center overflow-hidden bg-background"
        data-ocid="hero.section"
      >
        {/* Soft background blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-20 right-0 w-[55vw] h-[70vh] rounded-l-[6rem] bg-primary/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/15 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-accent/12 blur-2xl" />
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            {/* Text */}
            <div>
              <AnimatedDiv>
                <Badge
                  variant="outline"
                  className="mb-6 rounded-full border-secondary/40 text-secondary bg-secondary/15 px-4 py-1.5 text-xs font-body font-medium tracking-widest uppercase"
                >
                  Private Psychological Counselling
                </Badge>
              </AnimatedDiv>
              <AnimatedDiv delay={100}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.15] mb-6">
                  You don't have to figure everything{" "}
                  <span className="italic text-primary">out alone.</span>
                </h1>
              </AnimatedDiv>
              <AnimatedDiv delay={200}>
                <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
                  Professional psychological counselling for individuals and
                  couples. A safe, confidential space to understand your
                  thoughts, emotions, and relationships.
                </p>
              </AnimatedDiv>
              <AnimatedDiv delay={300} className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="rounded-full px-7 bg-primary/90 hover:bg-primary text-primary-foreground shadow-soft transition-smooth font-body"
                  onClick={handleBooking}
                  data-ocid="hero.book_button"
                >
                  Book a Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-7 border-border hover:bg-muted transition-smooth font-body text-foreground"
                  onClick={handleBooking}
                  data-ocid="hero.talk_button"
                >
                  Talk to Someone
                </Button>
              </AnimatedDiv>
              <AnimatedDiv delay={400} className="flex items-center gap-5 mt-8">
                {trustPoints.slice(0, 2).map((point) => (
                  <div key={point} className="flex items-center gap-1.5">
                    <CheckCircle2
                      className="w-4 h-4 text-secondary shrink-0"
                      strokeWidth={2}
                    />
                    <span className="text-xs font-body text-muted-foreground">
                      {point}
                    </span>
                  </div>
                ))}
              </AnimatedDiv>
            </div>

            {/* Hero image */}
            <AnimatedDiv delay={150} className="relative hidden md:block">
              <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/5] max-w-md mx-auto">
                <img
                  src="/assets/generated/hero-counselling.dim_1200x800.jpg"
                  alt="Calm counselling environment"
                  className="w-full h-full object-cover"
                />
                {/* Floating trust card */}
                <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-md rounded-2xl p-4 shadow-card border border-border/40 max-w-[200px]">
                  <p className="font-display text-sm font-semibold text-foreground mb-0.5">
                    10+ years
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    Supporting individuals & couples
                  </p>
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      {/* ── Relatability ─────────────────────────────────────────────── */}
      <section
        id="feelings"
        className="py-20 md:py-24 section-alt"
        data-ocid="feelings.section"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading
            badge="You are not alone"
            title="You might be feeling…"
            subtitle="Thousands of people quietly carry these feelings. Recognising them is the first step towards change."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {feelings.map((item, i) => (
              <AnimatedDiv
                key={item.label}
                delay={i * 80}
                className="bg-card rounded-2xl p-5 border border-border/50 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300"
                data-ocid={`feelings.item.${i + 1}`}
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="font-body text-sm text-foreground/80 leading-snug">
                  {item.label}
                </p>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section
        id="services"
        className="py-20 md:py-24 bg-background"
        data-ocid="services.section"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading
            badge="How I can help"
            title="Services tailored to you"
            subtitle="Every person's journey is different. I offer specialised support across three key areas."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedDiv
                  key={service.title}
                  delay={i * 100}
                  className="group bg-card rounded-2xl p-7 border border-border/50 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
                  data-ocid={`services.item.${i + 1}`}
                >
                  <div
                    className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-5`}
                  >
                    <Icon
                      className={`w-6 h-6 ${service.color}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </AnimatedDiv>
              );
            })}
          </div>

          {/* "Unable to pick a service?" floating button */}
          <AnimatedDiv delay={300} className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setVoiceDialogOpen(true)}
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 bg-accent/15 hover:bg-accent/25 border border-accent/35 text-accent-foreground shadow-card hover:shadow-soft transition-smooth font-body text-sm font-medium"
              data-ocid="services.voice_recording_button"
            >
              <div className="w-7 h-7 rounded-full bg-accent/25 flex items-center justify-center shrink-0">
                <Mic className="w-4 h-4 text-accent" strokeWidth={1.5} />
              </div>
              <span>
                Unable to pick a service?{" "}
                <span className="text-accent font-semibold">
                  Record a voice message
                </span>
              </span>
            </button>
          </AnimatedDiv>
        </div>
      </section>

      {/* Voice recording dialog */}
      <VoiceRecordingDialog
        open={voiceDialogOpen}
        onOpenChange={setVoiceDialogOpen}
      />

      {/* ── How It Works ─────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-20 md:py-24 section-blue-tint"
        data-ocid="process.section"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading
            badge="Simple steps"
            title="Simple steps to get started"
            subtitle="Taking the first step is often the hardest. I've made the process as gentle as possible."
          />
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* connector line */}
            <div
              className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-border/60"
              aria-hidden="true"
            />
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedDiv
                  key={step.title}
                  delay={i * 120}
                  className="text-center relative"
                  data-ocid={`process.step.${i + 1}`}
                >
                  <div className="relative inline-flex">
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border/50 shadow-card flex items-center justify-center mb-5 mx-auto">
                      <Icon
                        className="w-7 h-7 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-body font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </AnimatedDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-20 md:py-24 bg-background"
        data-ocid="about.section"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <AnimatedDiv className="relative order-2 md:order-1">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-xs mx-auto shadow-soft">
                <img
                  src="/assets/generated/hero-counselling.dim_1200x800.jpg"
                  alt="Therapist portrait"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Trust badges */}
              <div className="absolute top-6 -right-4 md:-right-6 bg-card/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-card border border-border/40">
                <p className="font-display text-lg font-bold text-primary">
                  10+
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Years experience
                </p>
              </div>
              <div className="absolute bottom-8 -left-4 md:-left-6 bg-card/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-card border border-border/40">
                <p className="font-display text-lg font-bold text-secondary">
                  500+
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Clients supported
                </p>
              </div>
            </AnimatedDiv>

            <div className="order-1 md:order-2">
              <AnimatedDiv>
                <Badge
                  variant="outline"
                  className="mb-4 rounded-full border-secondary/40 text-secondary bg-secondary/15 px-4 py-1 text-xs font-body tracking-widest uppercase"
                >
                  About the therapist
                </Badge>
              </AnimatedDiv>
              <AnimatedDiv delay={100}>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-snug mb-5">
                  A space built on trust and understanding
                </h2>
              </AnimatedDiv>
              <AnimatedDiv delay={200}>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  With over 10 years of experience in psychological counselling,
                  I offer a compassionate and non-judgmental space where you can
                  openly share your thoughts and feelings.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-7">
                  My approach focuses on understanding you as a person — your
                  experiences, emotions, and patterns — and guiding you towards
                  clarity, balance, and growth.
                </p>
              </AnimatedDiv>
              <AnimatedDiv delay={300} className="space-y-3">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2
                        className="w-3.5 h-3.5 text-secondary"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="font-body text-sm text-foreground/80">
                      {point}
                    </span>
                  </div>
                ))}
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section
        id="testimonials"
        className="py-20 md:py-24 section-alt"
        data-ocid="testimonials.section"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading
            badge="Kind words"
            title="What clients say"
            subtitle="Real experiences from people who have taken the first step."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedDiv
                key={t.author}
                delay={i * 100}
                className="bg-card rounded-2xl p-7 border border-border/50 shadow-card relative"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <Quote
                  className="w-7 h-7 text-primary/30 mb-4"
                  strokeWidth={1.5}
                />
                <p className="font-display text-lg italic text-foreground/90 leading-relaxed mb-5">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                    <span className="text-xs font-body font-semibold text-primary">
                      {t.author.split(" ")[0][0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-foreground">
                      {t.author}
                    </p>
                    <p className="text-xs font-body text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact + Clinic Location ────────────────────────────────── */}
      <ContactSection />
    </>
  );
}
