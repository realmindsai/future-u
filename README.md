# Future U × Real Minds AI

Static workshop site for the Aspya Foundation × Brimbank Learning Futures cohort, Wednesday 13 May 2026.

Ten AI prompts for young adults (16–21) — three live exercises plus a take-home library. Built mobile-first; kids will scan on phones in the room.

## Site

- Source: `docs/`
- Stack: static HTML + one CSS file + one tiny JS for clipboard copy
- Brand: RMAI (Epilogue, lilac, lavender, stone)
- Hosting: GitHub Pages (see `DEPLOY.md`)

## Structure

```
docs/
├── index.html                       # program overview + 10 exercise cards
├── exercises/
│   ├── 01-explain-like-me.html      # CORE A — Wednesday
│   ├── 02-chaos-to-plan.html
│   ├── 03-cover-letter.html         # CORE B — Wednesday ("the moment")
│   ├── 04-interview-coach.html
│   ├── 05-better-questions.html     # CORE C — Wednesday (decision sparring)
│   ├── 06-translate-institutions.html
│   ├── 07-study-coach.html
│   ├── 08-side-hustle.html
│   ├── 09-voice-tuner.html
│   └── 10-future-me.html
└── css/
    ├── style.css
    └── copy.js                      # clipboard copy buttons on each prompt
```

## Program design

`program_design.md` (gitignored from the deployed site, kept locally) — north star, run-sheet, cultural framing, exercise-to-use-case mapping.

## Cultural framing

Light invitation, not imposition. The site treats the cohort as Sunshine kids who code-switch — not as a documentary subject. Specific opt-in invitations show up where they fit naturally (exercises 3, 5, 6, 7, 8) — never as the whole framing.

## Deploy

See `DEPLOY.md`.
