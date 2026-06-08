"use client";

import { EvilBarChart } from "@/components/charts/EvilBarChart";
import { METRIC_CARDS } from "@/lib/data";

export function DashboardSection() {
  return (
    <section id="dashboard" style={{ marginBottom: 48, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <h2 style={{ fontSize: "clamp(22px,4vw,30px)", fontWeight: 700, letterSpacing: "-1.2px", color: "#0a0a0a", marginBottom: 8 }}>
          Interactive dashboard
        </h2>
        <p style={{ fontSize: 14, color: "#555550" }}>
          Hover the bars to trace your monthly spend — animated, live, precise.
        </p>
      </div>

      {/* Metric cards — 2-col on mobile, 4-col on desktop */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 10,
          marginBottom: 10,
        }}
      >
        {METRIC_CARDS.map((card) => (
          <div
            key={card.label}
            style={{
              background: "#f7f7f5",
              borderRadius: 10,
              padding: "14px 16px",
              border: "0.5px solid #e5e5e0",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#888882", marginBottom: 6 }}>
              {card.label}
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.8px", color: "#0a0a0a", fontVariantNumeric: "tabular-nums" }}>
              {card.value}
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, marginTop: 4, color: card.up ? "#1a6b47" : "#c0392b" }}>
              {card.up ? "↑" : "↓"} {card.delta} {card.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Evil chart card */}
      <div style={{ background: "#fff", border: "0.5px solid #e5e5e0", borderRadius: 14, overflow: "hidden" }}>
        <EvilBarChart />
      </div>
    </section>
  );
}
