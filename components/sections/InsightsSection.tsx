import { ArrowRight } from "lucide-react";
import { BudgetBar } from "@/components/ui/BudgetBar";
import { BUDGETS } from "@/lib/data";

export function InsightsSection() {
  return (
    <section id="insights" style={{ marginBottom: 56, fontFamily: "'Inter', sans-serif" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 48,
          alignItems: "start",
        }}
      >
        {/* Budget insight card */}
        <div style={{ background: "#fff", border: "0.5px solid #e5e5e0", borderRadius: 14, overflow: "hidden" }}>
          {BUDGETS.map((b, i) => (
            <div key={b.title} style={{ borderBottom: i < BUDGETS.length - 1 ? "0.5px solid #e5e5e0" : "none" }}>
              <BudgetBar title={b.title} meta={b.meta} pct={b.pct} sparkline={b.sparkline} />
            </div>
          ))}
        </div>

        {/* Text */}
        <div style={{ paddingTop: 8 }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 30px)",
              fontWeight: 700,
              letterSpacing: "-1.2px",
              color: "#0a0a0a",
              lineHeight: 1.15,
              marginBottom: 14,
            }}
          >
            Smart insights
            <br />
            &amp; budgets
          </h2>
          <p style={{ fontSize: 14, color: "#555550", lineHeight: 1.7, marginBottom: 24 }}>
            Set budget limits per category, extract meaningful spending patterns,
            and get proactive alerts before you go over — all from one clean dashboard.
          </p>
          <a
            href="/features"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 18px",
              background: "transparent",
              color: "#555550",
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 8,
              textDecoration: "none",
              border: "0.5px solid #d0d0c8",
            }}
          >
            Explore insights <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
