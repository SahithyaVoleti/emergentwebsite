# NeuralTrix AI Website

Static marketing site for NeuralTrix AI, built with Create React App, Tailwind CSS, and static JavaScript content modules.

## Architecture

This repository ships a **frontend-only** SPA:

- Content lives in `frontend/src/data/*.js`
- Contact forms open WhatsApp with a pre-filled message (no local backend)
- Deployed as a static build on Vercel

Historical Emergent preview environments included a FastAPI + MongoDB CMS. That backend is **not included** in this export. See `backend_test.py` only if you need to validate a live remote preview API.

## Local development

```bash
cd frontend
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `frontend/.env` and adjust as needed:

| Variable | Purpose |
|----------|---------|
| `REACT_APP_WHATSAPP_LEAD_NUMBER` | WhatsApp lead destination (digits only, e.g. `918142438759`) |
| `REACT_APP_SITE_URL` | Canonical site URL for SEO metadata |
| `REACT_APP_SHOW_DEV_RIBBON` | Set to `true` to show the development notice ribbon in production builds |
| `ENABLE_HEALTH_CHECK` | Enables optional webpack health-check plugin in craco |

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Dev server |
| `npm run build` | Production build |
| `npm test` | Jest tests |
| `npm run test:ci` | CI-friendly test run |

## Deployment

Root `vercel.json` builds `frontend/` and serves the CRA bundle with SPA rewrites.

## Remote API tests

`backend_test.py` targets a remote preview CMS API. Configure credentials via environment variables before running:

```bash
export CMS_BASE_URL=https://your-preview.example.com
export CMS_ADMIN_EMAIL=admin@example.com
export CMS_ADMIN_PASSWORD=your-password
python backend_test.py
```

Do not commit credentials to the repository.
