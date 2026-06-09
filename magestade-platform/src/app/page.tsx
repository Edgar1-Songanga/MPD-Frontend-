export default function LandingPage() {
  return (
    <div style={{ fontFamily: "Inter" }}>
      
      {/* HERO */}
      <section
        style={{
          padding: "100px 40px",
          background: "#0B1F3B",
          color: "white",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: 48 }}>
          Corporate Workforce & Digital Transformation Solutions
        </h1>

        <p style={{ fontSize: 18, marginTop: 20, color: "#D1D5DB" }}>
          A unified platform for HR operations, recruitment, contracts and enterprise workforce management.
        </p>

        <button
          style={{
            marginTop: 30,
            padding: "12px 24px",
            background: "#C9A24A",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold"
          }}
        >
          Request Demo
        </button>
      </section>

      {/* VALUE PROPOSITION */}
      <section style={{ padding: 60 }}>
        <h2>Why Organizations Use This Platform</h2>

        <ul style={{ marginTop: 20, lineHeight: 2 }}>
          <li>Centralized HR operations</li>
          <li>End-to-end recruitment pipeline</li>
          <li>Contract lifecycle management</li>
          <li>Multi-company architecture</li>
          <li>Executive analytics dashboard</li>
        </ul>
      </section>

      {/* TRUST SECTION */}
      <section
        style={{
          padding: 60,
          background: "#F5F7FA"
        }}
      >
        <h2>Built for Enterprise Use</h2>

        <p>
          Designed for institutions, governments and scaling organizations
          requiring structured workforce systems.
        </p>
      </section>

    </div>
  );
}