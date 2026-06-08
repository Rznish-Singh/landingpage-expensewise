import { PhoneMockup } from "@/components/ui/PhoneMockup";

export function MobileAppsSection() {
  return (
    <section
      id="mobile"
      style={{
        marginBottom: 56,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 48,
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div>
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
            iOS &amp; Android
            <br />
            mobile apps
          </h2>
          <p style={{ fontSize: 14, color: "#555550", lineHeight: 1.7, marginBottom: 24 }}>
            Log expenses on the go, snap receipts with your camera, and get
            instant budget alerts — synced seamlessly across every device.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href="#appstore"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "9px 16px",
                background: "#0a0a0a",
                color: "#fff",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="white" aria-hidden="true">
                <path d="M11.182 9.538c-.02-2.049 1.67-3.04 1.748-3.09C11.9 5.04 10.9 4.89 10.556 4.88c-.89-.09-1.74.53-2.19.53-.46 0-1.16-.52-1.91-.5-.98.02-1.89.57-2.39 1.44-1.02 1.77-.26 4.39.73 5.83.49.71 1.07 1.5 1.83 1.47.74-.03 1.02-.47 1.92-.47.9 0 1.15.47 1.93.46.79-.01 1.29-.71 1.77-1.42.56-.81.79-1.6.8-1.64-.02-.01-1.53-.59-1.55-2.56zM9.9 3.08c.41-.5.68-1.19.6-1.88-.58.02-1.28.39-1.7.88-.37.43-.69 1.13-.6 1.8.64.05 1.3-.33 1.7-.8z" />
              </svg>
              App Store
            </a>
            <a
              href="#playstore"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "9px 16px",
                background: "#0a0a0a",
                color: "#fff",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="white" aria-hidden="true">
                <path d="M2.1 1.28L9.2 8l-7.1 6.72c-.13-.2-.1-.46-.1-.72V2c0-.26-.03-.52.1-.72zm1.4.6L12 6.9l-1.8 1.7L3.5 1.88zM12 9.1L3.5 14.12l6.7-4.72L12 9.1zm.9-5.5c.5.27.6.78.6 1.4 0 .62-.1 1.13-.6 1.4l-1.1.63-1.9-1.78 1.9-1.79 1.1.14z" />
              </svg>
              Play Store
            </a>
          </div>
        </div>

        {/* Phone */}
        <PhoneMockup />
      </div>
    </section>
  );
}
