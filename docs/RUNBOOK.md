# Runbook — moderator prompter (iPad)

The deck is a teleprompter: one card per beat, advanced with a tap. It is not projected; the iPad is your
screen. Everything is local, so no internet is needed once the laptop is serving it.

## Before the session

1. On the laptop: `npm install` (once, with internet).
2. `npm run present:ipad` — builds `dist/` and serves it on `http://<laptop-ip>:4173/`.
   Find the IP with `ipconfig getifaddr en0` (Wi-Fi) or `ipconfig getifaddr en1`.
3. Laptop and iPad on the same network (venue Wi-Fi, a phone hotspot, or a travel router). No internet required.
4. On the iPad, in Safari: `http://<laptop-ip>:4173/#1.1`. Landscape. Rotate lock on.
5. Add to Home Screen (Share → Add to Home Screen) if you want it to look like an app.
6. Settings → Display & Brightness → Auto-Lock → **Never** (or 15 min and keep touching it).
7. Turn on Guided Access (Settings → Accessibility → Guided Access) before you go on: triple-click the side
   button to lock the iPad to Safari and stop accidental swipes away.
8. Check the last beat (7.2) loads with `#7.2`; then go back to `#1.1`.

Offline fallback: `dist/` copied to a USB stick + any laptop with a static server
(`cd dist && python3 -m http.server 4173`). Safari cannot open `dist/index.html` from the Files app
(ES modules over `file://` are blocked), so it always needs a local server.

## During the session

| Gesture / key | Action |
| --- | --- |
| Tap the screen, → ↓ PageDown, Space | next card |
| ← ↑ PageUp | previous card |
| 1–7 | jump to scene: 1 open · 2 panel · 3 Q1 · 4 Q2 · 5 Q3 · 6 Q4 · 7 closing |
| Home / End | first / last card |
| B or . | blackout (blank the screen while you speak off-script) |
| O | overview of every beat (tap one to jump) |
| F | fullscreen (Safari may ignore it; Add to Home Screen is better) |

The **EN/ES** button top-right switches language and remembers it on that iPad; it reloads the page on the same
card. It is small on purpose, but it is a normal tap target: it does not advance the beat.

Scenes: **1** open (standby, title, intro ¶1–3) · **2** panel (transition + three intros) · **3** Q1
· **4** Q2 · **5** Q3 · **6** Q4 open (1 min) · **7** closing. No automatic beats: every change is your tap.

Suggested pacing for 20 minutes: intro ~4 min, three questions ~4 min each, open minute, final round ~2 min.
The deck has no clock; use the iPad's own timer if you want one per question.

## If something goes wrong

- Wrong card: `←` or the scene number; nothing depends on the order you arrive in.
- Refreshed by accident: the URL keeps `#scene.beat`, reload and you are back on the same card.
  If it restarts at 1.1, tap forward or jump with the scene number.
- iPad locked or Safari closed: reopen the same URL; the hash keeps your place.
- Laptop asleep or off Wi-Fi: the page already loaded keeps working; only a reload needs the server.
- Total failure: the printed script in `reference/vds-round-table.md` is the same text, in the same order.

## Config to check on the day

`deck/deck.config.ts`: title, author (`qrUrl` is deliberately `TODO` — this deck has no QR). Rebuild after editing.
`deck/script.ts`: the exact text. `deck/scenes.ts` derives the beat map from it.
