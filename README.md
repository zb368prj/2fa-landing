# 2fa-landing

Landing xác minh thành viên (Cloudflare Turnstile) cho `zb368news.com`.

Pass captcha → chuyển `rel="nofollow"` sang money site `https://zb368.biz/camp-fb1`.

## Chạy

```bash
# secret Turnstile — không commit
export TURNSTILE_SECRET=...
export VITE_TURNSTILE_SITE_KEY=0x4AAAAAAEW8EWFSECRqSUPK
export NITRO_PRESET=node-server
export VITE_STANDALONE=1
export VITE_AUTH_ENABLED=false

npm install
npm run build
docker compose up -d --build
```

Trang: `noindex, nofollow`.
