"use client";

import { useState } from "react";
import { CATEGORIES, METHODS, MERCHANTS } from "@/lib/data";

const TABS = ["Category", "Method", "Merchant"];

function Dot({ color }: { color: string }) {
  return (
    <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: color, marginRight: 8, verticalAlign: "middle", flexShrink: 0 }} />
  );
}

function MiniBar({ pct }: { pct: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "flex-end" }}>
      <div style={{ width: 60, height: 3, background: "#f0f0ed", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "#0a0a0a", borderRadius: 3 }} />
      </div>
      <span style={{ fontSize: 11, color: "#888882", minWidth: 28 }}>{pct}%</span>
    </div>
  );
}

const TH_STYLE = (left: boolean): React.CSSProperties => ({
  padding: "9px 18px",
  textAlign: left ? "left" : "right",
  fontSize: 11,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  color: "#888882",
  borderBottom: "0.5px solid #e5e5e0",
  whiteSpace: "nowrap",
});

export function CategoriesTable() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="categories" style={{ marginBottom: 48, fontFamily: "'Inter', sans-serif" }}>
      <div style={{ background: "#fff", border: "0.5px solid #e5e5e0", borderRadius: 14, overflow: "hidden" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 18px", borderBottom: "0.5px solid #e5e5e0", flexWrap: "wrap", gap: 10 }}>
          <strong style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.2px", color: "#0a0a0a" }}>
            Expense breakdown{" "}
            <span style={{ background: "#f7f7f5", color: "#888882", fontSize: 10, padding: "2px 8px", borderRadius: 4, fontWeight: 500, marginLeft: 4 }}>
              June 2026
            </span>
          </strong>

          <div style={{ display: "flex", gap: 2, background: "#f7f7f5", borderRadius: 8, padding: 3 }}>
            {TABS.map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "5px 12px", borderRadius: 6, fontSize: 11.5, fontWeight: 500, cursor: "pointer", border: "none", background: activeTab === i ? "#fff" : "transparent", color: activeTab === i ? "#0a0a0a" : "#888882", boxShadow: activeTab === i ? "0 1px 3px rgba(0,0,0,0.08)" : "none", transition: "all 0.15s", fontFamily: "'Inter', sans-serif" }}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* CATEGORY TAB */}
        {activeTab === 0 && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 380 }}>
              <thead>
                <tr>
                  <th style={TH_STYLE(true)}>Category</th>
                  <th style={TH_STYLE(false)}>Txns</th>
                  <th style={TH_STYLE(false)}>Merchants</th>
                  <th style={TH_STYLE(false)}>Total</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORIES.map((cat, idx) => (
                  <tr key={cat.name} style={{ borderBottom: idx < CATEGORIES.length - 1 ? "0.5px solid #e5e5e0" : "none" }}>
                    <td style={{ padding: "10px 18px", color: "#0a0a0a", fontWeight: 500, whiteSpace: "nowrap" }}>
                      <Dot color={cat.dot} />{cat.name}
                    </td>
                    <td style={{ padding: "10px 18px", textAlign: "right", color: "#555550" }}>{cat.txns}</td>
                    <td style={{ padding: "10px 18px", textAlign: "right", color: "#555550" }}>{cat.merchants}</td>
                    <td style={{ padding: "10px 18px", textAlign: "right", color: "#0a0a0a", fontWeight: 600, letterSpacing: "-0.3px", whiteSpace: "nowrap" }}>{cat.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* METHOD TAB */}
        {activeTab === 1 && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 380 }}>
              <thead>
                <tr>
                  <th style={TH_STYLE(true)}>Payment method</th>
                  <th style={TH_STYLE(false)}>Txns</th>
                  <th style={TH_STYLE(false)}>Share</th>
                  <th style={TH_STYLE(false)}>Total</th>
                </tr>
              </thead>
              <tbody>
                {METHODS.map((m, idx) => (
                  <tr key={m.name} style={{ borderBottom: idx < METHODS.length - 1 ? "0.5px solid #e5e5e0" : "none" }}>
                    <td style={{ padding: "10px 18px", color: "#0a0a0a", fontWeight: 500, whiteSpace: "nowrap" }}>
                      <Dot color={m.dot} />{m.name}
                    </td>
                    <td style={{ padding: "10px 18px", textAlign: "right", color: "#555550" }}>{m.txns}</td>
                    <td style={{ padding: "10px 18px", textAlign: "right" }}>
                      <MiniBar pct={parseInt(m.pct)} />
                    </td>
                    <td style={{ padding: "10px 18px", textAlign: "right", color: "#0a0a0a", fontWeight: 600, letterSpacing: "-0.3px", whiteSpace: "nowrap" }}>{m.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* MERCHANT TAB */}
        {activeTab === 2 && (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 380 }}>
              <thead>
                <tr>
                  <th style={TH_STYLE(true)}>Merchant</th>
                  <th style={TH_STYLE(false)}>Txns</th>
                  <th style={TH_STYLE(false)}>Category</th>
                  <th style={TH_STYLE(false)}>Total</th>
                </tr>
              </thead>
              <tbody>
                {MERCHANTS.map((m, idx) => (
                  <tr key={m.name} style={{ borderBottom: idx < MERCHANTS.length - 1 ? "0.5px solid #e5e5e0" : "none" }}>
                    <td style={{ padding: "10px 18px", color: "#0a0a0a", fontWeight: 500, whiteSpace: "nowrap" }}>
                      <Dot color={m.dot} />{m.name}
                    </td>
                    <td style={{ padding: "10px 18px", textAlign: "right", color: "#555550" }}>{m.txns}</td>
                    <td style={{ padding: "10px 18px", textAlign: "right" }}>
                      <span style={{ display: "inline-block", padding: "2px 8px", background: "#f7f7f5", borderRadius: 4, fontSize: 11, fontWeight: 500, color: "#555550" }}>{m.category}</span>
                    </td>
                    <td style={{ padding: "10px 18px", textAlign: "right", color: "#0a0a0a", fontWeight: 600, letterSpacing: "-0.3px", whiteSpace: "nowrap" }}>{m.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
