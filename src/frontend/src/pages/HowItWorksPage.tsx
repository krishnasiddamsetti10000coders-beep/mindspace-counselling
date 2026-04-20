import { useScrollAnimationDiv } from "@/hooks/useScrollAnimation";

// ── Step data ──────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 24c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M24 32v2M24 14v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" />
      </svg>
    ),
    title: "Reach Out",
    description:
      "Take the first step by getting in touch. Share a little about yourself and what brings you here. There is no pressure, no judgment — just a gentle, open door.",
    accent: "#6FA8DC",
  },
  {
    number: "02",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M12 16h24M12 24h18M12 32h12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="8"
          y="10"
          width="32"
          height="28"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Initial Consultation",
    description:
      "We begin with a warm, informal conversation to understand your needs and answer any questions you might have about the process. You are heard, valued, and understood from the very first session.",
    accent: "#A8C3A0",
  },
  {
    number: "03",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <path
          d="M14 34l8-10 6 6 8-14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="36" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M33 36l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Begin Your Journey",
    description:
      "Together we agree on a personalised plan and begin regular sessions tailored to your unique goals and pace. Progress happens at your rhythm — you are never rushed.",
    accent: "#C3B1E1",
  },
];

// ── Expect cards ───────────────────────────────────────────────────────────
const expectations = [
  {
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M11 16l4 4 6-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "A Safe, Confidential Space",
    description:
      "Everything shared in sessions remains completely private. Your trust is our highest priority.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 16c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "No Judgment, Only Support",
    description:
      "You come as you are. There is no expectation — only compassionate, professional support.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 10v6l4 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Sessions at Your Pace",
    description:
      "Frequency and duration of sessions adapt to your life, availability, and comfort level.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          d="M6 22l5-5 4 4 5-6 6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="4"
          y="6"
          width="24"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Practical Tools and Insights",
    description:
      "Evidence-based techniques give you real skills to use between sessions and long into the future.",
  },
];

// ── FAQ data ───────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How long does a typical session last?",
    a: "Most sessions run for 50–60 minutes. The first consultation may be slightly longer as we take time to understand your background and goals.",
  },
  {
    q: "How many sessions will I need?",
    a: "This varies for every person. Some people benefit from 6–10 sessions; others prefer longer ongoing support. We review progress regularly and adjust together.",
  },
  {
    q: "Is everything I share kept confidential?",
    a: "Yes. Everything discussed in sessions is completely confidential, in accordance with professional ethical guidelines.",
  },
  {
    q: "What if I'm not sure which service is right for me?",
    a: "That's completely fine. The initial consultation is specifically designed to help us understand your situation and recommend the most suitable approach.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────
function StepCard({
  step,
  index,
  reversed,
}: {
  step: (typeof steps)[number];
  index: number;
  reversed: boolean;
}) {
  const ref = useScrollAnimationDiv(index * 120);
  return (
    <div
      ref={ref}
      className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}
      data-ocid={`how-it-works.step.${index + 1}`}
    >
      {/* Number + Icon block */}
      <div className="flex-shrink-0 flex flex-col items-center gap-4 w-full md:w-48">
        <span
          className="font-display text-8xl font-bold leading-none select-none"
          style={{ color: `${step.accent}30` }}
          aria-hidden="true"
        >
          {step.number}
        </span>
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-soft"
          style={{ backgroundColor: `${step.accent}18`, color: step.accent }}
        >
          {step.icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left max-w-xl">
        <h3
          className="font-display text-3xl font-semibold mb-4"
          style={{ color: "#2E2E2E" }}
        >
          {step.title}
        </h3>
        <p
          className="font-body text-base leading-relaxed"
          style={{ color: "#4a4a4a", lineHeight: "1.75" }}
        >
          {step.description}
        </p>
      </div>
    </div>
  );
}

function ExpectCard({
  item,
  index,
}: { item: (typeof expectations)[number]; index: number }) {
  const ref = useScrollAnimationDiv(index * 100);
  return (
    <div
      ref={ref}
      className="bg-card rounded-2xl p-7 shadow-card flex flex-col gap-4 hover:-translate-y-1 transition-smooth"
      data-ocid={`how-it-works.expect.${index + 1}`}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: "#A8C3A020", color: "#A8C3A0" }}
      >
        {item.icon}
      </div>
      <h4
        className="font-display text-lg font-semibold"
        style={{ color: "#2E2E2E" }}
      >
        {item.title}
      </h4>
      <p
        className="font-body text-sm leading-relaxed"
        style={{ color: "#5a5a5a", lineHeight: "1.7" }}
      >
        {item.description}
      </p>
    </div>
  );
}

function FaqItem({
  faq,
  index,
}: { faq: (typeof faqs)[number]; index: number }) {
  const ref = useScrollAnimationDiv(index * 80);
  return (
    <div
      ref={ref}
      className="bg-card rounded-2xl p-7 shadow-card border"
      style={{ borderColor: "#6FA8DC18" }}
      data-ocid={`how-it-works.faq.${index + 1}`}
    >
      <h4
        className="font-display text-lg font-semibold mb-3"
        style={{ color: "#2E2E2E" }}
      >
        {faq.q}
      </h4>
      <p
        className="font-body text-sm leading-relaxed"
        style={{ color: "#5a5a5a", lineHeight: "1.75" }}
      >
        {faq.a}
      </p>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export function HowItWorksPage() {
  const heroRef = useScrollAnimationDiv(0);
  const stepsHeadRef = useScrollAnimationDiv(0);
  const expectHeadRef = useScrollAnimationDiv(0);
  const faqHeadRef = useScrollAnimationDiv(0);
  const ctaRef = useScrollAnimationDiv(0);

  return (
    <div className="min-h-screen bg-background" data-ocid="how-it-works.page">
      {/* ── Hero ── */}
      <section
        className="py-28 px-6 text-center"
        style={{ background: "#F7F5F2" }}
        data-ocid="how-it-works.hero.section"
      >
        <div ref={heroRef} className="max-w-2xl mx-auto">
          <span
            className="inline-block font-body text-sm font-medium tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full"
            style={{ backgroundColor: "#6FA8DC18", color: "#6FA8DC" }}
          >
            Simple &amp; Gentle
          </span>
          <h1
            className="font-display text-5xl md:text-6xl font-semibold mb-6 leading-tight"
            style={{ color: "#2E2E2E" }}
          >
            How It Works
          </h1>
          <p
            className="font-body text-lg md:text-xl mx-auto"
            style={{ color: "#5a5a5a", lineHeight: "1.75", maxWidth: "580px" }}
          >
            Starting your journey with us is simple, gentle, and completely at
            your own pace.
          </p>
        </div>
      </section>

      {/* ── Steps ── */}
      <section
        className="py-24 px-6"
        style={{ background: "#fff" }}
        data-ocid="how-it-works.steps.section"
      >
        <div className="max-w-4xl mx-auto">
          <div ref={stepsHeadRef} className="text-center mb-20">
            <h2
              className="font-display text-4xl font-semibold mb-4"
              style={{ color: "#2E2E2E" }}
            >
              Your path forward in three steps
            </h2>
            <p
              className="font-body text-base mx-auto"
              style={{
                color: "#6a6a6a",
                lineHeight: "1.75",
                maxWidth: "560px",
              }}
            >
              There is no complicated process here — just a calm, human approach
              designed around you.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {steps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                reversed={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Expect ── */}
      <section
        className="py-24 px-6"
        style={{ background: "#A8C3A010" }}
        data-ocid="how-it-works.expect.section"
      >
        <div className="max-w-5xl mx-auto">
          <div ref={expectHeadRef} className="text-center mb-16">
            <h2
              className="font-display text-4xl font-semibold mb-4"
              style={{ color: "#2E2E2E" }}
            >
              What to expect
            </h2>
            <p
              className="font-body text-base mx-auto"
              style={{
                color: "#6a6a6a",
                lineHeight: "1.75",
                maxWidth: "560px",
              }}
            >
              From your very first session, you will find a space built on care,
              professionalism, and complete respect for your wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectations.map((item, i) => (
              <ExpectCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="py-24 px-6"
        style={{ background: "#fff" }}
        data-ocid="how-it-works.faq.section"
      >
        <div className="max-w-3xl mx-auto">
          <div ref={faqHeadRef} className="text-center mb-16">
            <h2
              className="font-display text-4xl font-semibold mb-4"
              style={{ color: "#2E2E2E" }}
            >
              Common questions
            </h2>
            <p
              className="font-body text-base mx-auto"
              style={{
                color: "#6a6a6a",
                lineHeight: "1.75",
                maxWidth: "520px",
              }}
            >
              Answers to the questions we hear most often — because knowing what
              to expect makes taking that first step a little easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 px-6"
        style={{ background: "#C3B1E115" }}
        data-ocid="how-it-works.cta.section"
      >
        <div ref={ctaRef} className="max-w-2xl mx-auto text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
            style={{ backgroundColor: "#C3B1E130", color: "#9B8EC4" }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-8 h-8"
              aria-hidden="true"
            >
              <path
                d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 16l3 3 5-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl font-semibold mb-5 leading-tight"
            style={{ color: "#2E2E2E" }}
          >
            Ready to take the first step?
          </h2>
          <p
            className="font-body text-base mb-10 mx-auto"
            style={{ color: "#5a5a5a", lineHeight: "1.75", maxWidth: "480px" }}
          >
            Support is available whenever you feel ready. There is no rush —
            only a warm, confidential space waiting for you.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 font-body font-medium text-base px-8 py-4 rounded-full shadow-soft hover:-translate-y-0.5 transition-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={
              {
                backgroundColor: "#6FA8DC",
                color: "#fff",
                focusOutlineColor: "#6FA8DC",
              } as React.CSSProperties
            }
            data-ocid="how-it-works.cta.primary_button"
          >
            Book a Session
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                d="M5 10h10M11 6l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
