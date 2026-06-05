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
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: 250, background: "#0B1F3B", color: "white" }}>
        <h2 style={{ padding: 20 }}>Magestade</h2>
      </aside>

      <main style={{ flex: 1, padding: 20 }}>
        {children}
      </main>
    </div>
  );
}
