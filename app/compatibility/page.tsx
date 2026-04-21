"use client";

import { useState } from "react";

export default function CompatibilityPage() {
  const [homeType, setHomeType] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [hasKids, setHasKids] = useState("");
  const [result, setResult] = useState("");

  const handleMatch = (e: React.FormEvent) => {
    e.preventDefault();

    if (homeType === "apartment" && activityLevel === "low") {
      setResult("A calm cat or a small dog may be a great match for you.");
    } else if (homeType === "house" && activityLevel === "high") {
      setResult("An active dog like a Labrador or Beagle could be perfect for you.");
    } else if (hasKids === "yes") {
      setResult("A friendly and trained pet would likely suit your family best.");
    } else {
      setResult("You may be a good match for a gentle pet with an adaptable nature.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "32px",
          borderRadius: "18px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px", color: "#111827" }}>
          Find Your Perfect Pet Match 🐶🐱
        </h1>

        <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "28px" }}>
          Answer a few questions and discover which pet may fit your lifestyle.
        </p>

        <form onSubmit={handleMatch}>
          <label style={labelStyle}>What type of home do you live in?</label>
          <select
            value={homeType}
            onChange={(e) => setHomeType(e.target.value)}
            style={inputStyle}
            required
          >
            <option value="">Select home type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
          </select>

          <label style={labelStyle}>What is your activity level?</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            style={inputStyle}
            required
          >
            <option value="">Select activity level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <label style={labelStyle}>Do you have kids at home?</label>
          <select
            value={hasKids}
            onChange={(e) => setHasKids(e.target.value)}
            style={inputStyle}
            required
          >
            <option value="">Select option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <button type="submit" style={buttonStyle}>
            Check Compatibility
          </button>
        </form>

        {result && (
          <div
            style={{
              marginTop: "24px",
              padding: "18px",
              borderRadius: "12px",
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              color: "#1e3a8a",
              fontWeight: "500",
            }}
          >
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "600",
  color: "#374151",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#7c3aed",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};