# Deploy to GitHub Pages

Static site lives in `docs/`. GitHub Pages serves from `/docs` on `main`.

## One-time setup

```bash
cd "/Users/dewoller/Library/CloudStorage/OneDrive-RealMinds,ArtificialIntelligence/Real Minds AI - Leads and Smalls/W46_Aspya-Foundation_Future-U-Guest-Speaker"

# init repo, ignore source files we don't want public
git init -b main
cat > .gitignore <<'EOF'
.DS_Store
*.docx
*.pptx
Sobur_phone_scope.txt
20260504_W46_brief_summary.md
20260505_W46_bios_and_briefing_for_sobur.md
20260510_W46_facilitator_brief.md
program_design.md
CLAUDE.md
EOF

git add docs/ DEPLOY.md README.md .gitignore
git commit -m "Future U workshop site — 10 AI prompts for young adults"
```

Source briefs (transcript, internal brief, design doc) are gitignored — only the public site ships.

## Create GitHub repo + push

```bash
# Option A — gh CLI (recommended, you're authenticated)
gh repo create rmai-future-u --public --source=. --remote=origin --push --description "AI as a leg up — workshop prompts for Aspya Foundation × Brimbank Learning Futures"

# Option B — manual
# 1. Create empty repo at https://github.com/new called rmai-future-u (public)
# 2. Then:
git remote add origin git@github.com:<your-user>/rmai-future-u.git
git push -u origin main
```

## Enable Pages

```bash
gh api -X POST repos/:owner/rmai-future-u/pages -f source[branch]=main -f source[path]=/docs
```

Or in browser: **Settings → Pages → Source: Deploy from a branch → main / `/docs` → Save**.

URL within ~1 min: `https://<your-user>.github.io/rmai-future-u/`

## Optional — custom domain

Point `futureu.realmindsai.com.au` (or similar) at GitHub Pages:

1. Add `CNAME` file in `docs/` with `futureu.realmindsai.com.au`
2. In DNS: CNAME `futureu` → `<your-user>.github.io`
3. **Settings → Pages → Custom domain** → enter the same value, tick "Enforce HTTPS" once cert provisions

## Generate the QR code for the printed handout

```bash
# install once if needed
brew install qrencode

# Replace URL with the actual Pages URL
qrencode -o futureu_qr.png -s 12 -m 2 "https://<your-user>.github.io/rmai-future-u/"
open futureu_qr.png
```

Print that on the single-page handout so the cohort can scan and revisit the 10 prompts after the workshop.

## Updating

```bash
# edit anything in docs/
git add docs/
git commit -m "edit: <what changed>"
git push
# Pages republishes in ~30–60s
```

## Local preview

```bash
cd docs && python3 -m http.server 8080
# open http://localhost:8080/
```
