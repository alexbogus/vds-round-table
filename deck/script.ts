/**
 * The moderator script, copied character for character from `reference/vds-round-table.md`.
 * Every card is one beat; `npm run verify -- --source=reference/vds-round-table.md` checks the text on stage.
 * Never retype this text in a scene: import it from here.
 */
import victorPhoto from './assets/victor.jpg';
import gustavoPhoto from './assets/gustavo.jpg';
import felipePhoto from './assets/felipe.jpg';
import coverImage from './assets/cover.jpg';

/** Official VDS 2026 speaker headshots (vds.tech/speakers) and the round-table cover card. */
export const PHOTOS = { victor: victorPhoto, gustavo: gustavoPhoto, felipe: felipePhoto, cover: coverImage };

export interface Card {
  /** Beat name, shown in the overview and the presenter. */
  name: string;
  /** Where it comes from in the source. */
  ref: string;
  /** Speaker cue. The audience never sees it. */
  note?: string;
  /** Structural label above the card (`QUESTION 2`). */
  kicker?: string;
  /** Spoken line that introduces the card. */
  lead?: string;
  /** Spoken statement / name. `\n` breaks the line on purpose. */
  title?: string;
  size?: number;
  /** Spoken paragraph. */
  body?: string;
  /** Non-spoken reference under the title. */
  meta?: string[];
  /** Speaker headshot, shown to the right of the text. */
  photo?: string;
  /** Full-bleed image for the beat; on stage it replaces the card text. */
  image?: string;
  /** Tighter cards start a little lower (cover). */
  y?: number;
}

export interface Act {
  id: string;
  title: string;
  cards: Card[];
}

export const SCRIPT: Act[] = [
  {
    id: '01',
    title: 'OPEN',
    cards: [
      { name: 'standby', ref: 'run of show', note: 'Black screen until the first tap.' },
      {
        name: 'title',
        ref: 'Event data',
        note: 'Wait for the room to settle. Tap once to start.',
        kicker: "Round Table 20' · Future Stage",
        title: 'Communications, AI,\nand Cyber Defense:\nThe New Digital Battlefield',
        size: 92,
        image: PHOTOS.cover,
        meta: [
          'Alejandro Aliaga — Cyber Defense & Critical Infraestructure Professional',
          '21 of October, from 13:40 to 14:00',
        ],
        y: 210,
      },
      {
        name: 'intro 1/3',
        ref: 'Introducción ¶1',
        note: 'Introduction — paragraph 1 of 3.',
        kicker: 'Introduction',
        body: 'For decades, efforts have been focused on deploying more and more sensors, platforms, and command centers. Today, recent conflicts have shown us that the real challenge lies in maintaining their capabilities when the adversary attempts to degrade their communications, manipulate information, or directly attack them, as they have become a primary target.',
      },
      {
        name: 'intro 2/3',
        ref: 'Introducción ¶2',
        note: 'Introduction — paragraph 2 of 3.',
        kicker: 'Introduction',
        body: 'C4ISR systems can no longer be understood solely as command and control platforms; they are distributed digital systems and, like any digital system, they are a priority target for the adversary, who will not hesitate to use electronic warfare (EW) systems, cyberattacks, spoofing, jamming, and data manipulation to degrade their capabilities.',
      },
      {
        name: 'intro 3/3',
        ref: 'Introducción ¶3',
        note: 'Introduction — paragraph 3 of 3. Pause before the transition.',
        kicker: 'Introduction',
        body: 'Superiority no longer depends solely on having more sensors or better communications, but on ensuring that information remains reliable even when everything is under attack.',
      },
    ],
  },
  {
    id: '02',
    title: 'PANEL',
    cards: [
      {
        name: 'transition · quote',
        ref: 'Transition ¶1',
        note: 'Repeat the closing line as the bridge into the panel.',
        kicker: 'Transition',
        title: 'Superiority no longer depends solely on having more sensors or better communications, but on ensuring that information remains reliable even when everything is under attack.',
        size: 60,
      },
      {
        name: 'transition · frame',
        ref: 'Transition ¶2',
        note: 'Sets up the three panelists.',
        kicker: 'Transition',
        body: 'To address how we can guarantee resilience, secure operations, and technological sovereignty across every layer of this digital battlefield—from communications and AI-driven decision-making to public policy—we are joined today by three leaders from the forefront of this space:',
      },
      {
        name: 'Víctor M. Vicente Terán',
        ref: 'Transition ¶3',
        note: 'Panelist 1 — resilient connectivity.',
        kicker: 'Panel 1',
        lead: 'First, addressing the vital layer of resilient connectivity in hostile environments:',
        title: 'Víctor M. Vicente Terán',
        size: 68,
        photo: PHOTOS.victor,
        body: 'Co-Founder and Chief Sales Officer at BeeChat, a company focused on open-source mesh networks and tactical communications designed to maintain critical operations when traditional networks are degraded or targeted.',
      },
      {
        name: 'Gustavo Medina',
        ref: 'Transition ¶4',
        note: 'Panelist 2 — AI and operational data.',
        kicker: 'Panel 2',
        lead: 'Next, focusing on how we harness AI and operational data under operational stress:',
        title: 'Gustavo Medina',
        size: 68,
        photo: PHOTOS.gustavo,
        body: 'Founder and CEO of XRF (XReality Factor), a dual-use startup delivering extended intelligence and real-time 3D situational awareness for defense and emergency command centers operating in complex, contested environments.',
      },
      {
        name: 'Felipe Carrasco Torres',
        ref: 'Transition ¶5',
        note: 'Panelist 3 — public policy and industrial base.',
        kicker: 'Panel 3',
        lead: 'And providing the strategic framework and public policy perspective:',
        title: 'Felipe Carrasco Torres',
        size: 68,
        photo: PHOTOS.felipe,
        body: 'Regional Secretary for Industry, Trade, and Consumption at the Generalitat Valenciana, who brings the governmental vision on strengthening industrial cybersecurity, fostering dual-use innovation, and building resilient technological ecosystems.',
      },
    ],
  },
  {
    id: '03',
    title: 'Q1 · CONNECTIVITY',
    cards: [
      {
        name: 'question 1',
        ref: 'Questions → 1',
        note: 'Ask, then let him answer. The question stays on screen.',
        kicker: 'Question 1',
        title: 'From Connectivity to Survival',
        size: 64,
        body: 'Víctor, for years the challenge was connecting systems; today it’s keeping them connected under jamming and physical attack. How does this shift fundamentally change how BeeChat designs resilient tactical communication networks, and how do you ensure an operator can maintain operational tempo when data feed accuracy is compromised?',
      },
    ],
  },
  {
    id: '04',
    title: 'Q2 · AI IN C4ISR',
    cards: [
      {
        name: 'question 2',
        ref: 'Questions → 2',
        note: 'Ask, then let him answer.',
        kicker: 'Question 2',
        title: 'Artificial Intelligence in C4ISR: Decision Superiority or Information Saturation?',
        size: 64,
        body: "Gustavo, we are integrating AI when the battlefield generates more raw data than ever. At XRF, how do you prevent cognitive overload? Specifically, what information should the system actively hide or suppress under fire, and where must the AI's recommendation end and human command begin when seconds matter?",
      },
    ],
  },
  {
    id: '05',
    title: 'Q3 · SOVEREIGNTY',
    cards: [
      {
        name: 'question 3',
        ref: 'Questions → 3',
        note: 'Ask, then let him answer.',
        kicker: 'Question 3',
        title: 'Technological Sovereignty & Regional Industrial Capabilities',
        size: 64,
        body: "Felipe, achieving European technological sovereignty requires a solid industrial foundation. From the Generalitat Valenciana's perspective, how can public policy actively support dual-use tech ecosystems so local innovators like BeeChat and XRF can scale, while ensuring regional suppliers build the cyber resilience needed",
      },
    ],
  },
  {
    id: '06',
    title: 'Q4 · OPEN',
    cards: [
      {
        name: 'open question',
        ref: 'Questions → 4',
        note: 'Open question for all three. One minute, then the closing round.',
        kicker: 'Question 4',
        lead: 'Before our final closing thoughts, I have an open question for all three of you.',
        body: 'There is no technological sovereignty without innovation. In your experience, what role does innovation play in building true sovereign capabilities? And how is your organization investing in technology that is not just competitive, but strategically vital for Europe?',
      },
    ],
  },
  {
    id: '07',
    title: 'CLOSING',
    cards: [
      {
        name: 'final question',
        ref: 'Questions → 5',
        note: '30 seconds each. Go around the table.',
        kicker: 'Conclusion',
        lead: 'To conclude, 30 seconds each:',
        title: 'What is the single most urgent priority for C4ISR resilience in the next three years?',
        size: 72,
      },
      {
        name: 'closing words',
        ref: 'Closing final words',
        note: 'Thank the panel, then the room. End of session.',
        kicker: 'Closing',
        body: 'Thank you Víctor, Gustavo, and Felipe for your conciseness and key insights, and thank you to the audience. Have a great day.',
      },
    ],
  },
];
