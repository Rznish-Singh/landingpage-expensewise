import type { Metadata } from "next";

export const metadata: Metadata = { title: "Security" };

const PRACTICES = [
  {
    icon: "🔐",
    title: "AES-256 encryption at rest",
    desc: "All stored data — transactions, budgets, account details — is encrypted with AES-256. Keys are rotated quarterly and stored in a separate key management service.",
  },
  {
    icon: "🔁",
    title: "TLS 1.3 in transit",
    desc: "Every byte of data between your device and our servers travels over TLS 1.3 with forward secrecy. Older protocols are rejected entirely.",
  },
  {
    icon: "🏦",
    title: "Read-only bank access",
    desc: "Bank connections are strictly read-only. We cannot initiate transfers, move money, or take any action on your accounts. Ever.",
  },
  {
    icon: "🔑",
    title: "Zero credential storage",
    desc: "We never see or store your bank login credentials. Connections are established via tokenised, revocable OAuth sessions.",
  },
  {
    icon: "👥",
    title: "Role-based access controls",
    desc: "Internal access to production systems is limited to a small, audited team. All access is logged, reviewed monthly, and requires MFA.",
  },
  {
    icon: "🧪",
    title: "Regular penetration testing",
    desc: "We engage independent security researchers to conduct penetration tests twice a year. Findings are remediated within defined SLAs.",
  },
];

const CERTIFICATIONS = [
  { name: "SOC 2 Type II", detail: "Certified · Audited annually" },
  { name: "ISO 27001", detail: "In progress · Expected Q4 2026" },
  { name: "India DPDP Act 2023", detail: "Compliant" },
  { name: "OWASP Top 10", detail: "Tested · All mitigated" },
];

export default function SecurityPage() {
  return (
    <div className="page-wrap">
      {/* Hero */}
      <div className="inner-hero">
        <div className="tag" style={{ marginBottom: 16 }}>Security</div>
        <h1>Your data is yours.<br />We protect it like it.</h1>
        <p>
          Security isn&apos;t a feature we added later. It&apos;s how we built
          everything from day one.
        </p>
      </div>

      {/* Practices grid */}
      <div style={{ marginBottom: 24 }}>
        <div className="sec-label">How we protect you</div>
        <div className="sec-title" style={{ marginBottom: 28 }}>Security practices</div>
      </div>

      <div className="card-grid card-grid-2" style={{ marginBottom: 56 }}>
        {PRACTICES.map((p) => (
          <div className="card-item" key={p.title}>
            <div className="icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* Certifications */}
      <div style={{ marginBottom: 56 }}>
        <div className="sec-label">Compliance</div>
        <div className="sec-title" style={{ marginBottom: 28 }}>Certifications &amp; standards</div>
        <div
          style={{
            border: "0.5px solid #e5e5e0",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderBottom:
                  i < CERTIFICATIONS.length - 1
                    ? "0.5px solid #e5e5e0"
                    : "none",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a" }}>
                {cert.name}
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: cert.detail.startsWith("In progress")
                    ? "#888882"
                    : "#1a6b47",
                  background: cert.detail.startsWith("In progress")
                    ? "#f7f7f5"
                    : "#edf7f1",
                  padding: "3px 10px",
                  borderRadius: 100,
                }}
              >
                {cert.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* Responsible disclosure */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          marginBottom: 64,
          alignItems: "start",
        }}
      >
        <div>
          <div className="sec-label">Bug bounty</div>
          <div className="sec-title">Responsible disclosure</div>
          <p className="sec-body" style={{ marginBottom: 20 }}>
            Found a vulnerability? We want to know. We operate a responsible
            disclosure programme and acknowledge valid reports within 48 hours.
          </p>
          <p className="sec-body" style={{ marginBottom: 24 }}>
            Please do not publicly disclose the issue until we&apos;ve had a
            chance to patch it. We commit to keeping you informed throughout the
            process.
          </p>
          <a
            href="mailto:security@expensewise.app"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 20px",
              background: "#0a0a0a",
              color: "#fff",
              borderRadius: 8,
              fontSize: 13.5,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Report a vulnerability →
          </a>
        </div>
        <div
          style={{
            background: "#f7f7f5",
            border: "0.5px solid #e5e5e0",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 16,
              color: "#0a0a0a",
            }}
          >
            What to include in your report
          </div>
          {[
            "Description of the vulnerability",
            "Steps to reproduce the issue",
            "Potential impact and severity",
            "Any proof-of-concept code (if applicable)",
            "Your contact details for follow-up",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                marginBottom: 10,
                fontSize: 13.5,
                color: "#555550",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 18,
                  height: 18,
                  background: "#0a0a0a",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 700,
                  marginTop: 1,
                }}
              >
                {i + 1}
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
