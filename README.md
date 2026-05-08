# Heart Embryology — Study Companion

A study app for the **Development of the Heart** embryology lecture. Notes (with tutor-mode prose, diagrams, lecture images, and animations), flashcards, vignette MCQs, mistake review, and a quick-revision reference (anomalies, derivatives, mnemonics).

## Use it

- **Online:** open the GitHub Pages URL.
- **Offline:** download `index.html` and double-click to open. All progress (read sections, flashcard status, quiz mistakes, theme, tutor-mode toggle) is saved in your browser's local storage.

## What's inside

- 8 note sections with bullet recap, optional **tutor mode** (conversational prose, walkthroughs, common mix-ups, clinical hooks)
- Lecture images embedded per section, with click-to-zoom lightbox
- Mermaid diagrams (timelines, flowcharts, mindmap) — themed for both light and dark
- 4 custom inline-SVG animations (lateral folding, D-loop / L-loop, AP septum spiral, atrial septation)
- 300 flashcards with topic filter and "again / got it" recall
- 50 hand-authored USMLE-style vignette MCQs with per-distractor explanations, topic + difficulty filters
- A wrong-answer log so you can revisit missed questions
- Reference tables: 14 embryonic → adult derivatives, 8 congenital anomalies, 12 mnemonics
- Light + dark mode, keyboard shortcuts on flashcards (Space flip, ← Again, → Got it)
- Auto-update notifier — when the deployed version changes, returning visitors get a friendly "New version available · Reload" toast (no need to know what hard-refresh is)

## Sharing it (GitHub Pages)

After pushing:

1. On GitHub: **Settings → Pages**
2. Source: **Deploy from a branch**, branch: `main`, folder: `/ (root)`
3. Save. After ~1 minute, the app is live at `https://<username>.github.io/<repo-name>/`.

## Updating the deployed app

When you push a meaningful change, **bump the version string** so returning users see the update toast:

1. Open `version.txt` and change the value (any unique string — date / commit hash / phase tag).
2. Open `index.html`, find `const APP_VERSION = '...'`, and set it to the **same** value.
3. Commit + push as usual.

That's it. The next time anyone with a cached page visits, the toast appears and one tap brings them current.

The two strings just need to match each other exactly. If they ever drift (e.g., you forget to update the JS), every visitor will get the toast every time — annoying but harmless.

## Files

- `index.html` — the app
- `version.txt` — current build version (paired with `APP_VERSION` inside `index.html`)
- `assets/lecture-images/` — extracted lecture diagrams + manifest
- `vignette_mcqs.js` — canonical source for the 50 quiz vignettes (inlined into `index.html`; kept here for future regeneration)
- `Development of the Heart.pptx` — source lecture (Dr Revanoor)
- `Development_of_the_Heart_300_Flashcards.xlsx` — flashcard source
- `Heart_Development_250_Quiz_Questions.xlsx` — original quiz source (now superseded by `vignette_mcqs.js`)

## Credits

Lecture content: Dr Revanoor. App built for personal study use.
