import type { Metadata } from "next";

export const metadata: Metadata = { title: "Carriers" };

const OPEN_ROLES = [
  {
    dept: "Engineering",
    roles: [
      { title: "Senior Full-Stack Engineer", type: "Full-time", location: "Remote · India" },
      { title: "Android Engineer (Kotlin)", type: "Full-time", location: "Remote · India" },
      { title: "iOS Engineer (Swift)", type: "Full-time", location: "Remote · India" },
    ],
  },
  {
    dept: "Product & Design",
    roles: [
      { title: "Product Designer", type: "Full-time", location: "Bengaluru / Remote" },
      { title: "Product Manager — Growth", type: "Full-time", location: "Remote · India" },
    ],
  },
  {
    dept: "Growth",
    roles: [
      { title: "Content & SEO Lead", type: "Full-time", location: "Remote · India" },
      { title: "Performance Marketing Manager", type: "Contract", location: "Remote" },
    ],
  },
];

const VALUES = [
  { icon: "🧠", title: "Default to async", desc: "We write things down. Meetings have agendas. Your focus time is protected." },
  { icon: "🚀", title: "Ship, then improve", desc: "We prefer working software over perfect plans. Iteration beats deliberation." },
  { icon: "🤝", title: "Radical candour", desc: "We give honest feedback, receive it gracefully, and assume good intent." },
  { icon: "🌿", title: "Sustainable pace", desc: "No crunch culture. We build for the long term — that includes our team." },
];

export default function CarriersPage() {
  return (
    <div className="page-wrap">
      {/* Hero */}
      <div className="inner-hero">
        <div className="tag" style={{ marginBottom: 16 }}>Careers</div>
        <h1>Build the future<br />of personal finance.</h1>
        <p>
          We&apos;re a small team obsessed with making money management feel
          human. If you care deeply about craft, we&apos;d love to talk.
        </p>
      </div>

      {/* Values */}
      <div style={{ marginBottom: 48 }}>
        <div className="sec-label">How we work</div>
        <div className="sec-title" style={{ marginBottom: 28 }}>Our values</div>
        <div className="card-grid card-grid-2">
          {VALUES.map((v) => (
            <div className="card-item" key={v.title}>
              <div className="icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* Open roles */}
      <div style={{ marginBottom: 64 }}>
        <div className="sec-label">Join us</div>
        <div className="sec-title" style={{ marginBottom: 32 }}>Open roles</div>

        {OPEN_ROLES.map((dept) => (
          <div key={dept.dept} style={{ marginBottom: 36 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                color: "#888882",
                marginBottom: 12,
                paddingBottom: 10,
                borderBottom: "0.5px solid #e5e5e0",
              }}
            >
              {dept.dept}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {dept.roles.map((role, i) => (
                <div
                  key={role.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    borderBottom:
                      i < dept.roles.length - 1
                        ? "0.5px solid #e5e5e0"
                        : "none",
                    flexWrap: "wrap",
                    gap: 12,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#0a0a0a",
                        marginBottom: 4,
                      }}
                    >
                      {role.title}
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <span className="tag">{role.type}</span>
                      <span className="tag">{role.location}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@expensewise.app?subject=${encodeURIComponent(role.title)}`}
                    style={{
                      padding: "8px 18px",
                      background: "#0a0a0a",
                      color: "#fff",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 500,
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Apply →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Speculative */}
        <div
          style={{
            background: "#f7f7f5",
            border: "0.5px solid #e5e5e0",
            borderRadius: 12,
            padding: 24,
            marginTop: 8,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>
            Don&apos;t see your role?
          </div>
          <p
            style={{
              fontSize: 13.5,
              color: "#555550",
              marginBottom: 16,
              lineHeight: 1.65,
            }}
          >
            We&apos;re always open to exceptional people. Send us your work and
            tell us how you&apos;d contribute.
          </p>
          <a
            href="mailto:careers@expensewise.app"
            style={{
              padding: "8px 18px",
              background: "#0a0a0a",
              color: "#fff",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Send speculative application
          </a>
        </div>
      </div>
    </div>
  );
}
