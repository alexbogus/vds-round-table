import { mount, flags } from 'beatdeck';
import { createRoot } from 'react-dom/client';
import deck from '@deck';
import { Nav } from '../deck/Nav';

mount(deck);

// Outside the scaled stage on purpose: the nav must stay at finger size on the iPad.
if (!flags.presenter) {
  const el = document.createElement('div');
  document.body.appendChild(el);
  createRoot(el).render(<Nav />);
}
