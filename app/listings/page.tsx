"use client";

import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../lib/firebase";
import Link from "next/link";

export default function Listings() {
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // filters
  const [maxAge, setMaxAge] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const [friendlyFilter, setFriendlyFilter] = useState(false);
  const [vaccinatedFilter, setVaccinatedFilter] = useState(false);
  const [trainedFilter, setTrainedFilter] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const db = getFirestore(app);

    try {
      const querySnapshot = await getDocs(collection(db, "pets"));

      const data: any[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setPets(data);
    } catch (error) {
      console.error("Error fetching pets:", error);
      alert("Failed to load pets.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdopt = async (petId: string) => {
    const db = getFirestore(app);
    const petRef = doc(db, "pets", petId);

    try {
      await updateDoc(petRef, {
        status: "adopted",
      });

      setPets(
        pets.map((pet) =>
          pet.id === petId ? { ...pet, status: "adopted" } : pet
        )
      );

      alert("Pet adopted successfully! 🥳");
    } catch (error) {
      console.error("Error adopting pet:", error);
      alert("Failed to adopt pet. Please try again.");
    }
  };

  const filteredPets = pets.filter((item) => {
    return (
      (maxAge === "" || Number(item.age) <= Number(maxAge)) &&
      (searchLocation === "" ||
        item.location?.toLowerCase().includes(searchLocation.toLowerCase())) &&
      (!friendlyFilter || item.traits?.friendly) &&
      (!vaccinatedFilter || item.traits?.vaccinated) &&
      (!trainedFilter || item.traits?.trained) &&
      (typeFilter === "" || item.type === typeFilter)
    );
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="main-title">🐾 Available Pets</h1>

      <p className="subtitle">
        Find your perfect companion based on your preferences 💛
      </p>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Link href="/learn">
          <button className="learn-button">📚 Learn how to care for pets</button>
        </Link>
      </div>

      {/* FILTER BOX */}
      <div className="filter-box">
        <h2 className="filter-title">🔍 Find Your Perfect Pet</h2>

        {/* ROW 1 */}
        <div className="filter-row">
          <input
            placeholder="🎂 Max Age"
            className="filter-input"
            onChange={(e) => setMaxAge(e.target.value)}
          />

          <input
            placeholder="📍 Location"
            className="filter-input"
            onChange={(e) => setSearchLocation(e.target.value)}
          />

          <select
            className="filter-input"
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">🐾 All Types</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
          </select>
        </div>

        {/* CHECKBOXES */}
        <div className="filter-checkbox-row">
          <label className="chip">
            <input
              type="checkbox"
              onChange={(e) => setFriendlyFilter(e.target.checked)}
            />
            😊 Friendly
          </label>

          <label className="chip">
            <input
              type="checkbox"
              onChange={(e) => setVaccinatedFilter(e.target.checked)}
            />
            💉 Vaccinated
          </label>

          <label className="chip">
            <input
              type="checkbox"
              onChange={(e) => setTrainedFilter(e.target.checked)}
            />
            🎓 Trained
          </label>
        </div>
      </div>

      {/* CARDS */}
      <div className="cards-container">
        {loading ? (
          <p style={{ textAlign: "center", width: "100%", fontSize: "18px" }}>
            Loading pets...
          </p>
        ) : filteredPets.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%", fontSize: "18px" }}>
            No pets found matching your filters.
          </p>
        ) : (
          filteredPets.map((item) => (
            <div key={item.id} className="card-wrapper">
              <Link href={`/pet/${item.id}`}>
                <div className="card">
                  {item.age < 2 && (
                    <div className="top-badge">⭐ Top Pick</div>
                  )}

                  <div className="badge">
                    {item.status === "adopted" ? "🔴 Adopted" : "🟢 Available"}
                  </div>

                  <img
                    src={item.imageUrl || "/property.jpg"}
                    alt={item.petName ? `${item.petName} pet photo` : "Pet photo"}
                    className="card-img"
                  />

                  <h2 className="card-title">{item.petName}</h2>

                  <p className="card-text">🎂 Age: {item.age}</p>
                  <p className="card-text">📍 {item.location}</p>
                  <p className="card-text">
                    📏 {item.distance || "N/A"} km away
                  </p>
                  <p className="card-text">🐶 {item.breed}</p>
                  <p className="card-text">🐾 {item.type}</p>

                  <p className="card-text">
                    {item.traits?.friendly ? "😊 Friendly " : ""}
                    {item.traits?.vaccinated ? "💉 Vaccinated " : ""}
                    {item.traits?.trained ? "🎓 Trained" : ""}
                  </p>
                </div>
              </Link>

              {item.status !== "adopted" && (
                <button
                  className="adopt-button"
                  onClick={() => handleAdopt(item.id)}
                >
                  🏠 Adopt Now
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}