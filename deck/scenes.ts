import type { SceneDef } from 'beatdeck';
import { SCRIPT } from './script';
import { SCRIPT_ES } from './script.es';

export const SCENES_EN: SceneDef[] = SCRIPT.map((act) => ({
  id: act.id,
  title: act.title,
  beats: act.cards.map((c) => ({
    name: c.name,
    ref: c.ref,
    source: [c.lead, c.title, c.body].filter(Boolean).join(' ') || undefined,
    note: c.note,
  })),
}));

export const SCENES_ES: SceneDef[] = SCRIPT_ES.map((act) => ({
  id: act.id,
  title: act.title,
  beats: act.cards.map((c) => ({
    name: c.name,
    ref: c.ref,
    source: [c.lead, c.title, c.body].filter(Boolean).join(' ') || undefined,
    note: c.note,
  })),
}));

export const SCENES = SCENES_EN; // default export
