import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pricing" };

const PLANS = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    desc: "Perfect for getting started and tracking personal expenses.",
    features: [
      "Up to 100 transactions/month",
      "3 expense categories",
      "7-day transaction history",
      "Basic CSV export",
      "Mobile app access",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Pro",
    price: "₹79",
    period: "per month",
    desc: "For individuals who take their finances seriously.",
    features: [
      "Unlimited transactions",
      "Unlimited categories",
      "Full transaction history",
      "AI spending insights",
      "Budget goals & alerts",
      "PDF + Excel export",
      "Bank account linking",
      "Priority support",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Family",
    price: "₹149",
    period: "per month",
    desc: "Shared finances for up to 6 people under one roof.",
    features: [
      "Everything in Pro",
      "Up to 6 members",
      "Shared budgets",
      "Split expenses",
      "Family dashboard",
      "Admin controls",
    ],
    cta: "Get Family",
    featured: false,
  },
];

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your account settings at any time — no questions, no fees. Your data stays accessible in read-only mode for 30 days.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Yes — 14 days free on Pro, no credit card required. You'll be reminded before the trial ends.",
  },
  {
    q: "How does bank linking work?",
    a: "We use read-only bank connections via encrypted APIs. We never store your banking credentials and cannot make transactions on your behalf.",
  },
  {
    q: "What currencies are supported?",
    a: "Indian Rupee (₹) is the primary currency. Multi-currency support with auto conversion is on our roadmap for Q3 2026.",
  },
];

export default function PricingPage() {
  return (
    <div className="page-wrap">
      {/* Hero */}
      <div className="inner-hero" style={{ textAlign: "center" }}>
        <div className="tag" style={{ marginBottom: 16 }}>Pricing</div>
        <h1>Simple, honest pricing.</h1>
        <p style={{ margin: "0 auto" }}>
          No hidden fees. No feature paywalls designed to confuse you. Just a
          fair price for a tool that actually helps.
        </p>
      </div>

      {/* Plan cards */}
      <div className="price-grid">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`price-card${plan.featured ? " featured" : ""}`}
          >
            {plan.featured && (
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 12,
                }}
              >
                Most popular
              </div>
            )}
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 16,
                color: plan.featured ? "#fff" : "#0a0a0a",
              }}
            >
              {plan.name}
            </div>
            <div className="price-num">{plan.price}</div>
            <div className="price-period">{plan.period}</div>
            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.6,
                marginBottom: 0,
                color: plan.featured ? "rgba(255,255,255,0.65)" : "#555550",
              }}
            >
              {plan.desc}
            </p>
            <ul className="price-features">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a
              href="/login"
              style={{
                display: "block",
                textAlign: "center",
                padding: "11px",
                background: plan.featured ? "#fff" : "#0a0a0a",
                color: plan.featured ? "#0a0a0a" : "#fff",
                borderRadius: 8,
                fontSize: 13.5,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* FAQ */}
      <div style={{ marginBottom: 64 }}>
        <div className="sec-label" style={{ marginBottom: 8 }}>FAQ</div>
        <div className="sec-title" style={{ marginBottom: 28 }}>Common questions</div>
        <div>
          {FAQS.map((faq) => (
            <div className="faq-item" key={faq.q}>
              <div className="faq-q">{faq.q}</div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
