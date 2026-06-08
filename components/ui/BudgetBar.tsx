interface BudgetBarProps {
  title: string;
  meta: string;
  pct: number;
  sparkline?: boolean;
}

export function BudgetBar({ title, meta, pct, sparkline }: BudgetBarProps) {
  return (
    <div
      style={{
        padding: "14px 18px",
        borderBottom: "0.5px solid #e5e5e0",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "-0.2px",
          color: "#0a0a0a",
          marginBottom: 4,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 11, color: "#888882", marginBottom: 10 }}>{meta}</div>

      {/* Progress bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            flex: 1,
            height: 3,
            background: "#f0f0ed",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              background: pct >= 100 ? "#c0392b" : "#0a0a0a",
              borderRadius: 3,
              transition: "width 0.6s ease",
            }}
          />
        </div>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            minWidth: 34,
            textAlign: "right",
            color: pct >= 100 ? "#c0392b" : "#0a0a0a",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {pct}%
        </span>
      </div>

      {/* Sparkline */}
      {sparkline && (
        <svg
          style={{ width: "100%", height: 36, marginTop: 10 }}
          viewBox="0 0 300 36"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            points="0,30 40,24 80,16 120,18 160,8 200,11 240,5 300,9"
            fill="none"
            stroke="#1a6b47"
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}
