import { useEffect, useRef } from "react";

// ─── Generic scroll animation hook ───────────────────────────────────────────
function useScrollAnim<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.classList.add("animate-on-scroll");
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }
    if (delay > 0) el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

// ─── Scroll-to helper ────────────────────────────────────────────────────────
function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Overview card ───────────────────────────────────────────────────────────
interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  target: string;
  delay?: number;
}

function OverviewCard({ icon, title, target, delay = 0 }: OverviewCardProps) {
  const ref = useScrollAnim<HTMLButtonElement>(delay);
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => scrollToSection(target)}
      data-ocid={`services.overview.${target}`}
      className="
        w-full cursor-pointer flex flex-col items-center gap-4 p-8 rounded-2xl
        bg-card border border-border shadow-card
        hover:-translate-y-1 hover:shadow-soft transition-smooth
        text-center select-none
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary
      "
    >
      <span className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <h3 className="font-display text-lg font-semibold text-foreground">
        {title}
      </h3>
      <span className="text-sm text-muted-foreground">Learn more →</span>
    </button>
  );
}

// ─── Bullet card ─────────────────────────────────────────────────────────────
interface BulletCardProps {
  text: string;
  delay?: number;
}

function BulletCard({ text, delay = 0 }: BulletCardProps) {
  const ref = useScrollAnim<HTMLDivElement>(delay);
  return (
    <div
      ref={ref}
      className="
        flex items-start gap-3 px-5 py-4 rounded-2xl
        bg-background/70 border border-border/60 shadow-card
      "
    >
      <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
        <svg
          className="w-3 h-3 text-primary"
          fill="none"
          viewBox="0 0 12 12"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
        </svg>
      </span>
      <p className="text-sm leading-relaxed text-foreground/80 font-body">
        {text}
      </p>
    </div>
  );
}

// ─── Image placeholder ───────────────────────────────────────────────────────
interface ImagePlaceholderProps {
  tint: "sage" | "lavender" | "blue";
}

function ImagePlaceholder({ tint }: ImagePlaceholderProps) {
  const colors = {
    sage: "bg-secondary/20 border-secondary/30",
    lavender: "bg-accent/20 border-accent/30",
    blue: "bg-primary/10 border-primary/20",
  };
  return (
    <div
      className={`rounded-3xl border-2 ${colors[tint]} flex flex-col items-center justify-center gap-3 min-h-[340px] w-full`}
      aria-hidden="true"
    >
      <svg
        className="w-16 h-16 text-secondary/40"
        fill="none"
        viewBox="0 0 64 64"
        stroke="currentColor"
        strokeWidth={1.2}
        aria-hidden="true"
      >
        <circle cx="32" cy="22" r="10" />
        <path d="M8 56c0-13.3 10.7-24 24-24s24 10.7 24 24" />
      </svg>
    </div>
  );
}

// ─── Service section ─────────────────────────────────────────────────────────
interface ServiceSectionProps {
  id: string;
  title: string;
  paragraphs: string[];
  bullets: string[];
  imageFirst?: boolean;
  imageTint: "sage" | "lavender" | "blue";
  bgClass: string;
}

function ServiceSection({
  id,
  title,
  paragraphs,
  bullets,
  imageFirst = false,
  imageTint,
  bgClass,
}: ServiceSectionProps) {
  const headRef = useScrollAnim<HTMLDivElement>(0);
  const imageRef = useScrollAnim<HTMLDivElement>(100);
  const labelRef = useScrollAnim<HTMLDivElement>(0);

  const contentBlock = (
    <div className="flex flex-col gap-6">
      <div ref={headRef}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-5 leading-tight">
          {title}
        </h2>
        <div className="flex flex-col gap-4">
          {paragraphs.map((p) => (
            <p
              key={p.slice(0, 32)}
              className="font-body text-foreground/70 leading-[1.75] max-w-[640px]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
      <div>
        <div ref={labelRef}>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">
            When to consider this service
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {bullets.map((b, i) => (
            <BulletCard key={b.slice(0, 32)} text={b} delay={i * 80} />
          ))}
        </div>
      </div>
    </div>
  );

  const imageBlock = (
    <div ref={imageRef} className="flex-1 min-w-0">
      <ImagePlaceholder tint={imageTint} />
    </div>
  );

  return (
    <section
      id={id}
      className={`${bgClass} py-24`}
      data-ocid={`services.${id}.section`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          className={`flex flex-col ${imageFirst ? "md:flex-row-reverse" : "md:flex-row"} gap-14 items-center`}
        >
          <div className="flex-1 min-w-0">{contentBlock}</div>
          {imageBlock}
        </div>
      </div>
    </section>
  );
}

// ─── Trust item ───────────────────────────────────────────────────────────────
interface TrustItemProps {
  icon: React.ReactNode;
  text: string;
  delay?: number;
}

function TrustItem({ icon, text, delay = 0 }: TrustItemProps) {
  const ref = useScrollAnim<HTMLDivElement>(delay);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 text-center px-4"
    >
      <span className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-card border border-border">
        {icon}
      </span>
      <p className="font-body text-sm font-medium text-foreground/80 max-w-[160px] leading-snug">
        {text}
      </p>
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconPerson = () => (
  <svg
    className="w-6 h-6 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-5.5 3.6-8 8-8s8 2.5 8 8" />
  </svg>
);
const IconCouple = () => (
  <svg
    className="w-6 h-6 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="8" r="3" />
    <path d="M2 20c0-4 2.7-6 6-6" />
    <path d="M22 20c0-4-2.7-6-6-6" />
    <path d="M8 14h8" />
  </svg>
);
const IconBrain = () => (
  <svg
    className="w-6 h-6 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <path d="M9.5 2a4.5 4.5 0 0 1 4.5 4.5v.5h1a3.5 3.5 0 1 1 0 7H9.5A4.5 4.5 0 0 1 9.5 2z" />
    <path d="M14 14v6M10 14v6" />
  </svg>
);
const IconClock = () => (
  <svg
    className="w-5 h-5 text-secondary-foreground"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);
const IconShield = () => (
  <svg
    className="w-5 h-5 text-secondary-foreground"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <path d="M12 3l8 3.5V12c0 4.4-3.6 7.8-8 9-4.4-1.2-8-4.6-8-9V6.5L12 3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const IconEdit = () => (
  <svg
    className="w-5 h-5 text-secondary-foreground"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);
const IconCheck = () => (
  <svg
    className="w-5 h-5 text-secondary-foreground"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
  </svg>
);

// ─── Main page ────────────────────────────────────────────────────────────────
export function ServicesPage() {
  const heroHeadRef = useScrollAnim<HTMLDivElement>(0);
  const heroSubRef = useScrollAnim<HTMLDivElement>(150);
  const heroCtaRef = useScrollAnim<HTMLDivElement>(280);
  const overviewRef = useScrollAnim<HTMLDivElement>(0);
  const ctaRef = useScrollAnim<HTMLDivElement>(0);
  const ctaSubRef = useScrollAnim<HTMLDivElement>(150);
  const ctaBtnRef = useScrollAnim<HTMLDivElement>(280);

  return (
    <div className="min-h-screen bg-background" data-ocid="services.page">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="bg-background py-28 md:py-36"
        data-ocid="services.hero.section"
      >
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center flex flex-col items-center gap-7">
          <div ref={heroHeadRef}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Supporting you through every stage of your journey
            </h1>
          </div>
          <div ref={heroSubRef}>
            <p className="font-body text-lg md:text-xl text-foreground/65 leading-[1.75] max-w-[640px]">
              Professional counselling services designed to help you navigate
              emotional challenges, strengthen relationships, and build
              healthier patterns.
            </p>
          </div>
          <div ref={heroCtaRef}>
            <button
              type="button"
              data-ocid="services.hero.book_button"
              onClick={() => scrollToSection("individual")}
              className="
                inline-flex items-center gap-2 px-8 py-4 rounded-full
                font-body font-medium text-base
                bg-primary text-primary-foreground
                hover:-translate-y-0.5 hover:shadow-soft transition-smooth
              "
            >
              Book a Session
            </button>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW CARDS ───────────────────────────────────────────────── */}
      <section
        className="bg-muted/40 py-16"
        data-ocid="services.overview.section"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div ref={overviewRef} className="text-center mb-10">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Our Services
            </h2>
            <p className="text-sm text-muted-foreground mt-2 font-body">
              Select a service to learn more
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <OverviewCard
              icon={<IconPerson />}
              title="Individual Counselling"
              target="individual"
              delay={0}
            />
            <OverviewCard
              icon={<IconCouple />}
              title="Couples Counselling"
              target="couples"
              delay={100}
            />
            <OverviewCard
              icon={<IconBrain />}
              title="Behavioural Support"
              target="behavioural"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* ── INDIVIDUAL COUNSELLING ───────────────────────────────────────── */}
      <ServiceSection
        id="individual"
        title="Individual Counselling"
        imageTint="sage"
        bgClass="bg-background"
        paragraphs={[
          "Individual Counselling offers a confidential and supportive environment to explore personal concerns, emotional challenges, and life experiences.",
          "Through one-on-one sessions, clients are guided towards greater self-awareness, emotional balance, and effective coping strategies.",
          "The process is focused on fostering personal growth, resilience, and overall psychological well-being.",
        ]}
        bullets={[
          "Persistent feelings of anxiety, stress, or low mood",
          "Difficulty managing emotions or daily pressures",
          "Concerns related to self-esteem or self-confidence",
          "Challenges during major life transitions or decision-making",
          "Feelings of isolation, lack of clarity, or direction",
        ]}
      />

      {/* ── COUPLES COUNSELLING (alternating) ───────────────────────────── */}
      <ServiceSection
        id="couples"
        title="Couples Counselling"
        imageTint="lavender"
        bgClass="section-alt"
        imageFirst
        paragraphs={[
          "Couples Counselling provides a structured and neutral space for partners to address relationship concerns and strengthen their connection.",
          "It focuses on improving communication, resolving conflicts, and rebuilding trust within the relationship.",
          "The aim is to support couples in developing a healthier, more understanding, and fulfilling partnership.",
        ]}
        bullets={[
          "Ongoing conflicts or frequent disagreements",
          "Communication difficulties or misunderstandings",
          "Trust-related concerns or unresolved past issues",
          "Emotional distance or lack of connection",
          "Difficulties in shared decision-making or responsibilities",
        ]}
      />

      {/* ── BEHAVIOURAL SUPPORT ─────────────────────────────────────────── */}
      <ServiceSection
        id="behavioural"
        title="Behavioural Support"
        imageTint="blue"
        bgClass="bg-background"
        paragraphs={[
          "Behavioural Support focuses on identifying and modifying patterns of behaviour that may be limiting personal or professional growth.",
          "Using evidence-based approaches, clients are supported in developing healthier habits and adaptive responses.",
          "This service aims to promote sustainable behavioural change and improved day-to-day functioning.",
        ]}
        bullets={[
          "Persistent unhealthy habits or repetitive behaviour patterns",
          "Difficulty managing anger, impulses, or reactions",
          "Low motivation or challenges with productivity",
          "Avoidance behaviours or chronic procrastination",
          "Difficulty adjusting to change or new environments",
        ]}
      />

      {/* ── TRUST BAND ──────────────────────────────────────────────────── */}
      <section
        className="py-20 bg-secondary/15 border-y border-secondary/20"
        data-ocid="services.trust.section"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <TrustItem
              icon={<IconClock />}
              text="10+ years of professional experience"
              delay={0}
            />
            <TrustItem
              icon={<IconShield />}
              text="Confidential and safe environment"
              delay={100}
            />
            <TrustItem
              icon={<IconEdit />}
              text="Personalized approach for every individual"
              delay={200}
            />
            <TrustItem
              icon={<IconCheck />}
              text="Evidence-based therapeutic methods"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-background" data-ocid="services.cta.section">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <div
            className="
              flex flex-col items-center gap-6 text-center
              bg-accent/15 border border-accent/25 rounded-3xl
              px-8 py-14
            "
          >
            <div ref={ctaRef}>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Take the first step when you're ready
              </h2>
            </div>
            <div ref={ctaSubRef}>
              <p className="font-body text-foreground/65 leading-[1.75] max-w-[540px]">
                Support is available in a safe and understanding space.
              </p>
            </div>
            <div ref={ctaBtnRef}>
              <button
                type="button"
                data-ocid="services.cta.book_button"
                onClick={() => scrollToSection("individual")}
                className="
                  inline-flex items-center gap-2 px-8 py-4 rounded-full
                  font-body font-medium text-base
                  bg-primary text-primary-foreground
                  hover:-translate-y-0.5 hover:shadow-soft transition-smooth
                "
              >
                Book Your First Session
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
