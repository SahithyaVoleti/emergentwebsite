# NeuralTrix AI Website (Frontend)

Vite + React 19 marketing site for NeuralTrix AI.

## Development

```bash
cd frontend
npm install
npm start          # http://localhost:3000
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` / `npm run dev` | Vite dev server |
| `npm run build` | Production build to `dist/` (runs sitemap + legal PDF generation first) |
| `npm run preview` | Preview production build |
| `npm test` | Vitest watch mode |
| `npm run test:ci` | Vitest single run (CI) |
| `npm run lint` | ESLint |
| `npm run lint:ci` | ESLint with zero warnings |

## Environment variables

Copy `.env.example` to `.env.development` and set values as needed. All client env vars use the `VITE_` prefix.

| Variable | Purpose |
|----------|---------|
| `VITE_SITE_URL` | Canonical URL and sitemap base |
| `VITE_WHATSAPP_LEAD_NUMBER` | WhatsApp lead destination |
| `VITE_LEAD_API_URL` | Optional CRM/API POST endpoint |
| `VITE_CONTACT_EMAIL` | Contact form email display |
| `VITE_LINKEDIN_URL` / `VITE_TWITTER_URL` | Footer social links |
| `VITE_SHOW_DEV_RIBBON` | Development notice ribbon |
| `VITE_POSTHOG_KEY` | Analytics (optional) |

For sitemap generation at build time, set `SITE_URL` or `VITE_SITE_URL` in CI/Vercel.

## Legal templates

PDFs in `public/legal-templates/` are committed for deployment. Regenerate locally with:

```bash
pip install -r public/legal-templates/requirements.txt
python3 public/legal-templates/generate_legal_pdfs.py
```

## Deployment

Vercel config in `vercel.json` — output directory `dist/`.
