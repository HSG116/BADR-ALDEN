# محمصة بدر الدين — Badr Alden Roastery

موقع ويب احترافي RTL عربي لمحمصة بدر الدين — مكسرات وقهوة طازجة في القاهرة.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS (Glassmorphism design)
- UI: shadcn/ui + Radix UI + framer-motion
- Forms: react-hook-form + zod
- Font: Tajawal (Arabic, Google Fonts)
- Direction: RTL on html/body
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Build: Vite (esbuild minification, code splitting)

## Where things live

- `artifacts/badr-alden/` — the main website artifact
- `artifacts/badr-alden/src/lib/branch-data.ts` — source of truth for all branch info (phones, hours, colors, map URLs, delivery areas)
- `artifacts/badr-alden/src/context/BranchContext.tsx` — global active-branch state
- `artifacts/badr-alden/src/components/sections/` — all page sections (Navbar, Hero, Features, Branches, ContactForm, FAQ, Footer)
- `artifacts/badr-alden/src/index.css` — theme variables, glassmorphism utilities, Tajawal import
- `artifacts/badr-alden/index.html` — SEO meta tags, JSON-LD structured data, OG tags

## Architecture decisions

- **Branch Context** drives all dynamic content — colors, phone numbers, WhatsApp links, Google Maps embeds, delivery areas, features grid
- **No backend** — all WhatsApp links open in new tabs (`api.whatsapp.com`), contact form sends via WhatsApp deeplink
- **Maadi** = brown (`#5c3d21`), **Tagamoa** = orange (`#ec8944`) — enforced everywhere via `branch-data.ts`
- **RTL-first** design — all layout, spacing, and text alignment assumes Arabic right-to-left

## Product

محمصة بدر الدين — متجر مكسرات وقهوة طازجة بفرعين في القاهرة:
- **فرع المعادي**: زهراء المعادي، الشطر الثالث عشر، أمام HUB 50 MALL
- **فرع التجمع**: التسعين الشمالي، تقاطع محور السادات، MUSE MALL

مواعيد العمل: 9 صباحاً — 4 فجراً | يومياً — لا توجد إجازة

## Business Info

### فرع المعادي
- **الهواتف**: 01020727773 / 01110085927
- **واتساب**: +201110085927
- **العنوان**: زهراء المعادي، الشطر الثالث عشر، أمام HUB 50 MALL

### فرع التجمع
- **الهواتف**: 01117555759 / 01001706283
- **واتساب**: +201117555759
- **العنوان**: التسعين الشمالي، تقاطع محور السادات، MUSE MALL — موازي اللوتس الشمالية

## User preferences

- Arabic RTL design throughout
- No products section (removed per request)
- Working hours: 9 AM – 4 AM daily, no holidays
- Glassmorphism design style with branch-specific colors
- All contact via WhatsApp / phone (no backend needed)

## Gotchas

- Always import Tajawal font BEFORE any CSS variables in `index.css`
- `branch-data.ts` is the single source of truth — update hours/phones/addresses there only
- The `features[].detail` for the ⏰ icon must match `workingHours` and `workingDays` fields
- Google Maps iframe `allow` attribute must include `fullscreen` to avoid console warnings
- ContactForm uses `useEffect` to sync `branchId` with `activeBranch` from context

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- JSON-LD structured data in `index.html` includes both FoodEstablishment entries (maadi + tagamoa)
- `public/sitemap.xml` and `public/robots.txt` are ready for production
