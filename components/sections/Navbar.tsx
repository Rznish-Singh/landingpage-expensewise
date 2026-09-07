"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 769) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close drawer when route changes
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: `0.5px solid ${scrolled ? "#e5e5e0" : "transparent"}`,
        transition: "border-color 0.2s, background 0.2s",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── Desktop + tablet bar ── */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 20px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: "#0a0a0a",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          ExpenseWise
        </a>

        {/* Desktop nav — hidden below 769px via CSS class */}
        <nav
          className="hide-mobile"
          style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  padding: "6px 13px",
                  fontSize: 13.5,
                  fontWeight: active ? 600 : 400,
                  color: active ? "#0a0a0a" : "#555550",
                  borderRadius: 7,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  background: active ? "#f0f0ed" : "transparent",
                  transition: "background 0.15s, color 0.15s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background = "#f7f7f5";
                    (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "#555550";
                  }
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right — Login + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <a
            href="https://expensewiseaaa.vercel.app/sign-in?redirect_url=https%3A%2F%2Fexpensewiseaaa.vercel.app%2F"
            style={{
              padding: "7px 16px",
              background: "#0a0a0a",
              color: "#fff",
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 8,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}
          >
            Log in
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="show-mobile"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              background: "none",
              border: "0.5px solid #e5e5e0",
              borderRadius: 8,
              cursor: "pointer",
              color: "#0a0a0a",
              flexShrink: 0,
              transition: "border-color 0.15s",
            }}
          >
            {open ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-nav"
        className="show-mobile"
        aria-hidden={!open}
        style={{
          maxHeight: open ? 480 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
          borderTop: open ? "0.5px solid #e5e5e0" : "none",
          background: "#fff",
        }}
      >
        <nav
          style={{
            padding: "8px 16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  padding: "12px 14px",
                  fontSize: 15,
                  fontWeight: active ? 600 : 400,
                  color: active ? "#0a0a0a" : "#555550",
                  borderRadius: 8,
                  textDecoration: "none",
                  background: active ? "#f0f0ed" : "transparent",
                  letterSpacing: "-0.01em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {link.label}
                {active && (
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#0a0a0a",
                    }}
                  />
                )}
              </a>
            );
          })}

          {/* Login in drawer */}
          <div
            style={{
              marginTop: 10,
              paddingTop: 14,
              borderTop: "0.5px solid #e5e5e0",
            }}
          >
            <a
              href="https://expensewiseaaa.vercel.app/sign-in?redirect_url=https%3A%2F%2Fexpensewiseaaa.vercel.app%2F"
              style={{
                display: "block",
                textAlign: "center",
                padding: "12px",
                background: "#0a0a0a",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 8,
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Log in
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
