# Design Brief

## Direction
Psychological counselling website with calm, trust-building minimalism. Visual identity combines Alma's structural clarity with Headspace's emotional warmth. Prioritizes emotional tone over technical details.

## Tone
Empathetic, professional, non-judgmental, safe, personal (not corporate). Soft colors, generous whitespace, minimal visual friction.

## Differentiation
Every section has intentional surface treatment (card backgrounds, subtle borders, alternating muted zones). No ghost text on flat backgrounds. Typography hierarchy through Fraunces serif + General Sans sans-serif creates authority + readability balance.

## Color Palette

| Token | OKLCH | Hex | Purpose |
|-------|-------|-----|---------|
| Primary | 0.65 0.10 248 | #6FA8DC | Soft blue for CTAs, headings, primary interactive elements |
| Secondary | 0.70 0.06 155 | #A8C3A0 | Sage green for supporting elements, success states |
| Accent | 0.75 0.08 320 | #C3B1E1 | Lavender for highlights, emotional emphasis |
| Background | 0.97 0.02 60 | #F7F5F2 | Warm off-white page background |
| Foreground | 0.18 0.01 280 | #2E2E2E | Soft text, not pure black |
| Card | 1.0 0.01 100 | #FDFCFB | Elevated surfaces for sections |
| Muted | 0.90 0.01 280 | #E8E6E2 | Borders, dividers, subtle backgrounds |

## Typography

| Tier | Font | Use |
|------|------|-----|
| Display | Fraunces (serif, 400–900) | Headings, hero, section titles; calm authority |
| Body | General Sans (400–700) | Body text, labels, UI; high readability |
| Mono | System monospace | Code, technical content (minimal use) |

**Scale**: 12px base → 16px body → 18px UI → 24px section → 32px hero

## Elevation & Depth
Light mode: white cards on warm background with subtle 1–2px borders (muted color).
Dark mode: layered greys (#1e, #24, #2a) with soft borders and elevated primary text.
Shadows: minimal (no drop shadows), use borders + background layering instead.

## Structural Zones

| Zone | Treatment | Visual |
|------|-----------|--------|
| Header | Card background (--card) with bottom border | Navigation clarity |
| Hero | Full-width primary gradient background with centered content | Emotional entry point |
| Content Sections | Alternating --background and --muted/10 backgrounds | Breathing rhythm |
| Card Component | --card with subtle border-muted, 14px radius | Section cards, testimonials |
| Footer | --muted/20 background with --border top, multi-column layout | Clean closure |
| CTA Zone | Primary button + secondary link option | Clear next action |

## Spacing & Rhythm
Generous whitespace throughout. Section padding: 80px vertical (64px on mobile). Card padding: 24px. Gap between cards: 20px.
Uses 8px base grid: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px.

## Component Patterns
- **Button**: Rounded 12px, 16px padding, smooth transition on hover
- **Card**: 14px radius, border, subtle background lift
- **Input**: 12px radius, 12px padding, focus ring on primary
- **Badge**: Rounded-full, small padding, muted background + primary text

## Motion
Scroll-triggered animations: fade-in-up (translateY 20px→0, 0.8s ease-out).
Hover states: smooth color shift (0.3s cubic-bezier(0.4, 0, 0.2, 1)).
No bounce, no rotations, no flashy effects — calm, purposeful motion only.

## Constraints
- No pure black or pure white
- No aggressive contrast gradients
- Typography hierarchy through size + weight, not color alone
- CTAs always visible and unambiguous
- Content paragraphs max 3 lines for readability

## Signature Detail
Playfair serif headings paired with General Sans body creates warmth + professionalism balance. Lavender accent used sparingly for emotional highlights (testimonials, key phrases). Rounded cards 14–16px soften clinical feel.
