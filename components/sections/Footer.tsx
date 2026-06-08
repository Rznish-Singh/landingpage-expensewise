import { Mail } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid #e5e5e0",
        padding: "40px 0 20px",
        marginTop: 8,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "#0a0a0a",
              marginBottom: 5,
            }}
          >
            ExpenseWise
          </div>
          <p style={{ fontSize: 12, color: "#888882", fontWeight: 400, margin: 0 }}>
            Smart money. Simple life.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              marginTop: 14,
              fontSize: 12,
              color: "#888882",
            }}
          >
            <Mail size={13} aria-hidden="true" />
            <a
              href="mailto:hello@expensewise.app"
              style={{ color: "#555550", textDecoration: "none" }}
            >
              hello@expensewise.app
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h5
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  color: "#888882",
                  marginBottom: 12,
                  margin: "0 0 12px",
                }}
              >
                {col.heading}
              </h5>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "#555550",
                    marginBottom: 8,
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          marginTop: 32,
          paddingTop: 18,
          borderTop: "0.5px solid #e5e5e0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 11,
          color: "#888882",
        }}
      >
        <span>© 2026 ExpenseWise. All rights reserved.</span>
        <span>Built by omji.dev</span>
      </div>
    </footer>
  );
}
