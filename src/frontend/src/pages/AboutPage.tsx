import { useScrollAnimationDiv } from "../hooks/useScrollAnimation";

const trustBadges = [
  {
    icon: "🔒",
    title: "Confidential Environment",
    desc: "Everything shared in sessions remains strictly private and protected.",
  },
  {
    icon: "🌿",
    title: "Personalised Care",
    desc: "Each client receives a tailored approach that honours their unique journey.",
  },
  {
    icon: "📋",
    title: "Evidence-Based Methods",
    desc: "Sessions are grounded in well-researched, clinically validated therapeutic techniques.",
  },
];

const philosophyPoints = [
  {
    heading: "A Calm, Non-Judgmental Space",
    text: "The foundation of all work here is safety. Every session is shaped by deep respect, genuine curiosity, and the belief that you deserve to be heard — without judgment, without pressure.",
  },
  {
    heading: "Collaborative & Client-Led",
    text: "You set the pace. Progress unfolds at your comfort level, with your goals guiding the direction. Therapy is a partnership, not a prescription.",
  },
  {
    heading: "Sustainable, Lasting Change",
    text: "Rather than quick fixes, the focus is on building awareness, resilience, and practical tools you can carry with you long after sessions end.",
  },
];

function TrustBadge({
  icon,
  title,
  desc,
  delay,
}: {
  icon: string;
  title: string;
  desc: string;
  delay: number;
}) {
  const ref = useScrollAnimationDiv(delay);
  return (
    <div
      ref={ref}
      className="bg-card rounded-2xl p-6 shadow-card flex flex-col gap-3 text-center"
    >
      <span className="text-3xl" role="img" aria-hidden="true">
        {icon}
      </span>
      <h3 className="font-display text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p
        className="font-body text-sm leading-relaxed"
        style={{ color: "#6b7280" }}
      >
        {desc}
      </p>
    </div>
  );
}

function PhilosophyCard({
  heading,
  text,
  delay,
}: {
  heading: string;
  text: string;
  delay: number;
}) {
  const ref = useScrollAnimationDiv(delay);
  return (
    <div ref={ref} className="max-w-2xl mx-auto text-center px-4">
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {heading}
      </h3>
      <p
        className="font-body leading-relaxed text-base"
        style={{ color: "#6b7280", lineHeight: "1.75" }}
      >
        {text}
      </p>
    </div>
  );
}

export function AboutPage() {
  const heroRef = useScrollAnimationDiv(0);
  const aboutTextRef = useScrollAnimationDiv(100);
  const aboutImageRef = useScrollAnimationDiv(0);
  const credentialsTitleRef = useScrollAnimationDiv(0);
  const philosophyTitleRef = useScrollAnimationDiv(0);
  const ctaRef = useScrollAnimationDiv(0);

  return (
    <div data-ocid="about.page" className="min-h-screen bg-background">
      {/* ─── HERO ─── */}
      <section
        className="py-24 md:py-32 text-center"
        style={{
          background: "linear-gradient(135deg, #f0ebfa 0%, #e8f4fc 100%)",
        }}
        data-ocid="about.hero_section"
      >
        <div ref={heroRef} className="max-w-2xl mx-auto px-6">
          <p
            className="font-body text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#9b87c9" }}
          >
            About the Practice
          </p>
          <h1
            className="font-display text-4xl md:text-5xl font-semibold mb-6 leading-tight"
            style={{ color: "#2E2E2E" }}
          >
            About Your Therapist
          </h1>
          <p
            className="font-body text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: "#6b7280", lineHeight: "1.75" }}
          >
            Welcome. This is a space built entirely around you — your pace, your
            story, and your wellbeing. Here you'll learn about the person and
            principles behind MindSpace Counselling.
          </p>
        </div>
      </section>

      {/* ─── THERAPIST ABOUT ─── */}
      <section
        className="py-20 md:py-28 px-6"
        style={{ background: "#F7F5F2" }}
        data-ocid="about.therapist_section"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image column */}
          <div
            ref={aboutImageRef}
            className="flex justify-center md:justify-end"
          >
            <div
              className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-soft"
              style={{ aspectRatio: "5/6" }}
            >
              <img
                src="/assets/generated/about-therapist.dim_600x700.jpg"
                alt="MindSpace Counselling therapist in a calm office setting"
                className="w-full h-full object-cover"
              />
              {/* Decorative accent */}
              <div
                className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl opacity-40"
                style={{ background: "#A8C3A0" }}
              />
            </div>
          </div>

          {/* Content column */}
          <div ref={aboutTextRef} className="flex flex-col gap-6">
            <div>
              <p
                className="font-body text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#6FA8DC" }}
              >
                10+ Years of Experience
              </p>
              <h2
                className="font-display text-3xl md:text-4xl font-semibold leading-snug mb-5"
                style={{ color: "#2E2E2E" }}
              >
                A Compassionate Guide on Your Journey
              </h2>
            </div>

            <p
              className="font-body leading-relaxed"
              style={{ color: "#6b7280", lineHeight: "1.8", maxWidth: "600px" }}
            >
              With over a decade of professional experience in psychological
              counselling, I have supported hundreds of individuals and couples
              in navigating some of life's most challenging moments — with
              empathy, clarity, and deep respect for each person's story.
            </p>
            <p
              className="font-body leading-relaxed"
              style={{ color: "#6b7280", lineHeight: "1.8", maxWidth: "600px" }}
            >
              My approach is warm, grounded, and entirely person-centred.
              Whether you are working through anxiety, relationship strain, or
              patterns that no longer serve you, sessions are tailored to your
              specific needs — never a one-size-fits-all formula.
            </p>
            <p
              className="font-body leading-relaxed"
              style={{ color: "#6b7280", lineHeight: "1.8", maxWidth: "600px" }}
            >
              Specialising in individual counselling, couples therapy, and
              behavioural support, I draw on evidence-based modalities including
              CBT, person-centred therapy, and mindfulness-informed practice.
              The goal is always the same: sustainable change and a deeper sense
              of wellbeing.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: "rgba(111, 168, 220, 0.08)" }}
                >
                  <span className="text-xl mt-0.5" aria-hidden="true">
                    {badge.icon}
                  </span>
                  <div>
                    <p
                      className="font-body text-sm font-semibold"
                      style={{ color: "#2E2E2E" }}
                    >
                      {badge.title}
                    </p>
                    <p
                      className="font-body text-xs leading-relaxed mt-1"
                      style={{ color: "#9ca3af" }}
                    >
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS / TRUST BAND ─── */}
      <section
        className="py-20 md:py-24 px-6"
        style={{ background: "#eef5ee" }}
        data-ocid="about.credentials_section"
      >
        <div className="max-w-5xl mx-auto">
          <div ref={credentialsTitleRef} className="text-center mb-12">
            <h2
              className="font-display text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: "#2E2E2E" }}
            >
              Qualifications &amp; Commitments
            </h2>
            <p
              className="font-body text-base max-w-xl mx-auto"
              style={{ color: "#6b7280", lineHeight: "1.75" }}
            >
              Every aspect of this practice is held to the highest professional
              and ethical standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trustBadges.map((badge, i) => (
              <TrustBadge
                key={badge.title}
                icon={badge.icon}
                title={badge.title}
                desc={badge.desc}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section
        className="py-20 md:py-28 px-6"
        style={{ background: "#F7F5F2" }}
        data-ocid="about.philosophy_section"
      >
        <div className="max-w-4xl mx-auto">
          <div ref={philosophyTitleRef} className="text-center mb-14">
            <p
              className="font-body text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#A8C3A0" }}
            >
              How We Work
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: "#2E2E2E" }}
            >
              Our Approach
            </h2>
            <p
              className="font-body text-base max-w-xl mx-auto"
              style={{ color: "#6b7280", lineHeight: "1.75" }}
            >
              The principles that guide every session, every conversation, and
              every step of your journey.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {philosophyPoints.map((point, i) => (
              <PhilosophyCard
                key={point.heading}
                heading={point.heading}
                text={point.text}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-20 md:py-28 px-6"
        style={{
          background: "linear-gradient(135deg, #e8f4fc 0%, #f0ebfa 100%)",
        }}
        data-ocid="about.cta_section"
      >
        <div ref={ctaRef} className="max-w-2xl mx-auto text-center">
          <h2
            className="font-display text-3xl md:text-4xl font-semibold mb-4 leading-snug"
            style={{ color: "#2E2E2E" }}
          >
            Ready to begin your journey?
          </h2>
          <p
            className="font-body text-base mb-8"
            style={{ color: "#6b7280", lineHeight: "1.75" }}
          >
            Support is here, in a safe and understanding space. There is no
            pressure — only an open door when you feel ready.
          </p>
          <a
            href="/#contact"
            className="inline-block font-body font-semibold text-sm px-8 py-4 rounded-full transition-smooth hover:-translate-y-1 hover:shadow-soft"
            style={{
              background: "#6FA8DC",
              color: "#ffffff",
              boxShadow: "0 4px 18px rgba(111, 168, 220, 0.35)",
            }}
            data-ocid="about.book_session_button"
          >
            Book a Session
          </a>
        </div>
      </section>
    </div>
  );
}
