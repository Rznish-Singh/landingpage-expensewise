"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import link from "next/link";

const STATS = [
  { label: "tracked this month", value: 48240, prefix: "₹", suffix: "" },
  { label: "transactions logged", value: 38200, prefix: "", suffix: "" },
  { label: "users saving smarter", value: 1240, prefix: "", suffix: "+" },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        textAlign: "center",
        padding: "72px 0 48px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "5px 14px",
          background: "#f7f7f5",
          border: "0.5px solid #d0d0c8",
          borderRadius: 100,
          fontSize: 12,
          fontWeight: 500,
          color: "#555550",
          marginBottom: 24,
          letterSpacing: "-0.01em",
        }}
      >
        <Sparkles size={12} strokeWidth={2} />
        Expense analytics
      </div>

      {/* Heading */}
      <h1
        style={{
          fontSize: "clamp(40px, 7vw, 64px)",
          fontWeight: 700,
          lineHeight: 1.04,
          letterSpacing: "-2.5px",
          marginBottom: 16,
          color: "#0a0a0a",
        }}
      >
        Spend{" "}
        <em style={{ fontStyle: "italic", fontWeight: 300, color: "#888882" }}>less,</em>
        <br />
        save{" "}
        <em style={{ fontStyle: "italic", fontWeight: 300, color: "#888882" }}>more.</em>
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontSize: 15,
          color: "#555550",
          marginBottom: 36,
          fontWeight: 400,
          letterSpacing: "-0.01em",
          lineHeight: 1.65,
          maxWidth: 420,
          margin: "0 auto 36px",
        }}
      >
        The sharpest expense manager built for people who
        actually care where every rupee goes.
      </p>

      {/* CTA buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 56,
        }}
      >
        <a
          href="#dashboard"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "11px 24px",
            background: "#0a0a0a",
            color: "#fff",
            fontSize: 14,
            fontWeight: 500,
            borderRadius: 10,
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Get started free
        </a>
        <a
          href="https://expensewiseaaa.vercel.app/sign-in?redirect_url=https%3A%2F%2Fexpensewiseaaa.vercel.app%2F"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "11px 24px",
            background: "transparent",
            color: "#555550",
            fontSize: 14,
            fontWeight: 500,
            borderRadius: 10,
            textDecoration: "none",
            border: "0.5px solid #d0d0c8",
            letterSpacing: "-0.01em",
          }}
        >
          See live demo <ArrowRight size={14} />
        </a>
      </div>

      {/* Animated stats row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 0,
          flexWrap: "wrap",
          border: "0.5px solid #e5e5e0",
          borderRadius: 14,
          overflow: "hidden",
          background: "#fff",
          maxWidth: 580,
          margin: "0 auto",
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              flex: 1,
              minWidth: 140,
              padding: "20px 16px",
              textAlign: "center",
              borderRight: i < STATS.length - 1 ? "0.5px solid #e5e5e0" : "none",
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "-1px",
                color: "#0a0a0a",
                fontVariantNumeric: "tabular-nums",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              {stat.prefix}
              {mounted ? (
                <AnimatedNumber
                  value={stat.value}
                  stiffness={60}
                  damping={18}
                  mass={0.8}
                />
              ) : (
                "0"
              )}
              {stat.suffix}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#888882",
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
