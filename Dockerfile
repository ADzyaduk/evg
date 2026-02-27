FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


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

