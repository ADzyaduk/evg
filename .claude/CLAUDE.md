# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**PavlovCraft** — сайт швейного производства в Сочи (подушки для уличной мебели, яхт, пошив на заказ). URL: `https://pavlovcraft.ru`.

---

## Commands

```bash
npm run dev          # dev server — http://localhost:3000
npm run build        # production build
npm run preview      # preview production build locally
npm run lint         # ESLint (-- --fix для автофикса)
npm run typecheck    # проверка типов через vue-tsc
npm run predeploy    # lint → typecheck → build (перед деплоем)
```

---

## Architecture

- `nuxt.config.ts` — SSR включён, все основные маршруты пререндерятся (`routeRules`), Яндекс.Метрика инжектируется глобально
- `app/app.vue` — корень: `<UApp>` → `<NuxtLayout>` → `<NuxtPage>`, глобальный SEO + JSON-LD LocalBusiness
- `app/app.config.ts` — тема: `primary: emerald`, `neutral: slate`
- `app/layouts/default.vue` — `UHeader` + `UMain` + **кастомный футер** (не `UFooter`) + мобильная нижняя навигация + `<CookieBanner>`
- `app/plugins/scroll-animate.ts` — регистрирует директиву `v-animate` для анимаций при скролле через IntersectionObserver; использование: `<div v-animate>` или `<div v-animate="2">` (stagger)
- `app/composables/useCookieConsent.ts` — состояние согласия на cookies
- `server/api/feedback.post.ts` — форма обратной связи → Telegram-бот (поддерживает multipart с фото)
- `server/routes/robots.txt.get.ts` / `sitemap.xml.get.ts` — генерируются на сервере

### Иконки

Установлены только `@iconify-json/lucide` (`i-lucide-*`) и `@iconify-json/simple-icons` (`i-simple-icons-*`). Другие наборы не подключены.

### Stores

Pinia-сторов в проекте пока нет. Состояние управляется через `useFetch`/`useAsyncData` и composables.

### Переменные окружения (Amvera)

Для работы формы обратной связи необходимы:
- `NUXT_TELEGRAM_BOT_TOKEN`
- `NUXT_TELEGRAM_CHAT_ID`

---

This repository uses Nuxt 4.3.0, Vue 3 Composition API, TypeScript strict mode, Pinia, and Nuxt UI 4.4.0.

These rules are authoritative for all code generation, refactoring, file edits, and implementation suggestions.

If a project rule conflicts with a generic best practice or model preference, follow the project rule.

---

## Core rules

- Use Nuxt built-ins first
- Use Nuxt UI built-ins second
- Only write custom solutions when no built-in solution exists
- Keep implementations idiomatic to Nuxt 4
- Prefer SSR-safe solutions by default
- Do not introduce alternative frameworks, UI kits, or styling systems

---

## Structure

Use the Nuxt 4 app-first structure.

Allowed directories:

- `app/components`
- `app/composables`
- `app/layouts`
- `app/middleware`
- `app/pages`
- `app/plugins`
- `app/utils`
- `app/stores`
- `server/api`
- `server/middleware`
- `server/utils`

Do not invent parallel folder structures.

---

## Naming

- Components: `PascalCase.vue`
- Composables: `usePascalCase.ts`
- Pages: `kebab-case`
- Layouts: `kebab-case`
- Middleware: `kebab-case`
- Plugins: `kebab-case`
- Stores: `kebab-case`

Never mix naming conventions.

---

## Vue components

- Use `<script setup lang="ts">` only
- Use Composition API only
- Do not use Options API
- Do not use mixins
- Extract reusable logic into composables
- Keep components focused and minimal
- Type props, emits, and state clearly

---

## Page composition rules

Pages must stay thin.

### A page may do only these things

- define page-level data fetching
- define page metadata
- connect route params/query to app state
- compose child components
- trigger domain actions

### A page must not become a large all-in-one implementation

Do not keep large UI sections, business logic, form markup, modal markup, table markup, dashboard blocks, or repeated card/list structures directly inside a page when they can be extracted.

### Required decomposition rule

Create separate components when any of the following is true:

- a page contains more than one meaningful UI section
- a section can be named as a distinct feature or block
- markup is longer than a small focused block
- the same UI pattern may be reused
- a form, modal, table, list, filter panel, toolbar, or card grid appears
- a section has its own local interaction logic
- a section would make the page easier to scan if extracted

If a section has a clear name, make it a component.

### Preferred page pattern

Pages should primarily assemble components, not implement everything inline.

Good:
- page fetches data
- page passes props to components
- page listens to emitted events
- page calls store actions

Bad:
- page contains all cards, filters, modals, forms, tables, and business logic in one file

---

## Component architecture rules

Prefer small domain-oriented components over giant page files.

### Preferred split

- Pages = route entry and composition
- Components = UI sections and feature blocks
- Composables = reusable logic
- Stores = domain state and async business actions

### Required extraction targets

Extract into components when present:

- forms
- modals
- slideovers
- toolbars
- filter panels
- result lists
- card collections
- data tables
- empty states
- loading/error blocks
- dashboard sections
- settings sections
- reusable content blocks

Do not leave these embedded in a page unless they are truly tiny and single-use.

---

## Nuxt UI

Nuxt UI is the mandatory UI layer.

- Prefer Nuxt UI components over raw HTML whenever an equivalent exists
- Use the most appropriate Nuxt UI component available
- Let Nuxt UI handle accessibility, keyboard navigation, focus management, overlays, forms, and navigation patterns
- Do not wrap Nuxt UI components without a clear reason
- Do not recreate behavior already provided by Nuxt UI

Common examples include:

- `UHeader`
- `UFooter`
- `UNavigationMenu`
- `UButton`
- `UCard`
- `UModal`
- `USlideover`
- `UInput`
- `USelect`
- `UTextarea`

This list is illustrative, not exhaustive. Use any other Nuxt UI component when it is the best fit.

Do not use raw `<button>`, `<input>`, `<nav>`, or similar native elements when Nuxt UI provides an equivalent.

---

## Layout

Global layout must be in `app/layouts/default.vue`.

Required order:

1. `UHeader`
2. `<slot />`
3. `UFooter`

Do not build custom global header/footer implementations if Nuxt UI provides the correct components.

---

## Data fetching

- Use `useFetch` or `useAsyncData` only
- Do not fetch data in `onMounted` or other lifecycle hooks
- Keep data fetching SSR-safe
- Handle failures explicitly with `createError` when appropriate

### Page data rule

Page-level fetching should stay in the page or in a store/composable only when that improves reuse or separation of concerns.

Do not mix page rendering, fetching, transformation, and interaction logic all in one file.

---

## State management

Use Pinia.

- One store per domain
- Stores must be fully typed
- Mutate state only through actions
- Keep async logic in actions
- Keep getters pure and synchronous

Do not mutate store state outside actions.  
Do not put async logic in getters.

### Required store rule

Create a store when any of the following is true:

- state is shared across multiple components
- state survives navigation within the feature
- multiple components read or mutate the same domain state
- the feature has async CRUD operations
- filters, selection, pagination, sorting, or entity collections belong to a domain
- business actions should not live inside page components

### Do not create a store for

- trivial one-off local toggles
- purely presentational local UI state with no domain value

### Store responsibility

Stores should contain:

- domain state
- async actions
- mutations through actions
- pure derived getters

Pages should not own domain workflows that belong in a store.

---

## Composables

Use composables for reusable logic, not as a dumping ground.

Create a composable when:

- logic is reused across components
- logic is not domain state but reusable behavior
- code would otherwise duplicate watchers, computed state, or event handling
- a concern is cross-cutting but not store-worthy

Do not move domain state into composables when it should be in Pinia.

---

## Routing and middleware

- Use Nuxt route middleware for auth and route guards
- Prefer synchronous middleware
- Keep middleware narrow and predictable
- Avoid side effects in middleware

Middleware must not replace server-side authorization.

---

## Performance

- Use `<NuxtLink>` for internal navigation
- Lazy-load components with the `Lazy*` prefix where appropriate
- Use `routeRules` for rendering strategy
- Always use `<NuxtImg>` for images

Do not use raw `<img>` when `<NuxtImg>` should be used.

---

## Styling

- Use Nuxt UI theming via `app.config.ts`
- Avoid inline styles
- Avoid large custom CSS layers
- Do not override Nuxt UI accessibility styles
- Prefer theme-driven customization over local CSS overrides

---

## Server and security

- Put server logic in `server/api`
- Validate all server input
- Prefer Zod for validation
- Never trust client-side validation
- Use secure cookies: `httpOnly`, `secure`, `sameSite`

Sensitive logic must be enforced on the server.

---

## Dependencies

- Prefer Nuxt, Vue, Nitro, and Nuxt UI built-ins first
- Do not add dependencies that duplicate framework features
- Do not add alternative UI libraries

Prefer fewer dependencies and framework-native solutions.

---

## Forbidden patterns

Never generate these unless the user explicitly requests a deviation:

- Options API
- Mixins
- Manual DOM manipulation
- Raw HTML UI when Nuxt UI provides an equivalent
- Data fetching outside `useFetch` / `useAsyncData`
- Fetching page data in `onMounted`
- Skipping server-side validation
- Re-implementing accessibility already handled by Nuxt UI
- Alternative UI libraries
- Untyped Pinia stores
- Async Pinia getters
- Large all-in-one page components
- Keeping full feature implementation inside a single page file when it can be decomposed into components and store/actions

---

## Behavior when generating code

When generating a new feature, default to this structure:

- page file for route entry
- child components for major UI sections
- store for domain state and async actions when the feature has meaningful state
- composables for reusable non-store logic
- server endpoints for server-side logic and validation

For non-trivial pages, do not stop at a single page file.

If the feature includes multiple sections, filters, lists, detail panels, forms, modals, or CRUD actions, generate supporting components and a store by default.

---

## Behavior when editing code

- Follow the repository structure exactly
- Preserve existing project conventions
- Prefer minimal, local changes
- Prefer improving existing code over introducing new abstractions
- Do not overengineer
- Do not suggest multiple competing architectures when one clearly matches these rules

When uncertain, choose the solution that is:

1. More native to Nuxt
2. More compatible with Nuxt UI
3. More decomposed into clear components
4. More aligned with Pinia domain state
5. More SSR-safe
6. Simpler

---

## Final rule

If uncertain:

1. Check Nuxt 4 documentation
2. Check Nuxt UI 4 documentation
3. Only then use a custom implementation

If a built-in solution exists, use it.