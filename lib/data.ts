// Monthly expense chart data
export const CHART_DATA = [
  { month: "Jan", value: 342 },
  { month: "Feb", value: 676 },
  { month: "Mar", value: 512 },
  { month: "Apr", value: 629 },
  { month: "May", value: 458 },
  { month: "Jun", value: 781 },
  { month: "Jul", value: 394 },
  { month: "Aug", value: 924 },
  { month: "Sep", value: 647 },
  { month: "Oct", value: 532 },
  { month: "Nov", value: 803 },
  { month: "Dec", value: 271 },
  { month: "Jan", value: 342 },
  { month: "Feb", value: 876 },
  { month: "Mar", value: 512 },
  { month: "Apr", value: 629 },
];

// Dashboard metric cards
export const METRIC_CARDS = [
  { label: "Total spent", value: "₹48,240", delta: "+12%", up: true, sub: "vs last month" },
  { label: "This week", value: "₹12.1k", delta: "+4%", up: true, sub: "7-day window" },
  { label: "Savings", value: "₹3,980", delta: "-8%", up: false, sub: "vs target" },
  { label: "Budget used", value: "71.2%", delta: "+5%", up: true, sub: "of monthly" },
];

// Site-wide stats
export const SITE_STATS = [
  { value: "₹2.4Cr", label: "Tracked" },
  { value: "38.2k", label: "Transactions" },
  { value: "1,240", label: "Active users" },
];

// Expense categories table — Category tab
export const CATEGORIES = [
  { name: "Food & dining", dot: "#18181b", txns: 48, merchants: 14, total: "₹14,200" },
  { name: "Housing & rent", dot: "#52525b", txns: 3, merchants: 2, total: "₹12,000" },
  { name: "Transport", dot: "#a1a1aa", txns: 32, merchants: 8, total: "₹8,400" },
  { name: "Entertainment", dot: "#d4d4d8", txns: 12, merchants: 5, total: "₹3,100" },
  { name: "Healthcare", dot: "#e4e4e7", txns: 6, merchants: 4, total: "₹2,800" },
];

// Method tab data
export const METHODS = [
  { name: "UPI / GPay", dot: "#18181b", txns: 61, pct: "46%", total: "₹22,400" },
  { name: "Credit Card", dot: "#3f3f46", txns: 28, pct: "32%", total: "₹15,600" },
  { name: "Debit Card", dot: "#71717a", txns: 9, pct: "13%", total: "₹6,200" },
  { name: "Net Banking", dot: "#a1a1aa", txns: 3, pct: "6%", total: "₹2,900" },
  { name: "Cash", dot: "#d4d4d8", txns: 4, pct: "3%", total: "₹1,140" },
];

// Merchant tab data
export const MERCHANTS = [
  { name: "Swiggy", dot: "#18181b", txns: 18, category: "Food", total: "₹5,240" },
  { name: "Amazon", dot: "#3f3f46", txns: 7, category: "Shopping", total: "₹4,100" },
  { name: "Ola / Uber", dot: "#71717a", txns: 22, category: "Transport", total: "₹3,980" },
  { name: "Zomato", dot: "#a1a1aa", txns: 14, category: "Food", total: "₹3,640" },
  { name: "Netflix", dot: "#d4d4d8", txns: 1, category: "Entertainment", total: "₹649" },
];

// Budget insight rows
export const BUDGETS = [
  {
    title: "Food & dining budget",
    meta: "₹14,200 spent · ₹3,800 remaining · 30 Jun",
    pct: 79,
    sparkline: false,
  },
  {
    title: "Transport budget",
    meta: "₹8,400 spent · ₹1,600 remaining · 30 Jun",
    pct: 84,
    sparkline: true,
  },
  {
    title: "Housing",
    meta: "₹12,000 · fixed · auto-logged",
    pct: 100,
    sparkline: false,
  },
];

// Recent transactions for phone mockup
export const RECENT_TXN = [
  { name: "Swiggy", category: "Food · 2h ago", amount: "-₹342", up: false },
  { name: "Salary", category: "Income · today", amount: "+₹45k", up: true },
  { name: "Ola", category: "Travel · 5h ago", amount: "-₹180", up: false },
];

// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Carriers", href: "/carriers" },
  { label: "Contact", href: "/contact" },
];

// Footer links (no Product column)
export const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { label: "Carriers", href: "/carriers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
];
