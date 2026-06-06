async function getStats() {
  const res = await fetch(
    "http://localhost:3000/api/dashboard?companyId=default",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function DashboardPage() {
  const stats = await getStats();

  return (
    <div>
      <h1>Executive Dashboard</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
        <div>
          <h3>Candidates</h3>
          <p>{stats.totalCandidates}</p>
        </div>

        <div>
          <h3>Jobs</h3>
          <p>{stats.totalJobs}</p>
        </div>

        <div>
          <h3>Applications</h3>
          <p>{stats.totalApplications}</p>
        </div>

        <div>
          <h3>Active Jobs</h3>
          <p>{stats.activeJobs}</p>
        </div>
      </div>
    </div>
  );
}
