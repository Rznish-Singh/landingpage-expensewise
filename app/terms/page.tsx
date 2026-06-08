import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="page-wrap">
      <div className="inner-hero">
        <div className="tag" style={{ marginBottom: 16 }}>Legal</div>
        <h1>Terms of Service</h1>
        <p>
          Last updated: <strong>1 June 2026</strong> · Effective: 1 June 2026
        </p>
      </div>

      <div
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
            "Acceptance",
            "Your account",
            "Acceptable use",
            "Subscription & billing",
            "Intellectual property",
            "Disclaimers",
            "Limitation of liability",
            "Termination",
            "Governing law",
            "Changes",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-").replace(/&/g, "and")}`}
              style={{
                display: "block",
                padding: "7px 18px",
                fontSize: 13,
                color: "#555550",
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Body */}
        <div className="legal-body">
          <h2 id="acceptance">Acceptance</h2>
          <p>
            By creating an account or using ExpenseWise, you agree to these
            Terms of Service. If you do not agree, please do not use the
            service. These terms form a binding legal agreement between you and
            ExpenseWise (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
          </p>

          <h2 id="your-account">Your account</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activity that occurs under your
            account. You must be at least 18 years old to use the service.
            Notify us immediately at security@expensewise.app if you suspect
            unauthorised access.
          </p>

          <h2 id="acceptable-use">Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to any system or data</li>
            <li>Reverse-engineer, decompile, or disassemble any part of the service</li>
            <li>Transmit malware, spam, or disruptive code</li>
            <li>Sell, resell, or sublicense access to the service</li>
            <li>Use automated scripts to scrape or overload our infrastructure</li>
          </ul>

          <h2 id="subscription-and-billing">Subscription &amp; billing</h2>
          <p>
            Paid plans are billed in advance on a monthly or annual cycle.
            Prices are in Indian Rupees (₹) inclusive of applicable taxes. We
            reserve the right to change pricing with 30 days&apos; notice.
            Cancellations take effect at the end of the current billing period.
            No partial refunds are issued for unused time, except where required
            by law.
          </p>
          <p>
            Free trial periods are available for new accounts only. We may
            discontinue trials at any time.
          </p>

          <h2 id="intellectual-property">Intellectual property</h2>
          <p>
            All content, design, code, and trademarks of ExpenseWise are owned
            by or licensed to us. You retain ownership of the financial data you
            enter. You grant us a limited licence to process that data solely to
            provide the service.
          </p>
          <p>
            Feedback you submit may be used by us without restriction or
            compensation.
          </p>

          <h2 id="disclaimers">Disclaimers</h2>
          <p>
            ExpenseWise is a personal finance tracking tool, not a financial
            adviser. Nothing in the service constitutes financial, tax, legal,
            or investment advice. Always consult a qualified professional for
            decisions of that nature.
          </p>
          <p>
            The service is provided &quot;as is&quot; without warranties of any
            kind, express or implied, including fitness for a particular purpose
            or uninterrupted availability.
          </p>

          <h2 id="limitation-of-liability">Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, ExpenseWise shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the service. Our total
            liability to you shall not exceed the amount paid by you in the
            twelve months preceding the claim.
          </p>

          <h2 id="termination">Termination</h2>
          <p>
            We may suspend or terminate your account if you violate these terms,
            with or without notice. You may delete your account at any time from
            settings. Upon termination, your data will be handled per our
            Privacy Policy.
          </p>

          <h2 id="governing-law">Governing law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be
            subject to the exclusive jurisdiction of the courts of Dehradun,
            Uttarakhand.
          </p>

          <h2 id="changes">Changes</h2>
          <p>
            We may update these terms from time to time. Material changes will
            be communicated via email or an in-app notice at least 14 days
            before they take effect. Continued use after the effective date
            constitutes acceptance.
          </p>

          <p>
            Questions:{" "}
            <a
              href="mailto:legal@expensewise.app"
              style={{ color: "#0a0a0a", fontWeight: 500 }}
            >
              legal@expensewise.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
