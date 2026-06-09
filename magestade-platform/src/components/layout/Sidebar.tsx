export function Sidebar() {
  return (
    <aside
      style={{
        width: 260,
        background: "#0B1F3B",
        color: "white",
        padding: 24,
        height: "100vh"
      }}
    >
      <h2 style={{ color: "#C9A24A", marginBottom: 30 }}>
        MAGESTADE
      </h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          "Dashboard",
          "Companies",
          "Candidates",
          "Jobs",
          "Applications",
          "Contracts",
          "Billing"
        ].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              color: "#D1D5DB",
              textDecoration: "none",
              fontSize: 14
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}