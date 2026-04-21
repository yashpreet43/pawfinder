"use client";

import Link from "next/link";
import { LearnPieChart } from "../components/LearnPieChart";

const lessons = [
  { slug: "dog", title: "Dog care basics", emoji: "🐶" },
  { slug: "cat", title: "Cat care basics", emoji: "🐱" },
  { slug: "bird", title: "Bird care basics", emoji: "🐦" },
];

export default function LearnPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1 className="main-title">📚 Learn to Care for Your Pet</h1>
      <p className="subtitle">
        Care guides and tips for a smoother adoption experience
      </p>

      {/* ANALYSIS CARD WITH PIE CHART */}
      <div
        style={{
          maxWidth: 700,
          margin: "20px auto",
          background: "white",
          padding: 16,
          borderRadius: 16,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          display: "grid",
          gridTemplateColumns: "2fr 1.5fr",
          gap: 16,
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h2 className="section-title">📊 Why learning matters</h2>
          <p className="card-text">
            Pet owners who spend time learning about basic care and vet
            routines report smoother post‑adoption experiences and better
            confidence looking after their pets.
          </p>
          <p className="card-text" style={{ fontSize: 12, marginTop: 8 }}>
            Example: in our sample, 70% of adopters who used Learn reported a
            very good experience, compared to 30% of those who skipped it.
          </p>
        </div>

        <LearnPieChart />
      </div>

      {/* LEARN CARDS */}
      <div className="cards-container">
        {lessons.map((l) => (
          <Link key={l.slug} href={`/learn/${l.slug}`}>
            <div className="card">
              <h2 className="card-title">
                {l.emoji} {l.title}
              </h2>
              <p className="card-text">
                Feeding, environment, vet visits, vaccinations & more.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}