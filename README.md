# ExpenseWise 💸

> A beautiful, minimal expense analytics landing page built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts** — featuring an interactive evil-chart style bar chart with spring-animated hover tracing.


---


- **Evil bar chart** — hover-trace interaction with dimmed bars, animated reference line pill, spring-interpolated number counter
- **Inter font** — clean, tight-tracked typographic system throughout
- **Metric cards** — 4-up grid with up/down delta indicators
- **Categories table** — tabbed breakdown (Category / Method / Merchant) with colored dot legends
- **Phone mockup** — pixel-level mobile UI mockup with sparkline chart and recent transactions
- **Budget insight bars** — animated progress bars with optional sparkline per row
- **Sticky navbar** — blur-backdrop header with Home / Features / Pricing / Carriers / Contact + Login CTA
- **Fully responsive** — collapses gracefully on mobile with hamburger menu
- **Zero runtime CSS-in-JS** — all styles are inline-object or Tailwind utility; no emotion, styled-components, or CSS modules required

---

## 📁 Project Structure

```
expensewise/
├── app/
│   ├── globals.css          # Tailwind base + CSS variables + Inter import
│   ├── layout.tsx           # Root layout with metadata and font link
│   └── page.tsx             # Page composition — imports all sections
│
├── components/
│   ├── charts/
│   │   └── EvilBarChart.tsx # Interactive hover-trace bar chart (Recharts)
│   ├── sections/
│   │   ├── Navbar.tsx       # Sticky navbar with mobile menu
│   │   ├── Hero.tsx         # Hero section with badge, heading, CTAs
│   │   ├── StatsRow.tsx     # Three-stat row (Tracked / Transactions / Users)
│   │   ├── DashboardSection.tsx  # Metric cards + EvilBarChart
│   │   ├── CategoriesTable.tsx   # Tabbed expense breakdown table
│   │   ├── MobileAppsSection.tsx # Split layout with PhoneMockup
│   │   ├── InsightsSection.tsx   # Split layout with BudgetBar cards
│   │   └── Footer.tsx       # Two-column footer (Company + Legal)
│   └── ui/
│       ├── PhoneMockup.tsx  # Pixel-detailed mobile phone UI
│       └── BudgetBar.tsx    # Reusable budget progress bar with optional sparkline
│
├── lib/
│   ├── data.ts              # All data constants (chart data, categories, nav links, etc.)
│   └── utils.ts             # cn() helper + INR formatters
│
├── public/                  # Static assets (add preview.png here)
├── .eslintrc.json
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.17.0
- **npm** ≥ 9 (or pnpm / yarn)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/rznish/expensewise.git
cd expensewise

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

---


Located at `components/charts/EvilBarChart.tsx`.

Implements the "evil chart" interaction pattern:

| Behaviour | Implementation |
|-----------|---------------|
| Bars dim on hover | `fillOpacity` set to `0.15` for non-active bars, `1.0` for active |
| Active bar stroke ring | Conditional `stroke` on `EvilBarShape` |
| Floating reference line | Recharts `<ReferenceLine y={springValue}>` |
| Pill label on reference line | Custom SVG `<rect>` + `<text>` via `RefLineLabel` |
| Spring-animated counter | `useSpringNumber` hook — lerps toward target at 18% per frame |
| Default to peak bar | `maxEntry` computed from `CHART_DATA` using `reduce` |
| Reset on mouse leave | `onMouseLeave` resets `activeIndex` to `maxEntry.i` |

### `useSpringNumber` hook

```ts
// components/charts/EvilBarChart.tsx
function useSpringNumber(target: number, stiffness = 0.18) { ... }
```

A pure `requestAnimationFrame` spring — equivalent to Framer Motion's `useSpring` but with zero extra dependencies.

### Data layer — `lib/data.ts`

All copy, chart values, categories, nav links, and footer links live here. To update content, edit only this file — no component hunting needed.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Font | Inter (300 / 400 / 500 / 600 / 700) |
| Background primary | `#ffffff` |
| Background secondary | `#f7f7f5` |
| Background tertiary | `#f0f0ed` |
| Text primary | `#0a0a0a` |
| Text secondary | `#555550` |
| Text tertiary | `#888882` |
| Border | `#e5e5e0` (0.5px) |
| Green (positive delta) | `#1a6b47` |
| Red (negative delta / 100% budget) | `#c0392b` |
| Border radius | 6px / 8px / 10px / 12px / 14px |

All values follow a warm-gray monochromatic palette — no blue, purple, or arbitrary accent colours.

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next@15` | App Router, RSC, image optimisation |
| `react@19` | UI framework |
| `recharts@2` | Bar chart, ReferenceLine, ResponsiveContainer |
| `lucide-react` | Icon set (ArrowRight, Mail, Menu, X) |
| `clsx` + `tailwind-merge` | `cn()` utility for conditional class merging |
| `tailwindcss@3` | Utility CSS |
| `typescript@5` | Type safety |

No UI library (shadcn, MUI, Chakra) is required — all components are hand-rolled inline-style + Tailwind.

---

## 🔧 Customisation

### Change chart data

Edit `CHART_DATA` in `lib/data.ts`:

```ts
export const CHART_DATA = [
  { month: "Jan", value: 342 },
  { month: "Feb", value: 676 },
  // ...
];
```

### Add a new expense category

Edit `CATEGORIES` in `lib/data.ts`:

```ts
export const CATEGORIES = [
  { name: "Food & dining", dot: "#18181b", txns: 48, merchants: 14, total: "₹14,200" },
  // add more rows here
];
```

### Add a nav link

Edit `NAV_LINKS` in `lib/data.ts`:

```ts
export const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "Your New Page", href: "#yourpage" },
  // ...
];
```

### Change currency

Replace `₹` with your currency symbol in `lib/utils.ts`:

```ts
export function formatINR(value: number): string {
  return "$" + Math.round(value).toLocaleString("en-US"); // USD example
}
```

---

## 🌐 Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
npm run build
# Upload the .next/out folder or connect your GitHub repo
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📄 License

MIT © 2026 [omji.dev]
---

## 🙏 Credits

- Design inspired by Mybrain 
- Evil chart pattern from [coss.com evil charts](https://coss.com)
- Built by [omji]
