"use client";

import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../lib/firebase";

export default function AddPet() {
  const [petName, setPetName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [distance, setDistance] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const [maintenance, setMaintenance] = useState("");
  const [cost, setCost] = useState("");
  const [activity, setActivity] = useState("");

  const [friendly, setFriendly] = useState(false);
  const [vaccinated, setVaccinated] = useState(false);
  const [trained, setTrained] = useState(false);

  const handleSubmit = async () => {
    const db = getFirestore(app);

    await addDoc(collection(db, "pets"), {
      petName,
      age,
      breed,
      type,
      location,
      distance,
      imageUrl,
      description,
      maintenance,
      cost,
      activity,
      traits: { friendly, vaccinated, trained },
      status: "available",
    });

    alert("🐾 Pet added successfully!");
  };

  return (
    <div>
      <h1 className="main-title">🐾 Find a Loving Home</h1>
      <p className="subtitle">
        Help a furry friend find their forever family 💛
      </p>

      <div className="form-container">

        {/* BASIC INFO */}
        <h2 className="section-title">🐶 Basic Information</h2>

        <input
          placeholder="Pet Name"
          className="input"
          onChange={(e) => setPetName(e.target.value)}
        />

        <input
          placeholder="Age"
          className="input"
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          placeholder="Breed"
          className="input"
          onChange={(e) => setBreed(e.target.value)}
        />

        <select className="input" onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>

        {/* LOCATION */}
        <h2 className="section-title">📍 Location Details</h2>

        <input
          placeholder="Location"
          className="input"
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          placeholder="Distance (km)"
          className="input"
          onChange={(e) => setDistance(e.target.value)}
        />

        {/* DETAILS */}
        <h2 className="section-title">⚙️ Pet Details</h2>

        <select className="input" onChange={(e) => setMaintenance(e.target.value)}>
          <option value="">Maintenance</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select className="input" onChange={(e) => setCost(e.target.value)}>
          <option value="">Cost</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select className="input" onChange={(e) => setActivity(e.target.value)}>
          <option value="">Activity Level</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* TRAITS */}
        <h2 className="section-title">✨ Traits</h2>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" onChange={(e) => setFriendly(e.target.checked)} /> Friendly
          </label>

          <label>
            <input type="checkbox" onChange={(e) => setVaccinated(e.target.checked)} /> Vaccinated
          </label>

          <label>
            <input type="checkbox" onChange={(e) => setTrained(e.target.checked)} /> Trained
          </label>
        </div>

        {/* DESCRIPTION */}
        <h2 className="section-title">📝 About Pet</h2>

        <textarea
          placeholder="Describe the pet..."
          className="input"
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* IMAGE */}
        <h2 className="section-title">🖼️ Image</h2>

        <input
          placeholder="Paste image URL"
          className="input"
          onChange={(e) => setImageUrl(e.target.value)}
        />

        {/* BUTTON */}
        <button className="btn" onClick={handleSubmit}>
          🐾 Add Pet
        </button>
      </div>
    </div>
  );
}