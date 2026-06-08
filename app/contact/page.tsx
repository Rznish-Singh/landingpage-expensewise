"use client";

import { useState } from "react";
import { Mail, MessageCircle, Clock, CheckCircle, Send } from "lucide-react";

const CHANNELS = [
  {
    Icon: Mail,
    label: "Email us",
    value: "hello@expensewise.app",
    href: "mailto:hello@expensewise.app",
  },
  {
    Icon: MessageCircle,
    label: "Discord",
    value: "discord.gg/expensewise",
    href: "https://discord.gg/expensewise",
  },
 
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "", // ← replace with your key from web3forms.com
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: "ExpenseWise Contact Form",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="page-wrap">
      {/* Hero */}
      <div className="inner-hero">
        <div className="tag" style={{ marginBottom: 16 }}>Contact</div>
        <h1>We&apos;d love to<br />hear from you.</h1>
        <p>
          Questions, feedback, partnership ideas, or just a kind word — we read
          every message and reply to all of them.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 48,
          marginBottom: 64,
          alignItems: "start",
        }}
      >
        {/* Left — channels */}
        <div>
          <div className="sec-label" style={{ marginBottom: 16 }}>Get in touch</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {CHANNELS.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 16px",
                  background: "#f7f7f5",
                  border: "0.5px solid #e5e5e0",
                  borderRadius: 10,
                  textDecoration: "none",
                  color: "#0a0a0a",
                  transition: "border-color 0.15s",
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    background: "#fff",
                    border: "0.5px solid #e5e5e0",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={15} strokeWidth={2} color="#0a0a0a" />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 1 }}>{label}</div>
                  <div style={{ fontSize: 12, color: "#555550" }}>{value}</div>
                </div>
              </a>
            ))}
          </div>

          <div
            style={{
              marginTop: 20,
              padding: "16px 18px",
              border: "0.5px solid #e5e5e0",
              borderRadius: 10,
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <div style={{ width: 34, height: 34, background: "#f7f7f5", border: "0.5px solid #e5e5e0", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Clock size={15} strokeWidth={2} color="#555550" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Response time</div>
              <p style={{ fontSize: 13, color: "#555550", margin: 0, lineHeight: 1.6 }}>
                We typically reply within <strong>24 hours</strong> on weekdays.
                Discord is fastest for urgent issues.
              </p>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {status === "success" ? (
            <div
              style={{
                padding: "36px 28px",
                background: "#edf7f1",
                border: "0.5px solid #b8ddc9",
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                <CheckCircle size={40} strokeWidth={1.5} color="#1a6b47" />
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.3px" }}>Message sent!</div>
              <p style={{ fontSize: 13.5, color: "#555550", margin: 0, lineHeight: 1.6 }}>
                Thanks for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                style={{ marginTop: 20, padding: "8px 18px", background: "#0a0a0a", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Name</label>
                  <input className="form-input" type="text" placeholder="Your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="you@example.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input className="form-input" type="text" placeholder="What&apos;s this about?" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-input" placeholder="Tell us more..." required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>

              {status === "error" && (
                <div style={{ padding: "10px 14px", background: "#fdf0ef", border: "0.5px solid #f5c0bb", borderRadius: 8, fontSize: 13, color: "#c0392b", marginBottom: 14 }}>
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px",
                  background: status === "sending" ? "#555550" : "#0a0a0a",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  fontFamily: "'Inter', sans-serif",
                  transition: "background 0.15s",
                }}
              >
                <Send size={14} strokeWidth={2} />
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
             
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
