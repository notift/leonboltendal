# Phase 3 — Build Brief

## Design Direction

### Kleurpalet
| Token | Hex | Gebruik |
|-------|-----|---------|
| `--bg` | `#FAFCFA` | Altijd de achtergrond |
| `--ink` | `#0D0D0D` | Primaire tekst, H1, display |
| `--stone` | `#7A8A7A` | Body, subtitels, muted tekst |
| `--border` | `#E5EDE5` | Alle randen, scheidingslijnen |
| `--pistache` | `#6AAE7A` | Enige accent. Spaarzaam. Labels, dots, arrows |
| `--pistache-light` | `#EAF5EC` | Pills, hover achtergronden |
| `--forest` | `#2A6A3A` | Accent op donkere secties |
| `--dark-bg` | `#0D0D0D` | Dark sections (footer/CTA dark) |

### Typografie
- **Font:** Outfit (Google Fonts) — gewichten 200, 300, 400, 500
- **Display:** 300 gewicht, 56–72px, letter-spacing -2px to -3px. Voornaam bold (500).
- **Heading:** 300 gewicht, 24–28px, letter-spacing -0.5px
- **Label:** 400 gewicht, 10px, letter-spacing 5px, uppercase, kleur: `--pistache`
- **Body:** 300 gewicht, 15–16px, line-height 1.8, kleur: `--stone`
- **Mono accent:** niet gebruiken — Outfit heeft voldoende karakter

### Fotografie
- Echte foto van Leon (leon.png staat al in map)
- Geen stock
- Circulair formaat, 120–140px

### Animaties
- Staggered fade-up op load: 20px translate + opacity 0→1, 600ms ease
- Stagger: 80ms tussen elementen
- Sections: fade-up met 150ms stagger bij scroll (Intersection Observer)
- Hover states: subtiele border-color change + dot turn green
- `prefers-reduced-motion`: alle animaties direct uitschakelen
- GEEN GSAP nodig — CSS + vanilla JS volstaat voor deze schaal

### Wat te vermijden
- Geen parallax (te zwaar voor dit formaat)
- Geen gradient backgrounds
- Geen shadows (flat design)
- Geen borders met radius > 12px
- Geen kleur behalve pistache (#6AAE7A)

---

## Site Architecture (Onepager)

```
#top     → Nav (sticky, transparant → solid bij scroll)
#hero    → Hero: foto, greeting, H1, bio, CTA
#over    → Over: 2–3 alinea's, citaat-element
#werk    → Werk: 3 items + Notift bridge card
#stack   → Stack: pills grid
#booking → Cal.com embed + intro tekst
         → Footer: © 2026, Manifesto, Algemene Voorwaarden, LinkedIn
```

### Nav structuur
```
Leon.    ·    Werk  Over  Contact
```
- Sticky, max-width 640px, `padding: 20px 0`
- Geen logo — alleen naam als tekst (lettertype: Outfit 400)
- Nav links: Outfit 300, 13px, kleur `--stone`
- Op mobiel: naam links, hamburger rechts

### Content hierarchy per sectie

**Hero:**
- Label: "AI Consultant · Amsterdam"
- Display: "Ik help bedrijven groeien met AI."
- Bio: preview-tekst
- CTA: "Plan een gesprek →" (primary, groen pill)
- Ghost CTA: "Bekijk mijn werk" (outline)

**Over:**
- Label: "Over mij"
- 2 paragrafen uit preview
- Citaat-element (groene left-border): "Je bedrijf moet voor jou werken, niet andersom."

**Werk:**
- Label: "Wat ik doe"
- 3 werk-items met dot-indicator
- Notift bridge card onderaan

**Stack:**
- Label: "Mijn stack"
- Pills: Claude, Cursor, Webflow, Supabase, Vercel, Vapi, Make, n8n

**Booking:**
- Label: "Samenwerken"
- Heading: "Klaar om AI te laten werken voor jouw bedrijf?"
- Sub: "Plan een gratis kennismakingsgesprek van 30 minuten."
- Cal.com inline embed (placeholder: `https://cal.com/leonboltendal/kennismaking`)

**Footer:**
- Links: Leon Boltendal © 2026
- Midden: Manifesto | Algemene Voorwaarden
- Rechts: LinkedIn · notift.nl →

---

## CTA Strategy

- **Primaire goal:** cal.com booking (kennismakingsgesprek)
- **Secundaire goal:** doorverwijzing naar Notift
- **Elke sectie heeft één CTA richting booking** — geen dubbele primaire CTA's
- Booking-embed zit in de pagina zelf (geen redirect naar cal.com)

---

## SEO

- Title: `Leon Boltendal — AI Consultant`
- Meta description: `Ik help vermogende ondernemers AI toepassen zonder zichzelf te verliezen. Plan een gratis kennismakingsgesprek.`
- Keywords: AI consultant Nederland, AI implementatie MKB, AI strategie ondernemer
- Schema: `Person` + `ProfessionalService`
- OG image: placeholder (`og-image.jpg`)
- H1: één per pagina ("Ik help bedrijven groeien met AI.")

---

## Technische vereisten

- HTML5, CSS3, Vanilla JS (geen frameworks)
- Geen externe CSS libs — alles inline of één CSS file
- Cal.com embed via `<script>` tag (inline)
- Google Fonts via `<link preload>`
- Lazy load voor profielfoto
- `prefers-reduced-motion` media query
- Lighthouse target: 90+ alle metrics
- Mobiel-first responsive (breakpoint: 640px)
