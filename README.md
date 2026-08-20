# landing

Verification landing (Cloudflare Turnstile).

Config via environment variables only. Do not commit secrets, site keys, or destination URLs.

```bash
export TURNSTILE_SECRET=
export VITE_TURNSTILE_SITE_KEY=
export VITE_MONEY_SITE_URL=
export NITRO_PRESET=node-server
export VITE_STANDALONE=1
export VITE_AUTH_ENABLED=false

npm install
npm run build
```
