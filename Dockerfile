FROM node:20-alpine AS build

WORKDIR /app

# Устанавливаем pnpm
RUN corepack enable && corepack prepare pnpm@10.28.1 --activate

# Устанавливаем зависимости
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Копируем код и собираем Nuxt
COPY . .
RUN pnpm build


FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Для Nuxt/Nitro Amvera обычно прокидывает PORT
ENV PORT=3000
EXPOSE 3000

# Копируем только сборку
COPY --from=build /app/.output ./.output

# Запускаем Nuxt server
CMD ["node", ".output/server/index.mjs"]

