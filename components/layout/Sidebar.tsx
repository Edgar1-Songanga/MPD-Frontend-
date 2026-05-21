export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-6">

      <h1 className="text-xl font-bold">
        Magestade Platform
      </h1>

      <nav className="mt-10 space-y-4">

        <a href="/dashboard">Dashboard</a>
        <a href="/candidates">Candidates</a>
        <a href="/jobs">Jobs</a>
        <a href="/companies">Companies</a>
        <a href="/applications">Applications</a>
        <a href="/contracts">Contracts</a>
        <a href="/billing">Billing</a>

      </nav>
    </aside>
  );
}
