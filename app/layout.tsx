
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ExpenseWise — Expense Analytics",
    template: "%s | ExpenseWise",
  },
  description:
    "The sharpest expense manager built for people who actually care where every rupee goes.",
  keywords: [
    "expense manager",
    "budget tracker",
    "personal finance",
    "spending analytics",
  ],
  authors: [{ name: "rznish.vercel.app" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <div className="page-wrap">
          <Footer />
        </div>
      </body>
    </html>
  );
}
