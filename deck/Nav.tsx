import { deck, useDeck } from 'beatdeck';

/**
 * Operator navigation, mounted outside the stage in `src/main.tsx`, so it stays thumb-sized on the iPad
 * instead of scaling with the 1920×1080 stage. Jumps are zero-based; the labels in `ITEMS` are the beats
 * the moderator jumps between, not every card.
 */
const ITEMS = [
  { en: 'Start', es: 'Inicio', scene: 0, beat: 1 },
  { en: 'Introduction', es: 'Introducción', scene: 0, beat: 2 },
  { en: 'Transition', es: 'Transición', scene: 1, beat: 0 },
  { en: 'Question 1', es: 'Pregunta 1', scene: 2, beat: 0 },
  { en: 'Question 2', es: 'Pregunta 2', scene: 3, beat: 0 },
  { en: 'Question 3', es: 'Pregunta 3', scene: 4, beat: 0 },
  { en: 'Question 4', es: 'Pregunta 4', scene: 5, beat: 0 },
  { en: 'Conclusion', es: 'Conclusión', scene: 6, beat: 0 },
  { en: 'Closing', es: 'Cierre', scene: 6, beat: 1 },
] as const;

// The language toggle reloads the page, so reading it once at module load is enough.
const lang: 'en' | 'es' = localStorage.getItem('vds_deck_lang') === 'es' ? 'es' : 'en';

export function Nav() {
  const { s, b } = useDeck((st) => ({ s: st.scene, b: st.beat }));
  const last = deck.scenes.length - 1;
  const atStart = s === 0 && b === 0;
  const atEnd = s === last && b === deck.scenes[last].beats.length - 1;

  return (
    <nav className="nav">
      <button className="nav-arrow" onClick={() => deck.prev()} disabled={atStart} aria-label="Previous beat">‹</button>
      <div className="nav-jumps">
        {ITEMS.map((it) => {
          const here = s === it.scene && b === it.beat;
          return (
            <button
              key={it.en}
              className={`nav-chip${here ? ' here' : ''}`}
              onClick={() => deck.go({ scene: it.scene, beat: it.beat })}
              aria-current={here ? 'true' : undefined}
            >
              {it[lang]}
            </button>
          );
        })}
      </div>
      <button className="nav-arrow" onClick={() => deck.next()} disabled={atEnd} aria-label="Next beat">›</button>
    </nav>
  );
}
