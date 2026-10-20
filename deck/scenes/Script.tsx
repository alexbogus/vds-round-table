import { Reveal, Scene, useScene } from 'beatdeck';
import { SCRIPT } from '../script';
import { SCRIPT_ES } from '../script.es';
import type { Card } from '../script';

function Copy({ c }: { c: Card }) {
  return (
    <>
      {c.kicker && <div className="t-eyebrow script-kicker">{c.kicker}</div>}
      {c.lead && <div className="script-lead" data-exact>{c.lead}</div>}
      {c.title && <div className="script-title" data-exact style={{ fontSize: c.size ?? 76 }}>{c.title}</div>}
      {c.body && <div className="script-body" data-exact>{c.body}</div>}
      {c.meta?.map((m) => <div key={m} className="script-meta">{m}</div>)}
    </>
  );
}

function CardView({ c }: { c: Card }) {
  if (!c.photo) return <Copy c={c} />;
  return (
    <div className="script-row">
      <div className="script-copy"><Copy c={c} /></div>
      <img className="script-photo" src={c.photo} alt={c.title ?? ''} />
    </div>
  );
}

function Beat({ index, lang }: { index: number; lang: 'en' | 'es' }) {
  const { here, b } = useScene();
  const script = lang === 'es' ? SCRIPT_ES : SCRIPT;
  return (
    <>
      {index === 0 && (
        <div style={{ position: 'absolute', left: 952, top: 532, width: 16, height: 16, background: 'var(--accent)', opacity: here && b === 0 ? 1 : 0, transition: 'opacity 400ms' }} />
      )}
      {script[index].cards.map((c, k) => {
        if (c.image) {
          return (
            <img
              key={c.name}
              className="script-cover"
              src={c.image}
              alt={c.title ?? ''}
              style={{ opacity: here && b === k ? 1 : 0 }}
            />
          );
        }
        if (!c.kicker && !c.lead && !c.title && !c.body) return null;
        return (
          <Reveal key={c.name} on={here && b === k} out={here && b > k} x={160} y={c.y ?? 120} style={{ width: 1480 }}>
            <CardView c={c} />
          </Reveal>
        );
      })}
    </>
  );
}

export function Script({ lang }: { lang: 'en' | 'es' }) {
  const script = lang === 'es' ? SCRIPT_ES : SCRIPT;
  return (
    <>
      {script.map((act, i) => (
        <Scene key={act.id} index={i}>
          <Beat index={i} lang={lang} />
        </Scene>
      ))}
    </>
  );
}
