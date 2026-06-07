import { Card } from "@/components/ui/Card";

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
      <h1 style={{ marginBottom: 20 }}>
        Executive Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20
        }}
      >
        <Card title="Candidates" value={stats.totalCandidates} />
        <Card title="Jobs" value={stats.totalJobs} />
        <Card title="Applications" value={stats.totalApplications} />
        <Card title="Active Jobs" value={stats.activeJobs} />
      </div>
    </div>
  );
}
