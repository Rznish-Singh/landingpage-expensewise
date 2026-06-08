import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: { default: "ExpenseWise — Expense Analytics", template: "%s | ExpenseWise" },
  description: "The sharpest expense manager built for people who actually care where every rupee goes.",
  keywords: ["expense manager", "budget tracker", "personal finance", "spending analytics"],
  authors: [{ name: "rznish.dev" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <div className="page-wrap"><Footer /></div>
      </body>
    </html>
  );
}
