"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../../lib/firebase";

export default function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState<any>(null);

  useEffect(() => {
    const fetchPet = async () => {
      const db = getFirestore(app);
      const docRef = doc(db, "pets", id as string);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPet(docSnap.data());
      }
    };

    if (id) fetchPet();
  }, [id]);

  if (!pet) return <p>Loading...</p>;

  return (
    <div className="details-container">

      {/* IMAGE */}
      <div className="image-box">
        <img src={pet.imageUrl} alt="pet" />
      </div>

      <h1 className="main-title">{pet.petName}</h1>

      {/* DETAILS GRID */}
     {/* INFO GRID */}
<div className="details-grid">

  <div className="detail-card">🎂 Age: {pet.age}</div>
  <div className="detail-card">📍 Location: {pet.location}</div>
  <div className="detail-card">🐶 Breed: {pet.breed}</div>

  <div className="detail-card">🐾 Type: {pet.type}</div>
  <div className="detail-card">⚙️ Maintenance: {pet.maintenance}</div>
  <div className="detail-card">💰 Cost: {pet.cost}</div>

  <div className="detail-card">🏃 Activity: {pet.activity}</div>
   <div className="detail-card traits-card">
    😊 {pet.traits?.friendly && "Friendly "}
    💉 {pet.traits?.vaccinated && "Vaccinated "}
    🎓 {pet.traits?.trained && "Trained"}
  </div>
</div>


{/* DESCRIPTION (BIG CENTERED CARD) */}
<div className="description-card">
  <h3>📝 About this pet</h3>
  <p>{pet.description}</p>
</div>
      </div>
  );
}