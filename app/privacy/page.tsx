import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="page-wrap">
      <div className="inner-hero">
        <div className="tag" style={{ marginBottom: 16 }}>Legal</div>
        <h1>Privacy Policy</h1>
        <p>
          Last updated: <strong>1 June 2026</strong> · Effective: 1 June 2026
        </p>
      </div>

      <div
        className="legal-body"
        style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: 56,
          marginBottom: 64,
          alignItems: "start",
        }}
      >
        {/* Sidebar TOC */}
        <div
          style={{
            position: "sticky",
            top: 80,
            background: "#f7f7f5",
            border: "0.5px solid #e5e5e0",
            borderRadius: 10,
            padding: "16px 0",
          }}
          className="hide-mobile"
        >
          {[
            "Information we collect",
            "How we use it",
            "Data sharing",
            "Data retention",
            "Your rights",
            "Security",
            "Cookies",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              style={{
                display: "block",
                padding: "7px 18px",
                fontSize: 13,
                color: "#555550",
                textDecoration: "none",
                borderLeft: "2px solid transparent",
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Body */}
        <div className="legal-body">
          <h2 id="information-we-collect">Information we collect</h2>
          <p>
            We collect information you provide directly — including your name,
            email address, and transaction data you enter or import. We also
            collect limited usage data (page views, feature interactions) to
            improve the product.
          </p>
          <p>
            When you link a bank account, we receive read-only transaction data
            via secure APIs. We never receive, store, or have access to your
            banking credentials.
          </p>

          <h2 id="how-we-use-it">How we use it</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve the ExpenseWise service</li>
            <li>Personalise your dashboard and insights</li>
            <li>Send product updates and budget alerts (which you control)</li>
            <li>Detect fraud and ensure platform security</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do not sell your personal data. We do not use it for advertising.
            Full stop.
          </p>

          <h2 id="data-sharing">Data sharing</h2>
          <p>
            We share data only with service providers necessary to operate the
            product (cloud infrastructure, payment processors). All third
            parties are contractually bound to handle your data with equivalent
            care.
          </p>
          <p>
            We may disclose data where required by law, court order, or
            regulatory authority. We will notify you where legally permitted.
          </p>

          <h2 id="data-retention">Data retention</h2>
          <p>
            Your data is retained for as long as your account is active. Upon
            deletion, personal data is purged within 30 days from live systems
            and within 90 days from backups.
          </p>

          <h2 id="your-rights">Your rights</h2>
          <p>
            Under applicable law (including India&apos;s DPDP Act 2023), you
            have the right to access, correct, export, and delete your personal
            data. Use the in-app settings or contact us at
            privacy@expensewise.app.
          </p>

          <h2 id="security">Security</h2>
          <p>
            We use AES-256 encryption at rest and TLS 1.3 in transit. Access
            controls are role-based and audited quarterly. We maintain SOC 2
            Type II compliance.
          </p>

          <h2 id="cookies">Cookies</h2>
          <p>
            We use strictly necessary cookies for session management and
            optional analytics cookies (which you can opt out of). We do not
            use third-party advertising cookies.
          </p>

          <h2 id="contact">Contact</h2>
          <p>
            Privacy questions:{" "}
            <a
              href="mailto:privacy@expensewise.app"
              style={{ color: "#0a0a0a", fontWeight: 500 }}
            >
              privacy@expensewise.app
            </a>
            <br />
            ExpenseWise, Dehradun, Uttarakhand, India
          </p>
        </div>
      </div>
    </div>
  );
}
