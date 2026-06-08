async function getStats() {
  const res = await fetch("http://localhost:3000/api/admin", {
    cache: "no-store"
  });

  return res.json();
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div>
      <h1>System Overview</h1>

      <ul>
        <li>Users: {stats.users}</li>
        <li>Companies: {stats.companies}</li>
        <li>Jobs: {stats.jobs}</li>
        <li>Candidates: {stats.candidates}</li>
      </ul>
    </div>
  );
}