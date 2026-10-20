import { defineDeck } from 'beatdeck';
import { useState, useEffect, type MouseEvent as ReactMouseEvent } from 'react';
import '../themes/neutral.css';
import './deck.css';
import { config } from './deck.config';
import { SCENES_EN, SCENES_ES } from './scenes';
import { Script } from './scenes/Script';

function LangToggle() {
  const [lang, setLang] = useState<'en' | 'es'>(() => {
    return (localStorage.getItem('vds_deck_lang') as 'en' | 'es') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('vds_deck_lang', lang);
  }, [lang]);

  const toggle = (e: ReactMouseEvent) => {
    e.stopPropagation();
    const next = lang === 'en' ? 'es' : 'en';
    setLang(next);
    window.location.reload();
  };

  return (
    <button
      onClick={toggle}
      style={{
        position: 'fixed',
        top: 24,
        right: 24,
        zIndex: 99999,
        background: 'var(--surface-2, rgba(255, 255, 255, 0.1))',
        color: 'var(--ink, #fff)',
        border: '1px solid var(--border, rgba(255, 255, 255, 0.2))',
        borderRadius: 8,
        padding: '8px 16px',
        fontFamily: 'var(--font-mono, monospace)',
        fontSize: '20px',
        cursor: 'pointer',
        backdropFilter: 'blur(8px)',
        transition: 'all 200ms ease',
      }}
    >
      {lang === 'en' ? 'ES' : 'EN'}
    </button>
  );
}

function Stage() {
  const [lang] = useState<'en' | 'es'>(() => {
    return (localStorage.getItem('vds_deck_lang') as 'en' | 'es') || 'en';
  });

  return (
    <>
      <LangToggle />
      <Script lang={lang} />
    </>
  );
}

const savedLang = (typeof window !== 'undefined' && localStorage.getItem('vds_deck_lang')) || 'en';

export default defineDeck({
  id: 'vds-round-table-2026',
  title: config.title,
  lang: savedLang,
  scenes: savedLang === 'es' ? SCENES_ES : SCENES_EN,
  Stage,
  fonts: ['400 100px "Inter Variable"', '600 100px "Inter Variable"', '400 32px "JetBrains Mono Variable"'],
  qrUrl: config.qrUrl,
  /** 1.1 is the calm black standby before the first tap. */
  isBlack: (s) => s.scene === 0 && s.beat === 0,
});
