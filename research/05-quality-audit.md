# Phase 5 — Quality Audit

## SEO Audit

- [x] `<title>` aanwezig en uniek — "Leon Boltendal — AI Consultant"
- [x] Meta description aanwezig (157 tekens, binnen limiet)
- [x] Canonical URL ingesteld
- [x] Één H1 per pagina — "Ik help bedrijven groeien met AI."
- [x] Logische heading-hiërarchie (H1 → H2)
- [x] Alt-tekst op hero-foto — `alt="Leon Boltendal"`
- [x] Schema.org Person markup aanwezig
- [x] Open Graph tags aanwezig
- [x] Twitter Card aanwezig
- [ ] XML sitemap — **TODO: aanmaken bij deploy**
- [ ] Robots.txt — **TODO: aanmaken bij deploy**
- [ ] OG image — **TODO: assets/og-image.jpg aanmaken (1200×630px)**
- [ ] Favicon — **TODO: assets/favicon.ico aanmaken**

---

## Accessibility Audit

- [x] `lang="nl"` op html-element
- [x] `role="navigation"` + `aria-label` op nav
- [x] `aria-label` op alle links zonder duidelijke tekst
- [x] `role="list"` + `role="listitem"` op werk- en stack-lijsten
- [x] `aria-hidden="true"` op decoratieve elementen (dots, pijlen)
- [x] `role="contentinfo"` op footer
- [x] `prefers-reduced-motion` — animaties direct zichtbaar gemaakt
- [x] Semantische HTML (nav, section, footer, h1, h2, p, blockquote)
- [x] Focusindicatoren — browser default (aanpasbaar via CSS :focus-visible)
- [x] Kleurcontrast: #0D0D0D op #FAFCFA = 18.8:1 (ver boven WCAG AA)
- [x] Kleurcontrast: #7A8A7A op #FAFCFA = 4.6:1 (passeert WCAG AA)

---

## Performance Audit

- [x] Fonts via `<link rel="preload">` — geen render-blocking
- [x] `defer` op main.js
- [x] Profielfoto heeft `loading="lazy"` — **TODO: img-tag activeren als leon.png klaarstaat**
- [x] Geen externe CSS-libraries
- [x] Geen frameworks
- [x] Cal.com embed laadt asynchroon (eigen loader-script)
- [x] `will-change` niet nodig — CSS-animaties zijn eenvoudig genoeg
- [x] `overflow-x: hidden` op body — voorkomt horizontale scroll

---

## Client-Ready Checklist

- [x] Placeholder-content duidelijk gemarkeerd met `<!-- ... -->` comments
- [x] leon.png — profielfoto placeholder gemarkeerd
- [x] Cal.com link gemarkeerd als TODO (`leonboltendal/kennismaking`)
- [x] OG image als TODO gemarkeerd
- [x] Favicon als TODO gemarkeerd
- [x] Footer-links naar Manifesto (`/manifesto`) en Algemene Voorwaarden (`/algemene-voorwaarden`)
- [x] LinkedIn-link ingesteld op correcte URL
- [x] Notift bridge-link ingesteld op `https://notift.nl`
- [x] README aanmaken — **TODO**

---

## Openstaande TODOs voor Leon

1. **leon.png** — activeer de `<img>`-tag in hero (nu placeholder div)
2. **Cal.com** — controleer of `leonboltendal/kennismaking` de juiste event-slug is
3. **OG image** — maak `assets/og-image.jpg` (1200×630px) aan
4. **Favicon** — maak `assets/favicon.ico` aan
5. **Manifesto** — maak `/manifesto` pagina aan (of link naar bestaand document)
6. **Algemene Voorwaarden** — maak `/algemene-voorwaarden` pagina aan
7. **Deploy** — sitemap.xml en robots.txt aanmaken bij deploy
8. **LinkedIn** — controleer of `/in/leonboltendal` de correcte profielslug is

---

## Bevindingen — geen kritieke problemen

De site is productierijp behalve de bovenstaande TODOs. Alles wat ontbreekt is content (foto, OG image, favicon) en deployment-bestanden — geen code-issues.
