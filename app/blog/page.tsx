import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog" };

const POSTS = [
  {
    emoji: "💡",
    category: "Tips",
    title: "The 50/30/20 rule, explained for Indian salaries",
    excerpt: "How to adapt the classic budgeting framework to the Indian cost-of-living reality — with real numbers.",
    date: "2 Jun 2026",
    readTime: "5 min read",
  },
  {
    emoji: "📈",
    category: "Product",
    title: "Introducing AI spending insights",
    excerpt: "We trained a model on anonymised patterns to give you plain-English explanations of your month. Here's how it works.",
    date: "28 May 2026",
    readTime: "4 min read",
  },
  {
    emoji: "🔒",
    category: "Security",
    title: "How we protect your financial data",
    excerpt: "A deep dive into our encryption architecture, zero-knowledge principles, and what we actually store on our servers.",
    date: "20 May 2026",
    readTime: "7 min read",
  },
  {
    emoji: "🎯",
    category: "Tips",
    title: "Stop tracking every rupee. Track these 5 instead.",
    excerpt: "Most people fail at budgeting because they try to track everything. Here's the minimal set that actually moves the needle.",
    date: "14 May 2026",
    readTime: "3 min read",
  },
  {
    emoji: "📱",
    category: "Product",
    title: "The ExpenseWise mobile app is here",
    excerpt: "After 6 months of beta testing, our iOS and Android apps are live. What we built, what we learned, and what's next.",
    date: "5 May 2026",
    readTime: "6 min read",
  },
  {
    emoji: "🤔",
    category: "Finance",
    title: "Emergency fund vs SIP: what to prioritise first?",
    excerpt: "The question we get asked most. Our honest, data-backed answer — with a framework for making your own decision.",
    date: "28 Apr 2026",
    readTime: "8 min read",
  },
];

const CATEGORIES = ["All", "Tips", "Product", "Finance", "Security"];

export default function BlogPage() {
  return (
    <div className="page-wrap">
      {/* Hero */}
      <div className="inner-hero">
        <div className="tag" style={{ marginBottom: 16 }}>Blog</div>
        <h1>Money made<br />legible.</h1>
        <p>
          Practical guides, product updates, and honest takes on personal
          finance — no jargon, no sponsored content.
        </p>
      </div>

      {/* Category filter */}
      <div style={{ display: "flex", gap: 6, marginBottom: 32, flexWrap: "wrap" }}>
        {CATEGORIES.map((c, i) => (
          <button
            key={c}
            style={{
              padding: "5px 14px",
              borderRadius: 100,
              border: "0.5px solid",
              borderColor: i === 0 ? "#0a0a0a" : "#d0d0c8",
              background: i === 0 ? "#0a0a0a" : "transparent",
              color: i === 0 ? "#fff" : "#555550",
              fontSize: 12.5,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Blog grid */}
      <div className="blog-grid">
        {POSTS.map((post) => (
          <div className="blog-card" key={post.title}>
            <div className="blog-card-img">{post.emoji}</div>
            <div className="blog-card-body">
              <div style={{ marginBottom: 10 }}>
                <span className="tag">{post.category}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                {post.date} · {post.readTime}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div
        style={{
          background: "#0a0a0a",
          borderRadius: 14,
          padding: "36px 32px",
          marginBottom: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          color: "#fff",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "-0.5px",
              marginBottom: 6,
            }}
          >
            Get new posts in your inbox
          </div>
          <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.55)", margin: 0 }}>
            No spam. Unsubscribe any time.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <input
            type="email"
            placeholder="you@example.com"
            style={{
              padding: "9px 14px",
              borderRadius: 8,
              border: "0.5px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              fontSize: 13.5,
              fontFamily: "'Inter', sans-serif",
              outline: "none",
              minWidth: 220,
            }}
          />
          <button
            style={{
              padding: "9px 20px",
              background: "#fff",
              color: "#0a0a0a",
              border: "none",
              borderRadius: 8,
              fontSize: 13.5,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
