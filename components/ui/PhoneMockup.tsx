import { RECENT_TXN } from "@/lib/data";

export function PhoneMockup() {
  return (
    <div
      style={{
        background: "#0a0a0a",
        borderRadius: 40,
        padding: 3,
        maxWidth: 240,
        margin: "0 auto",
        boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 37,
          overflow: "hidden",
        }}
      >
        {/* Status bar */}
        <div
          style={{
            height: 44,
            background: "#fff",
            display: "flex",
            alignItems: "flex-end",
            padding: "0 20px 6px",
            justifyContent: "space-between",
            fontSize: 11,
            fontWeight: 700,
            position: "relative",
          }}
        >
          <span>15:34</span>
          <div
            style={{
              width: 100,
              height: 28,
              background: "#0a0a0a",
              borderRadius: "0 0 16px 16px",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0,
            }}
          />
          <span style={{ fontSize: 10 }}>●●●</span>
        </div>

        {/* Screen */}
        <div style={{ padding: "14px 16px 18px", background: "#fff" }}>
          {/* Top bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "-0.3px" }}>
              expenses.app
            </span>
            <span style={{ fontSize: 10, color: "#888882" }}>24H ∨</span>
          </div>

          {/* Stat cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 6,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                background: "#f7f7f5",
                borderRadius: 8,
                padding: "8px 10px",
              }}
            >
              <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.07em", color: "#888882", marginBottom: 2, fontWeight: 500 }}>
                Spent
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.5px" }}>₹3.8k</div>
              <div style={{ fontSize: 9, fontWeight: 500, color: "#1a6b47", marginTop: 1 }}>↑ 6%</div>
            </div>
            <div
              style={{
                background: "#f7f7f5",
                borderRadius: 8,
                padding: "8px 10px",
              }}
            >
              <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.07em", color: "#888882", marginBottom: 2, fontWeight: 500 }}>
                Saved
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.5px" }}>₹920</div>
              <div style={{ fontSize: 9, fontWeight: 500, color: "#c0392b", marginTop: 1 }}>↓ 3%</div>
            </div>
          </div>

          {/* Mini sparkline chart */}
          <div
            style={{
              height: 52,
              background: "#f7f7f5",
              borderRadius: 8,
              overflow: "hidden",
              marginBottom: 12,
              position: "relative",
            }}
          >
            <svg
              style={{ width: "100%", height: "100%" }}
              viewBox="0 0 200 52"
              preserveAspectRatio="none"
            >
              <path
                d="M0,44 C30,38 50,22 80,24 C110,26 130,10 160,8 C180,6 190,13 200,10 L200,52 L0,52Z"
                fill="#f0f0ed"
              />
              <path
                d="M0,44 C30,38 50,22 80,24 C110,26 130,10 160,8 C180,6 190,13 200,10"
                fill="none"
                stroke="#0a0a0a"
                strokeWidth={1.5}
              />
            </svg>
          </div>

          {/* Recent transactions */}
          <div
            style={{
              fontSize: 9,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              color: "#888882",
              fontWeight: 600,
              marginBottom: 6,
            }}
          >
            Recent
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {RECENT_TXN.map((txn) => (
              <div
                key={txn.name + txn.amount}
                style={{
                  background: "#f7f7f5",
                  borderRadius: 7,
                  padding: "7px 10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: 11,
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 1 }}>{txn.name}</div>
                  <div style={{ fontSize: 9, color: "#888882", fontWeight: 400 }}>{txn.category}</div>
                </div>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 12,
                    color: txn.up ? "#1a6b47" : "#c0392b",
                  }}
                >
                  {txn.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
