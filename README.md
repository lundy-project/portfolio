# lundy.work — DevOps Portfolio

Personal portfolio of **Seab Lundy**, DevOps Engineer in Phnom Penh, Cambodia. A single-page, DevOps-themed site with an interactive terminal, light/dark mode, and content driven entirely from one data file.

**Live:** [www.lundy.work](https://www.lundy.work) · **Contact:** [Telegram](https://t.me/seablundy) · [lundyseab@gmail.com](mailto:lundyseab@gmail.com)

## Features

- **Interactive terminal** in the hero — visitors can run `help`, `whoami`, `skills`, `experience`, `projects`, `education`, `contact`, `clear` (and a hidden `sudo hire lundy`), with arrow-key command history
- **DevOps color scheme** — blue/teal on clean slate in light mode, cyan/green on deep navy in dark mode, with a persisted theme toggle
- **Animated background** — official DevOps tool logos (Kubernetes, Docker, Jenkins, ArgoCD, Helm, Istio, Vault, Grafana, …) drifting in the hero and contact sections only, positioned so they never sit behind text, disabled for `prefers-reduced-motion`
- **Fully responsive** — hamburger navigation and tuned decoration on mobile
- **Privacy-aware** — the public site exposes email and social links only
- **Static output** — `next build` prerenders everything; hostable on any static host, CDN, or a container

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, React 19, Turbopack) |
| Styling | Tailwind CSS v4 |
| UI components | shadcn/ui (radix) |
| Theming | next-themes |
| Icons | lucide-react + @icons-pack/react-simple-icons |
| Fonts | Geist + Geist Mono via `next/font` |
| Package manager | pnpm |

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build (static)
pnpm start      # serve the production build
pnpm lint
```

## Project structure

```
app/
  layout.tsx              # fonts, metadata, ThemeProvider
  page.tsx                # composes all sections
  globals.css             # shadcn tokens, DevOps palette, float animation
components/
  site-header.tsx         # sticky nav + theme toggle
  mobile-nav.tsx          # hamburger sheet menu (mobile)
  interactive-terminal.tsx# the hero terminal and its commands
  devops-background.tsx   # floating tool-logo layers
  profile-photo.tsx       # photo with initials fallback
  section.tsx             # shared section shell ($-prefixed headings)
  sections/               # hero, skills, experience, projects, education, contact
  ui/                     # shadcn components
lib/
  data.ts                 # ALL site content (profile, skills, jobs, projects…)
public/
  profile/seablundy.jpg   # profile photo
```

## Editing content

Everything the site displays — name, summary, skills, jobs, projects, education, links — lives in **`lib/data.ts`**. Edit that one file; no component changes needed. The interactive terminal reads from the same data, so its command output stays in sync automatically.

To change the color scheme, edit the CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark).

## Deployment

The build is fully static, so it runs anywhere:

- **Vercel** — zero-config: import the repo and deploy
- **Containerized** — build the image, serve with `next start` (or export and serve with nginx), and deploy to Kubernetes with your CI/CD of choice — Jenkins + ArgoCD keeps it on-brand
