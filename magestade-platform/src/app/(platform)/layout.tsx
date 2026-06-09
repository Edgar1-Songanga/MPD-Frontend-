import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function PlatformLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F7FA" }}>
      
      {/* SIDEBAR */}
      <aside
        style={{
          width: 260,
          background: "#0B1F3B",
          color: "white",
          padding: 20
        }}
      >
        <h2 style={{ color: "#C9A24A", marginBottom: 30 }}>
          MAGESTADE
        </h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <a href="/dashboard">Dashboard</a>
          <a href="/companies">Companies</a>
          <a href="/candidates">Candidates</a>
          <a href="/jobs">Jobs</a>
          <a href="/applications">Applications</a>
          <a href="/contracts">Contracts</a>
        </nav>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, padding: 32 }}>
        {children}
      </main>
    </div>
  );
}
