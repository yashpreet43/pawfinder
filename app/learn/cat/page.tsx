// app/learn/cat/page.tsx
"use client";

import { useState } from "react";

type FollowUp = {
  id: string;
  question: string;
  answer: string;
};

const FOLLOW_UPS: FollowUp[] = [
  {
    id: "litter-box",
    question: "How do I set up the litter box so my cat uses it?",
    answer:
      "Place the litter box in a quiet, low‑traffic area away from food and water. Use an unscented clumping litter and scoop at least once a day. Many vets suggest one box per cat plus one extra. A clean, easily accessible box makes problems much less likely.",
  },
  {
    id: "first-vet",
    question: "When should I take my new cat to the vet?",
    answer:
      "Take your new cat or kitten to the vet within the first week, or sooner if they seem sick. Bring any records you have. The vet will do a full exam, discuss vaccines, deworming, and flea/tick prevention, and answer your questions.",
  },
  {
    id: "vaccines",
    question: "What vaccinations does my cat need?",
    answer:
      "Most cats receive core vaccines that protect against serious viral diseases, and often rabies depending on local rules. Kittens get a series of shots several weeks apart, while adult cats receive boosters according to your vet’s schedule. Always follow the plan your vet recommends for your area.",
  },
  {
    id: "feeding",
    question: "How should I feed my cat each day?",
    answer:
      "Adult cats usually do well with measured meals 2 times per day, or a mix of wet and dry food as your vet advises. Kittens often need more frequent meals. Keep food and water bowls clean and placed away from the litter box. If you change food, do it slowly over several days to avoid stomach upset.",
  },
  {
    id: "introduction",
    question: "How do I help my cat settle in and feel safe?",
    answer:
      "Start with one quiet room that has everything your cat needs: food, water, litter box, hiding spots, and a cozy bed. Let them explore at their own pace. Keep noise and visitors low at first, and spend short, calm sessions sitting nearby, talking softly, and offering treats or gentle play.",
  },
];

export default function CatCarePage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1 className="main-title">🐱 Cat Care Basics</h1>
      <p className="subtitle">
        Setup, daily routine, vet visits and vaccinations for new cat parents.
      </p>

      {/* BASIC CARE SECTIONS */}
      <div className="description-card">
        <h3>🏠 Safe space & routine</h3>
        <p>
          Give your cat a quiet starting room with hiding spots, a comfy bed,
          scratching post, food, water, and a litter box. Let them explore
          slowly and keep loud sounds or sudden changes to a minimum in the
          first days.
        </p>

        <h3>🪣 Litter box basics</h3>
        <p>
          Most cats prefer a clean, easily reachable litter box with enough
          space to turn around. Scoop daily and change litter regularly. Avoid
          strong smells and keep the box away from noisy appliances or busy
          areas.
        </p>

        <h3>🩺 Vet visits & vaccinations</h3>
        <p>
          Kittens usually need a series of vaccines in the first few months,
          then boosters as adults. Even indoor‑only cats benefit from regular
          vet checks for dental health, weight, and early disease detection.
          Follow your vet’s schedule for vaccines and parasite prevention.
        </p>
      </div>

      {/* FOLLOW‑UP QUESTIONS */}
      <div className="description-card" style={{ marginTop: 20 }}>
        <h3>❓ Common follow‑up questions</h3>

        {FOLLOW_UPS.map((item) => (
          <div key={item.id} style={{ marginTop: 10 }}>
            <button className="question-btn" onClick={() => toggle(item.id)}>
              {item.question}
            </button>

            {openId === item.id && (
              <p className="card-text" style={{ marginTop: 8 }}>
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}