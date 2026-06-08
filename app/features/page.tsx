import type { Metadata } from "next";
import {
  BarChart3,
  Smartphone,
  Tag,
  Target,
  Zap,
  ShieldCheck,
  Download,
  Brain,
  Bell,
  Upload,
  FileText,
  ScanLine,
  CreditCard,
  Landmark,
  AlarmClock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = { title: "Features" };

const FEATURES = [
  {
    Icon: BarChart3,
    title: "Interactive dashboard",
    desc: "Real-time charts with hover-trace bars, animated reference lines, and spring-interpolated counters. Your data, alive.",
  },
  {
    Icon: Upload,
    title: "Bank statement upload",
    desc: "Upload PDF or CSV bank statements from any Indian bank. We parse, categorise, and visualise your transactions automatically.",
  },
  {
    Icon: ScanLine,
    title: "Receipt scanning",
    desc: "Snap a photo of any receipt. Our OCR reads it instantly and logs the expense to the right category — no typing required.",
  },
  {
    Icon: Target,
    title: "Budget goals",
    desc: "Set monthly limits per category. Watch animated progress bars fill up. Get warned before you hit 80%, 90%, and 100%.",
  },
  {
    Icon: Zap,
    title: "Instant sync",
    desc: "Changes appear instantly across all your devices — web, iOS, Android. Zero refresh. Zero friction. Just your data.",
  },
  {
    Icon: ShieldCheck,
    title: "Bank-grade security",
    desc: "AES-256 encryption, zero-knowledge architecture, and SOC 2 Type II compliance. Your data belongs to you.",
  },
  {
    Icon: Download,
    title: "Export anywhere",
    desc: "Download your transaction history as CSV, PDF, or Excel. Works with CA tools, tax software, and any spreadsheet.",
  },
  {
    Icon: Brain,
    title: "AI spending insights",
    desc: "Monthly summaries powered by AI — spot trends, catch anomalies, and get plain-English explanations of your habits.",
  },
  {
    Icon: Bell,
    title: "Smart notifications",
    desc: "Budget alerts, unusual spend detection, and weekly summaries delivered to your phone exactly when you need them.",
  },
  {
    Icon: AlarmClock,
    title: "Bill reminders",
    desc: "Never miss a payment. Set recurring reminders for rent, EMIs, subscriptions, and utility bills — all in one place.",
  },
  {
    Icon: CreditCard,
    title: "Multi-card tracking",
    desc: "Track spending across multiple credit and debit cards simultaneously. See your true financial picture in one view.",
  },
  {
    Icon: FileText,
    title: "Tax reports",
    desc: "Generate income and expense summaries formatted for Indian tax filing (ITR). Export-ready for your CA in one click.",
  },
];

const INTEGRATIONS = ["GPay", "PhonePe", "Paytm", "HDFC", "SBI", "ICICI", "Axis", "Kotak"];

const BANKS_SUPPORTED = [
  { icon: Landmark, name: "HDFC Bank", formats: "PDF · CSV" },
  { icon: Landmark, name: "SBI", formats: "PDF · XLS" },
  { icon: Landmark, name: "ICICI Bank", formats: "PDF · CSV" },
  { icon: Landmark, name: "Axis Bank", formats: "PDF · CSV" },
  { icon: Landmark, name: "Kotak Mahindra", formats: "PDF · CSV" },
  { icon: Landmark, name: "Yes Bank", formats: "PDF" },
];

export default function FeaturesPage() {
  return (
    <div className="page-wrap">
      {/* Hero */}
      <div className="inner-hero">
        <div className="tag" style={{ marginBottom: 16 }}>Features</div>
        <h1>Everything you need.<br />Nothing you don&apos;t.</h1>
        <p>
          ExpenseWise is built around a single idea: understanding your money
          should feel effortless, not like a second job.
        </p>
      </div>

      {/* Feature grid */}
      <div style={{ marginBottom: 24 }}>
        <div className="sec-label">Core features</div>
        <div className="sec-title">Built for people who care</div>
      </div>

      <div className="card-grid card-grid-3" style={{ marginBottom: 56 }}>
        {FEATURES.map(({ Icon, title, desc }) => (
          <div className="card-item" key={title}>
            <div
              style={{
                width: 36,
                height: 36,
                background: "#f7f7f5",
                border: "0.5px solid #e5e5e0",
                borderRadius: 9,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <Icon size={17} strokeWidth={1.8} color="#0a0a0a" />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* Bank statement upload highlight */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 48,
          marginBottom: 56,
          alignItems: "start",
        }}
      >
        <div>
          <div className="sec-label">New</div>
          <div className="sec-title">Upload your bank statement</div>
          <p className="sec-body" style={{ marginBottom: 20 }}>
            Drop a PDF or CSV bank statement from any major Indian bank. We extract
            every transaction, auto-categorise it, and add it to your dashboard — in
            under 10 seconds.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            {[
              { Icon: FileText, text: "Supports PDF, CSV, and XLS formats" },
              { Icon: Tag, text: "Auto-categorises 95%+ of transactions" },
              { Icon: ShieldCheck, text: "Processed locally — never stored raw" },
              { Icon: AlarmClock, text: "Parses 12 months of history instantly" },
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "#555550" }}>
                <Icon size={14} strokeWidth={2} color="#0a0a0a" />
                {text}
              </div>
            ))}
          </div>
          <a
            href="/pricing"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "9px 18px",
              background: "#0a0a0a",
              color: "#fff",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Try it free <ArrowRight size={13} />
          </a>
        </div>

        {/* Upload mockup */}
        <div
          style={{
            border: "0.5px solid #e5e5e0",
            borderRadius: 14,
            overflow: "hidden",
            background: "#fff",
          }}
        >
          <div style={{ padding: "14px 18px", borderBottom: "0.5px solid #e5e5e0", display: "flex", alignItems: "center", gap: 8 }}>
            <Upload size={13} strokeWidth={2} color="#888882" />
            <span style={{ fontSize: 13, fontWeight: 600 }}>Statement upload</span>
          </div>
          {/* Drop zone */}
          <div
            style={{
              margin: 16,
              border: "1.5px dashed #d0d0c8",
              borderRadius: 10,
              padding: "32px 20px",
              textAlign: "center",
              background: "#f7f7f5",
            }}
          >
            <div style={{ width: 40, height: 40, background: "#fff", border: "0.5px solid #e5e5e0", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
              <Upload size={18} strokeWidth={1.8} color="#555550" />
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#0a0a0a", marginBottom: 4 }}>Drop your statement here</div>
            <div style={{ fontSize: 12, color: "#888882" }}>PDF, CSV, XLS · up to 20 MB</div>
          </div>
          {/* Supported banks */}
          <div style={{ padding: "0 16px 16px" }}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", color: "#888882", marginBottom: 10 }}>
              Supported banks
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {BANKS_SUPPORTED.map((b, i) => (
                <div key={b.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i < BANKS_SUPPORTED.length - 1 ? "0.5px solid #f0f0ed" : "none", fontSize: 12.5 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 500, color: "#0a0a0a" }}>
                    <b.icon size={13} strokeWidth={1.8} color="#555550" />
                    {b.name}
                  </div>
                  <span style={{ fontSize: 11, color: "#888882" }}>{b.formats}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Integrations */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 48,
          marginBottom: 64,
          alignItems: "center",
        }}
      >
        <div>
          <div className="sec-label">Integrations</div>
          <div className="sec-title">Connect your accounts</div>
          <p className="sec-body" style={{ marginBottom: 20 }}>
            Link your bank accounts, credit cards, and UPI apps. Transactions
            flow in automatically — no manual entry needed.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {INTEGRATIONS.map((b) => (
              <span key={b} className="tag">{b}</span>
            ))}
          </div>
        </div>
        <div style={{ background: "#f7f7f5", border: "0.5px solid #e5e5e0", borderRadius: 14, padding: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", color: "#888882", marginBottom: 16 }}>
            Live sync
          </div>
          {["HDFC Bank ···1234", "GPay · linked", "ICICI ···5678"].map((b, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < 2 ? "0.5px solid #e5e5e0" : "none", fontSize: 13 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 500 }}>
                <Landmark size={13} strokeWidth={1.8} color="#555550" />
                {b}
              </div>
              <span style={{ fontSize: 11, fontWeight: 500, color: "#1a6b47", background: "#edf7f1", padding: "2px 8px", borderRadius: 100 }}>
                ✓ Active
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
