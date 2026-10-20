# Content audit — Communications, AI, and Cyber Defense

Source: `reference/vds-round-table.md` (event brief + moderator script). Design reference: neutral theme (default).
Rule: the source decides **what** is said; the design reference decides **how** it looks and moves.

This deck is a **moderator prompter for the iPad**, not an audience screen. Every beat is one block of the
script, in reading order, so the whole spoken text can be followed with a tap. Nothing is summarised.

It exists in two languages: `deck/script.ts` (English, the source language) and `deck/script.es.ts` (Spanish
translation of the same cards). The EN/ES button top-right switches between them and remembers the choice.
`npm run verify -- --source=reference/vds-round-table.md` checks the English text against the source; the Spanish
version is a translation, so it has no source text to be checked against.

## Facts (never guess)

| Fact | Value | Source |
| --- | --- | --- |
| Title | Communications, AI, and Cyber Defense: The New Digital Battlefield | event brief |
| Moderator / role | Alejandro Aliaga — Cyber Defense & Critical Infraestructure Professional | event brief (typo kept verbatim, see Open questions) |
| Event | VDS 2026 · Round Table 20' · Future Stage · 21 of October, from 13:40 to 14:00 | event brief |
| Arrival | 20 minutes before · Lake Meeting Point | event brief (not on stage; in the runbook) |
| Language | English | event brief |
| QR target | none — no audience screen, so no QR | decision |

## Script → beat mapping

| Source block | What it carries | Beat(s) | Status |
| --- | --- | --- | --- |
| Event data | Official cover card: title, moderator, the three panelists, date, venue | 1.2 | kept (image; the title also stays in the card data for the presenter) |
| Introducción ¶1 | "For decades, efforts have been focused…" | 1.3 | kept |
| Introducción ¶2 | "C4ISR systems can no longer be understood…" | 1.4 | kept |
| Introducción ¶3 | "Superiority no longer depends solely…" | 1.5 | kept |
| Transition ¶1 | repeated "Superiority…" bridge line | 2.1 | kept |
| Transition ¶2 | "To address how we can guarantee resilience…" | 2.2 | kept |
| Transition ¶3 | "First, addressing the vital layer…" + Víctor M. Vicente Terán + bio | 2.3 | kept |
| Transition ¶4 | "Next, focusing on how we harness AI…" + Gustavo Medina + bio | 2.4 | kept |
| Transition ¶5 | "And providing the strategic framework…" + Felipe Carrasco Torres + bio | 2.5 | kept |
| Questions 1 | From Connectivity to Survival + the question to Víctor | 3.1 | kept |
| Questions 2 | Artificial Intelligence in C4ISR… + the question to Gustavo | 4.1 | kept |
| Questions 3 | Technological Sovereignty… + the question to Felipe | 5.1 | kept |
| Questions 4 | "Before our final closing thoughts…" + the open question on innovation and sovereignty | 6.1 | kept |
| Questions 5 | To conclude, 30 seconds each: the final question | 7.1 | kept |
| Closing final words | Thank-you line | 7.2 | kept |
| Description | Three paragraphs, verbatim identical to Introducción ¶1–¶3 | 1.3–1.5 | merged (carried once via the intro) |
| Panelists (short list) | Names and companies only | 2.3–2.5 | merged (the spoken intros carry fuller names and roles) |
| Arrival time / Meeting Point | Logistics | — | cut from the stage (runbook) |

Status: **kept** (carried as is) · **restored** · **merged** · **cut** (say why and who agreed) · **new**.
No block is summarised, reworded or invented. Cards split a source block only at paragraph or panelist
boundaries, and every card is checked verbatim against the source by `npm run verify -- --source=…`.

## Real artefacts

| Artefact | File | Used in | Rights / credit |
| --- | --- | --- | --- |
| Víctor M. Vicente Terán headshot | `deck/assets/victor.jpg` | 2.3 | Official VDS 2026 speaker photo, vds.tech/speakers |
| Gustavo Medina headshot | `deck/assets/gustavo.jpg` | 2.4 | Official VDS 2026 speaker photo, vds.tech/speakers |
| Felipe Carrasco Torres headshot | `deck/assets/felipe.jpg` | 2.5 | Official VDS 2026 speaker photo, vds.tech/speakers |
| Round-table cover card | `deck/assets/cover.jpg` | 1.2 | Official VDS 2026 round-table image, supplied by the moderator (LinkedIn CDN, 800×450) |

Photos are the event's own 500×500 speaker headshots, bundled locally (no hotlink, no remote request). The cover
is bundled too, so the expiring CDN link is never used at runtime; at 1920 px it is upscaled from 800×450.

## Open questions

- [ ] "**Infraestructure**" (1.2, moderator role): typo in the source, kept verbatim. Confirm and I fix it.
- [ ] Felipe's role: the brief lists "Regional Secretary for Innovation", the intro says "Regional Secretary for
      Industry, Trade, and Consumption". The intro (spoken) is on stage at 2.5. Which one is current?
- [ ] Q3 (5.1) ends mid-sentence in the source: "…build the cyber resilience needed" — no closing `?`.
      Kept exactly as given; confirm the intended ending before you read it aloud.
- [ ] "Victor M.Vicente Terán" (brief) vs "Víctor M. Vicente Terán" (intro): the intro is on stage at 2.3.
- [ ] "Conclussion" (source heading, not spoken): the scene label is "CONCLUSION". No stage text depends on it.

## Decisions taken on the speaker's behalf

- Teleprompter only: no projector, no QR, no audience chrome beyond the quiet scene label and beat ticks.
- Neutral (dark) theme: easier on the eyes and less light spill than the light variant during a 20-minute panel.
- One beat per paragraph / panelist / question; the question stays on screen while the panelist answers.
- Body type 50 px on the 1920×1080 stage (≈ 31 px on an iPad Pro in landscape), no text under 24 px.
- `deck/script.ts` is the single source of the exact English text; `deck/scenes.ts` derives the beat map from it,
  so the two cannot drift. `deck/script.es.ts` mirrors the same cards in Spanish.
- Panel headshots sit to the right of the text on 2.3–2.5 (320×320), so the moderator can put a face to each
  name while introducing them.
- 1.2 is the official cover image full-bleed, with no text drawn over it (the poster already carries the title,
  names, venue and time). It is the same image in EN and ES.
- The bottom navigation bar and its ‹ › arrows are operator UI, mounted outside the 1920×1080 stage in
  `src/main.tsx`, so they keep finger size on the iPad instead of scaling with the deck. It never appears in the
  stage audit or in the presenter view.
