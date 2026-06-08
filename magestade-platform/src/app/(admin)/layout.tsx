import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session || session.user.role !== "SUPER_ADMIN") {
    redirect("/dashboard");
  }

  return (
    <div style={{ display: "flex" }}>
      <aside
        style={{
          width: 250,
          background: "#111827",
          color: "white",
          padding: 20
        }}
      >
        <h2>ADMIN PANEL</h2>

        <nav style={{ display: "flex", flexDirection: "column" }}>
          <a href="/admin">Dashboard</a>
          <a href="/admin/companies">Companies</a>
          <a href="/admin/users">Users</a>
        </nav>
      </aside>

      <main style={{ padding: 20, flex: 1 }}>
        {children}
      </main>
    </div>
  );
}