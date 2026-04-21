// app/learn/bird/page.tsx
"use client";

import { useState } from "react";

type FollowUp = {
  id: string;
  question: string;
  answer: string;
};

const FOLLOW_UPS: FollowUp[] = [
  {
    id: "cage-size",
    question: "How big should my bird’s cage be?",
    answer:
      "Choose the largest cage you can safely fit and afford. Your bird should be able to flap their wings fully without touching the sides, move between at least 2–3 perches, and still have space for toys and food/water dishes. Horizontal bars help climbing, and the cage should be placed away from drafts, kitchens, and fumes.",
  },
  {
    id: "diet",
    question: "What should I feed my pet bird every day?",
    answer:
      "For most pet birds, a balanced diet is based on high‑quality pellets, with a smaller amount of seeds and a daily portion of safe fruits and vegetables. Avoid chocolate, caffeine, alcohol, avocado, and salty or sugary human snacks, as many are toxic. Always provide fresh, clean water and change it at least once a day.",
  },
  {
    id: "out-of-cage",
    question: "How much time outside the cage does my bird need?",
    answer:
      "Many birds benefit from supervised time outside the cage every day for exercise and social time. Start with short, safe sessions in a closed room with windows and doors secured, and no ceiling fans running. Make sure there are no toxic plants, open water, or electrical cords they can reach.",
  },
  {
    id: "vet",
    question: "How often should my bird see an avian vet?",
    answer:
      "Newly adopted birds should be checked by an avian veterinarian within the first few days. After that, most birds should have at least a yearly exam to catch hidden problems early and review diet, weight, and grooming needs. Birds often hide signs of illness, so changes in appetite, droppings, or energy should be checked quickly.",
  },
  {
    id: "signs-sick",
    question: "What are early signs that my bird might be sick?",
    answer:
      "Watch for puffed‑up feathers for long periods, staying very quiet, changes in droppings, not eating or drinking normally, breathing with effort, or sitting on the cage floor. Because birds can get seriously ill fast, call an avian vet if you notice these changes.",
  },
];

export default function BirdCarePage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h1 className="main-title">🐦 Bird Care Basics</h1>
      <p className="subtitle">
        Cage setup, diet, exercise and vet care for new bird parents.
      </p>

      {/* BASIC CARE SECTIONS */}
      <div className="description-card">
        <h3>🏠 Cage & environment</h3>
        <p>
          Provide a spacious cage with room for your bird to stretch and flap
          their wings, several perches of different sizes, and a few toys for
          mental stimulation. Keep the cage in a bright area away from drafts,
          smoke, aerosols, and kitchen fumes, and allow for quiet, dark time at
          night so your bird can rest well. 
        </p>

        <h3>🍽️ Diet & water</h3>
        <p>
          Most pet birds do best on a base of quality pellets, with seeds as a
          smaller part of the diet rather than the main food. Fresh, bird‑safe
          fruits and vegetables can be added in small amounts. Remove uneaten
          fresh food after a few hours and make sure your bird always has
          access to clean water. 
        </p>

        <h3>🩺 Vet visits & monitoring</h3>
        <p>
          Birds should be examined by a vet experienced with birds soon after
          adoption and then regularly for preventive check‑ups. Because birds
          hide illness, changes in behavior, appetite, droppings, or weight are
          important warning signs. An avian vet can advise you on vaccines,
          grooming, and how to keep your bird healthy long‑term. 
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