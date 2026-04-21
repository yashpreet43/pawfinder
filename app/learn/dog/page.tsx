"use client";

import { useState } from "react";

type FollowUp = {
  id: string;
  question: string;
  answer: string;
};

const FOLLOW_UPS: FollowUp[] = [
  {
    id: "vaccines",
    question: "What vaccinations does my dog need?",
    answer:
      "Core vaccines usually protect against distemper, parvovirus, adenovirus and often rabies. Puppies get a series of shots, then boosters as your vet recommends. Always follow your vet’s local schedule.",
  },
  {
    id: "schedule",
    question: "How often should my dog see the vet?",
    answer:
      "Most healthy adult dogs should have a full vet check at least once a year. Puppies, seniors, or dogs with medical issues may need more frequent visits.",
  },
  {
    id: "feeding",
    question: "How do I choose the right food and portions?",
    answer:
      "Use your dog’s age, size, and activity level to pick a food. Start with the feeding guide on the pack, then adjust with your vet’s advice based on weight and energy.",
  },
  {
    id: "exercise",
    question: "How much exercise does a dog need daily?",
    answer:
      "Many dogs need 30–60 minutes of activity per day, sometimes more for high‑energy breeds. Mix walks, play, and mental games like sniffing or puzzle toys.",
  },
];

export default function DogCarePage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1 className="main-title">🐶 Dog Care Basics</h1>
      <p className="subtitle">
        Feeding, daily routine, vet visits and vaccinations in one place.
      </p>

      {/* BASIC CARE SECTIONS */}
      <div className="description-card">
        <h3>🏠 Environment & routine</h3>
        <p>
          Give your dog a safe sleeping spot, fresh water, and a simple daily
          routine for meals, walks, play, and rest. Dogs feel calmer when they
          know what to expect.
        </p>

        <h3>🍽️ Feeding</h3>
        <p>
          Puppies often need 3–4 small meals per day, while adults usually eat
          1–2 meals. Avoid sudden food changes; switch gradually over several
          days if you change brands.
        </p>

        <h3>🩺 Vet visits & vaccinations</h3>
        <p>
          Puppies typically receive a series of core vaccines in the first few
          months, followed by boosters. Adult dogs should have regular check‑ups
          and parasite prevention (fleas, ticks, worms) as advised by your vet.
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