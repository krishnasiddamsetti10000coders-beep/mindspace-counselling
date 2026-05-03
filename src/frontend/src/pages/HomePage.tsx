import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Lock,
  Mic,
  Quote,
  Star,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { ContactSection } from "../components/ContactSection";
import { ServiceCard } from "../components/ServiceCard";
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

const services: import("../components/ServiceCard").ServiceData[] = [
  {
    id: 1,
    title: "Individual Counselling",
    brief:
      "A safe, confidential space to explore personal challenges and emotional growth.",
    subServices: [
      "Gain clarity, self-awareness, and emotional strength",
      "Manage stress, anxiety, anger, and life transitions",
      "Build healthy coping skills",
      "Develop positive thinking patterns",
      "Achieve personal growth and inner balance",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 2,
    title: "Couple Counselling",
    brief: "Improve communication and resolve conflicts together.",
    subServices: [
      "A safe space to express feelings openly",
      "Rebuild trust, emotional connection, and mutual respect",
      "Manage disagreements and life changes",
      "Strengthen your relationship",
      "Build a balanced, fulfilling partnership",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 3,
    title: "Stress Management",
    brief: "Learn to cope with daily pressures and find balance.",
    subServices: [
      "Understand personal stress triggers",
      "Relaxation and calming techniques",
      "Improve emotional balance and focus",
      "Live a calmer, more balanced life",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 4,
    title: "Anxiety",
    brief: "Reduce excessive worry and fear to find inner calm.",
    subServices: [
      "A safe space to talk about your concerns",
      "Calm the mind and body",
      "Build confidence and emotional strength",
      "Achieve inner calm and mental well-being",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 5,
    title: "Time Management",
    brief: "Use your time effectively and reduce overwhelm.",
    subServices: [
      "Setting clear goals and priorities",
      "Plan daily tasks better",
      "Reduce stress caused by overload",
      "Achieve improved productivity and balance",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 6,
    title: "Memory Tips",
    brief: "Improve memory and concentration for better performance.",
    subServices: [
      "Understand concepts instead of rote learning",
      "Practical techniques for better recall and revision",
      "Healthy study habits and stress reduction",
      "Improved academic confidence and performance",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 7,
    title: "Psychodynamic Counselling",
    brief: "Understand deep emotional patterns from your past.",
    subServices: [
      "Explore past experiences influencing present thoughts and behaviour",
      "Gain awareness of unconscious feelings and conflicts",
      "Resolve long-standing emotional difficulties",
      "Achieve lasting emotional healing and self-understanding",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 8,
    title: "Marital & Relationship Counselling",
    brief: "Improve understanding and communication in your relationship.",
    subServices: [
      "Resolve conflicts and emotional misunderstandings",
      "A safe, respectful space to express feelings",
      "Rebuild trust and emotional connection",
      "Build healthier, happier, more balanced relationships",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 9,
    title: "De-Addiction Counselling",
    brief: "Break free from dependency with compassionate support.",
    subServices: [
      "Understand emotional, psychological, and behavioural factors behind addiction",
      "Develop healthier coping mechanisms",
      "Build long-term recovery strategies",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 10,
    title: "Suicidal Intervention",
    brief: "Immediate, compassionate emotional support during crisis.",
    subServices: [
      "Feel heard, understood, and safe without judgment",
      "Reduce emotional distress and restore hope",
      "Support for families and caregivers",
      "Achieve safety, emotional stability, and gradual healing",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 11,
    title: "LGBTQIA+ Affirmative Support",
    brief: "A safe, inclusive, non-judgmental space for your journey.",
    subServices: [
      "Explore emotions, identity, relationships, and life challenges",
      "Your lived experiences are affirmed",
      "Build resilience, self-acceptance, and emotional well-being",
      "Find understanding, acceptance, dignity, and confidence",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 12,
    title: "Psychometric Testing",
    brief:
      "Scientifically designed tools to understand your abilities and personality.",
    subServices: [
      "Gain insights for personal, academic, and professional growth",
      "Understand emotional functioning and behavioural patterns",
      "Receive personalized strategies based on results",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 13,
    title: "PTSD Counselling",
    brief: "Compassionate support for processing traumatic experiences.",
    subServices: [
      "Process painful memories and emotions",
      "Manage fear, anxiety, and emotional distress",
      "Build coping skills and emotional stability",
      "Achieve recovery, resilience, and improved quality of life",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 14,
    title: "Adolescent Counselling",
    brief: "A safe space for young individuals navigating growing up.",
    subServices: [
      "Address stress, anxiety, and mood changes",
      "Manage academic pressure and performance concerns",
      "Build self-esteem and resolve identity confusion",
      "Navigate peer pressure and social challenges",
      "Develop emotional regulation skills",
      "Balance screen time, focus, and lifestyle",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 15,
    title: "Sex Counselling",
    brief: "A safe, confidential space for intimacy and sexual well-being.",
    subServices: [
      "Understand needs, address challenges, and improve communication",
      "Build emotional connection, confidence, and healthy expression",
      "Achieve more fulfilling relationships and overall well-being",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 16,
    title: "Marriage Counselling",
    brief: "A secure environment to strengthen your marriage.",
    subServices: [
      "Gain insight into each other's perspectives",
      "Resolve conflicts constructively",
      "Rebuild trust",
      "Build emotional intimacy, mutual respect, and healthier relationship patterns",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 17,
    title: "Pre-Marriage Counselling",
    brief: "Prepare for a healthy, lasting partnership.",
    subServices: [
      "Explore expectations, values, communication styles, and future goals",
      "Strengthen understanding and build emotional readiness",
      "Develop effective conflict-resolution skills",
      "Gain clarity, compatibility, and a strong foundation",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 18,
    title: "Post-Marriage Counselling",
    brief: "Navigate the realities of married life with confidence.",
    subServices: [
      "Address emerging challenges and improve communication",
      "Foster understanding and emotional connection",
      "Build stability, resilience, and a fulfilling married life",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 19,
    title: "Break-Up Counselling",
    brief: "Process emotional pain and heal after a relationship ends.",
    subServices: [
      "Understand your feelings and rebuild self-esteem",
      "Develop healthy coping strategies",
      "Achieve healing, emotional resilience, and personal growth",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 20,
    title: "Couples Counselling",
    brief: "A collaborative environment to deepen your connection.",
    subServices: [
      "Improve communication, resolve conflicts, and deepen emotional understanding",
      "Build trust, empathy, and healthier relationship patterns",
      "Achieve relationship satisfaction and long-term emotional well-being",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 21,
    title: "Divorce Counselling",
    brief: "Navigate the emotional and practical challenges of separation.",
    subServices: [
      "Process complex feelings and manage conflict",
      "Achieve emotional healing, clarity, and resilience",
      "Move forward with confidence, stability, and renewed direction",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 22,
    title: "Domestic Violence Counselling",
    brief: "A safe, confidential, non-judgmental environment for healing.",
    subServices: [
      "Process trauma, restore self-worth, and develop coping strategies",
      "Build safety strategies for the future",
      "Achieve empowerment, emotional healing, and renewed control",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 23,
    title: "Parental Counselling",
    brief: "Support for the challenges and joys of parenting.",
    subServices: [
      "Manage child behaviour and discipline",
      "Bridge communication gaps with children and teens",
      "Address emotional outbursts and parenting stress",
      "Manage screen time, routines, and consistency",
      "Support academic pressure and motivation",
      "Build boundaries with empathy",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 24,
    title: "Learning Disability Counselling",
    brief: "Compassionate support for dyslexia, dysgraphia, and dyscalculia.",
    subServices: [
      "Build confidence and improve learning skills",
      "Promote overall well-being",
      "Receive personalized strategies for your unique needs",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 25,
    title: "Abandonment Counselling",
    brief: "Heal from feeling left, rejected, or unseen.",
    subServices: [
      "Rebuild confidence and inner stability",
      "Develop healthier connections",
      "Create a secure sense of self",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 26,
    title: "ADHD Counselling",
    brief: "Manage attention, impulsivity, and hyperactivity challenges.",
    subServices: [
      "Improve focus, attention, and task completion",
      "Address impulsivity and emotional outbursts",
      "Manage restlessness and hyperactivity",
      "Build time management and organization skills",
      "Navigate academic or workplace struggles",
      "Boost self-esteem and performance confidence",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 27,
    title: "Behavioural Counselling",
    brief: "Reshape patterns of behaviour for a better quality of life.",
    subServices: [
      "Manage anger and emotional outbursts",
      "Address negative habits and repetitive behaviours",
      "Improve self-control and reduce impulsivity",
      "Address stress-related behavioural patterns",
      "Overcome social and interpersonal challenges",
      "Build motivation and consistency",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 28,
    title: "Family Counselling",
    brief: "Improve communication and resolve conflicts within the family.",
    subServices: [
      "Bridge communication gaps and misunderstandings",
      "Resolve parent-child conflicts",
      "Reduce relationship stress within the family",
      "Reconnect emotionally",
      "Navigate life transitions together",
      "Manage expectations and boundaries",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 29,
    title: "Parenting Counselling",
    brief: "Navigate the challenges of raising children with confidence.",
    subServices: [
      "Manage child behaviour and discipline",
      "Bridge communication gaps with children and teens",
      "Address emotional outbursts and parenting stress",
      "Balance screen time, routines, and consistency",
      "Support academic pressure and motivation",
      "Build boundaries with empathy",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 30,
    title: "Low Self-Esteem Counselling",
    brief: "Reconnect with your self-worth and inner confidence.",
    subServices: [
      "Overcome self-doubt and negative self-talk",
      "Build confidence in personal and professional life",
      "Address fear of failure or judgment",
      "Manage comparison and feelings of inadequacy",
      "Learn to set healthy boundaries",
      "Heal the impact of past experiences on self-worth",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 31,
    title: "Grief Counselling",
    brief: "Process grief and loss in a safe, understanding space.",
    subServices: [
      "Navigate denial, anger, bargaining, sadness, and acceptance",
      "Address loss of a loved one, relationship, or life transition",
      "Find meaning and gently move forward",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 32,
    title: "Anger Management",
    brief: "Understand and regulate intense emotions constructively.",
    subServices: [
      "Identify triggers and underlying causes of anger",
      "Learn practical strategies to respond calmly",
      "Build emotional balance and healthier relationships",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 33,
    title: "Depression Counselling",
    brief: "Manage low mood and gradually regain motivation.",
    subServices: [
      "Explore underlying concerns and emotional challenges",
      "Find practical ways to manage low mood",
      "Achieve clarity, strength, and gradual recovery",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 34,
    title: "Bipolar Disorder Counselling",
    brief: "Navigate bipolar disorder and mood changes with support.",
    subServices: [
      "Recognize early signs and manage emotional fluctuations",
      "Build coping skills, routine-building, and self-monitoring strategies",
      "Achieve consistency, control, and a more balanced life",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 35,
    title: "Panic Attack Counselling",
    brief: "Cope with panic attacks and overwhelming fear.",
    subServices: [
      "Build awareness, grounding, and regulation techniques",
      "Develop skills to respond calmly during intense moments",
      "Achieve reduced anxiety and a greater sense of ease",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 36,
    title: "Bullying Counselling",
    brief: "Support for individuals affected by bullying.",
    subServices: [
      "Build self-awareness, confidence, and emotional resilience",
      "Learn to cope and respond assertively",
      "Regain a sense of control and improve self-esteem",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 37,
    title: "Eating Disorders Counselling",
    brief: "Compassionate support for eating-related concerns.",
    subServices: [
      "Understand patterns, thoughts, and underlying triggers",
      "Build healthier coping strategies",
      "Achieve a balanced relationship with food and improved well-being",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 38,
    title: "Overthinking Counselling",
    brief: "Break free from repetitive thought patterns.",
    subServices: [
      "Gain clarity, manage uncertainty, and calm the mind",
      "Reduce rumination and make confident decisions",
      "Achieve a clearer mindset and improved daily functioning",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 39,
    title: "Negative Thinking Counselling",
    brief: "Manage self-critical and negative thoughts effectively.",
    subServices: [
      "Build awareness, reframing, and emotional regulation skills",
      "Learn practical strategies to shift thinking patterns",
      "Achieve a more positive outlook and balanced state of mind",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 40,
    title: "Insomnia & Sleep Disorders",
    brief: "Address insomnia and sleep challenges for restful nights.",
    subServices: [
      "Calm the mind and create effective sleep habits",
      "Manage restlessness and nighttime overthinking",
      "Achieve more restful sleep and a balanced lifestyle",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 41,
    title: "Personality Counselling",
    brief: "Better understand yourself and your interpersonal patterns.",
    subServices: [
      "Explore your traits, patterns, and interpersonal dynamics",
      "Navigate challenges and enhance your strengths",
      "Build confidence, balance, and meaningful personal development",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 42,
    title: "Career Counselling",
    brief: "Make informed, confident career decisions.",
    subServices: [
      "Understand your strengths, interests, and goals",
      "Gain clarity on suitable career paths and opportunities",
      "Make confident choices and achieve meaningful professional growth",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 43,
    title: "Education Counselling",
    brief: "Make informed educational choices for academic success.",
    subServices: [
      "Understand your interests, strengths, and academic goals",
      "Gain clarity on suitable courses and learning pathways",
      "Make confident decisions and achieve academic success",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 44,
    title: "Work-Life Balance Counselling",
    brief: "Manage work-life pressures for greater satisfaction.",
    subServices: [
      "Explore your routines, responsibilities, and stress patterns",
      "Balance productivity with personal well-being",
      "Achieve greater satisfaction, clarity, and emotional balance",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 45,
    title: "Menopause Counselling",
    brief: "Support for women navigating the changes of menopause.",
    subServices: [
      "Understand emotional, physical, and lifestyle shifts",
      "Develop strategies to manage mood changes, stress, and discomfort",
      "Achieve greater balance, confidence, and well-being",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 46,
    title: "Alzheimer's Counselling",
    brief: "Support for individuals with Alzheimer's and their caregivers.",
    subServices: [
      "Address cognitive changes, behavioural symptoms, and emotional responses",
      "Build evidence-informed strategies for communication and daily management",
      "Improve functioning, caregiver confidence, and quality of life",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 47,
    title: "Dementia Counselling",
    brief: "Clinically guided support for dementia-related concerns.",
    subServices: [
      "Address memory decline, behavioural patterns, and psychological impact",
      "Build structured techniques for coping, routine-building, and care planning",
      "Achieve safety, consistency, and overall well-being",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
  },
  {
    id: 48,
    title: "Phobia Counselling",
    brief: "Overcome specific fears and phobias with structured support.",
    subServices: [
      "Understand your triggers and anxiety responses",
      "Use gradual, structured techniques to face and reduce fear",
      "Build increased confidence and improved daily functioning",
    ],
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
  },
  {
    id: 49,
    title: "Motivation Counselling",
    brief: "Overcome lack of motivation and regain your direction.",
    subServices: [
      "Identify barriers, goals, and personal drivers",
      "Build strategies for consistency and purposeful action",
      "Achieve increased focus, confidence, and productivity",
    ],
    colorClass: "text-primary",
    bgClass: "bg-primary/15",
  },
  {
    id: 50,
    title: "EAP (Employee Assistance)",
    brief: "Support employees with personal and work-related concerns.",
    subServices: [
      "Address stress, emotional well-being, and workplace challenges",
      "Receive confidential guidance and practical coping strategies",
      "Achieve improved well-being, productivity, and work performance",
    ],
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
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

// ─── Services Section ────────────────────────────────────────────────────────
function ServicesSection({ onVoiceDialog }: { onVoiceDialog: () => void }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const collapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleExpand = useCallback((id: number) => {
    if (collapseTimer.current) clearTimeout(collapseTimer.current);
    setExpandedId(id);
  }, []);

  const handleCollapse = useCallback(() => {
    collapseTimer.current = setTimeout(() => setExpandedId(null), 120);
  }, []);

  return (
    <section
      id="services"
      className="py-20 md:py-24 bg-background"
      data-ocid="services.section"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading
          badge="How I can help"
          title="Services tailored to you"
          subtitle="Every person's journey is different. Explore 50 specialist areas of support — hover or tap any card to see what's included."
        />

        {/* Grid: auto-fill cols, expanded card spans 2 cols */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          }}
          data-ocid="services.list"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              isExpanded={expandedId === service.id}
              onExpand={handleExpand}
              onCollapse={handleCollapse}
              index={i}
            />
          ))}
        </div>

        {/* "Unable to pick a service?" floating button */}
        <AnimatedDiv delay={300} className="flex justify-center mt-10">
          <button
            type="button"
            onClick={onVoiceDialog}
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
  );
}

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
      <ServicesSection onVoiceDialog={() => setVoiceDialogOpen(true)} />

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
