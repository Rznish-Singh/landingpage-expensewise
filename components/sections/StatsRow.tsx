import { SITE_STATS } from "@/lib/data";

export function StatsRow() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 56,
        padding: "24px 0",
        borderTop: "0.5px solid #e5e5e0",
        borderBottom: "0.5px solid #e5e5e0",
        marginBottom: 48,
        fontFamily: "'Inter', sans-serif",
        flexWrap: "wrap",
      }}
    >
      {SITE_STATS.map((stat) => (
        <div key={stat.label} style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "#0a0a0a",
            }}
          >
            {stat.value}
          </div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#888882",
              marginTop: 3,
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
