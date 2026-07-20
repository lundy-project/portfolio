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
charts/
  portfolio/              # Helm chart (Deployment/Service/HPA + opt-in Istio & cert-manager)
Dockerfile                # multi-stage image (pnpm → standalone → alpine runtime)
docker-compose.yml        # one-command local/production run
```

## Editing content

Everything the site displays — name, summary, skills, jobs, projects, education, links — lives in **`lib/data.ts`**. Edit that one file; no component changes needed. The interactive terminal reads from the same data, so its command output stays in sync automatically.

To change the color scheme, edit the CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark).

## Deployment

The app builds to a fully static, self-contained bundle (`output: "standalone"`), so pick whichever option fits:

### Option 1 — Vercel (fastest)

Zero-config: import the repo on [vercel.com](https://vercel.com), deploy, point the `lundy.work` DNS at it.

### Option 2 — Docker

Multi-stage `Dockerfile` (pnpm install → standalone build → slim `node:22-alpine` runtime, non-root user, healthcheck):

```bash
docker build -t lundyseab/devops-portfolio:latest .
docker run -d -p 3000:3000 lundyseab/devops-portfolio:latest
```

### Option 3 — Docker Compose

```bash
docker compose up -d --build   # http://localhost:3000
docker compose ps              # shows "healthy" once the healthcheck passes
```

### Option 4 — Kubernetes via Helm

A chart lives in [`charts/portfolio`](charts/portfolio) — Deployment (2 replicas, probes, restricted securityContext), Service, optional HPA, and opt-in Istio + cert-manager resources.

```bash
# push the image somewhere the cluster can pull from
docker build -t lundyseab/devops-portfolio:0.1.0 . && docker push lundyseab/devops-portfolio:0.1.0

# install (Istio and cert-manager are OFF by default)
helm upgrade --install portfolio ./charts/portfolio -n portfolio --create-namespace \
  --set image.tag=0.1.0

# reach it without a gateway
kubectl port-forward -n portfolio svc/portfolio-portfolio 8080:80
# ...or expose a node port
helm upgrade portfolio ./charts/portfolio -n portfolio --reuse-values --set service.type=NodePort
```

When Istio and cert-manager are installed on the cluster, enable both together in `values.yaml` and upgrade — this adds an Istio `Gateway` (HTTP→HTTPS redirect + TLS), a `VirtualService` for `lundy.work` / `www.lundy.work`, and a cert-manager `Certificate` in the ingress gateway's namespace:

```yaml
istio:
  enabled: true
certManager:
  enabled: true          # requires an existing ClusterIssuer (default: letsencrypt-prod)
```

```bash
helm upgrade portfolio ./charts/portfolio -n portfolio
kubectl get certificate -n istio-system    # wait for READY=True, then point DNS at the gateway
```

Key values to review before a real deploy: `image.repository`, `istio.host` / `extraHosts`, `istio.gateway.selector`/`namespace`, and `certManager.issuerName`.

### CI/CD

The intended pipeline is the one this portfolio describes: Jenkins (or GitHub Actions) builds and pushes the image and bumps the chart's `image.tag`, ArgoCD syncs the chart to the K3s cluster.
