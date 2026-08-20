FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ENV NITRO_PRESET=node-server
ENV VITE_AUTH_ENABLED=false
ENV VITE_STANDALONE=1
RUN npm run build

FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENV HOST=0.0.0.0
ENV PORT=3000
ENV VITE_AUTH_ENABLED=false
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
