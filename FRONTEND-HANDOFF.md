# Frontend Handoff — Shroom and Gloom Guide

Status: [NEEDS_REVIEW]

## Delivered
- Next.js App Router TypeScript frontend in `/root/projects/shroomgloom/`.
- Dark, mobile-first design system extracted from `design/home-desktop.html` and `design/home-mobile.html`.
- Homepage card browser with client-side text search, three deck filters, and tier filters on `/tier-list/`.
- Static card detail generation for all currently published handoff example records in `src/data/cards.ts`.
- Fixed routes: `/`, `/tier-list/`, `/best-builds/`, `/characters/`, `/beginner-guide/`, `/quests/`, `/patch-notes/`.
- Legal routes: `/about/`, `/privacy/`, `/terms/`, `/cookies/`.
- Dynamic `robots.txt` and `sitemap.xml`.

## Data boundary
The upstream handoff supplied a contract but no verified JSON bundle. The frontend therefore includes only the five explicitly supplied editorial examples (Mold Spore, Paper Cut, Hall Pass, Lunch Money, Pencil Stub), all visibly marked `Provisional` and `demo-23718635`. No card totals or invented records were added.

## Verification
- `npm install`: passed; npm reported 8 audit vulnerabilities in the selected legacy Next.js dependency set.
- `npm run build`: passed; 21 static pages generated.
- TypeScript validation: passed as part of Next build.
- Dead placeholder scan: no `href="#"` or `dangerouslySetInnerHTML` in frontend source.
- Deployment: not run. The project directory had no Git repository, Wrangler/OpenNext configuration, or Cloudflare credentials at task start. Cloudflare deployment needs a deployment owner to initialize the Worker config and authenticated target.

## Upstream follow-up
Replace `src/data/cards.ts` with the validated static bundle (or add a loader) once the programmer delivers `cards.json`, `builds.json`, `characters.json`, `quests.json`, `guides.json`, and `patches.json`. Keep `publish_status` and `verification_status` rules from `programmer-backend-scope.md`.
