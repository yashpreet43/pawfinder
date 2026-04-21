import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f9fafb",
        padding: "24px",
      }}
    >
      <section
        style={{
          maxWidth: "700px",
          width: "100%",
          background: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "12px", color: "#111827" }}>
  PawFinder Home - UI Branch
</h1>

        <p style={{ fontSize: "1.1rem", color: "#4b5563", marginBottom: "28px" }}>
          Find loving homes for pets and discover your new best friend.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/listings"
            style={{
              textDecoration: "none",
              background: "#2563eb",
              color: "white",
              padding: "12px 20px",
              borderRadius: "10px",
              fontWeight: "600",
            }}
          >
            View Pets
          </Link>

          <Link
            href="/add-pet"
            style={{
              textDecoration: "none",
              background: "#10b981",
              color: "white",
              padding: "12px 20px",
              borderRadius: "10px",
              fontWeight: "600",
            }}
          >
            Add Pet
          </Link>
        </div>
      </section>
    </main>
  );
}