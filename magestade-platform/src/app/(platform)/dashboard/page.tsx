import { MetricCard } from "@/components/ui/MetricCard";

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
      <h1 style={{ marginBottom: 24 }}>
        Executive Overview
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16
        }}
      >
        <MetricCard title="Candidates" value={stats.totalCandidates} />
        <MetricCard title="Jobs" value={stats.totalJobs} />
        <MetricCard title="Applications" value={stats.totalApplications} />
        <MetricCard title="Active Jobs" value={stats.activeJobs} />
      </div>
    </div>
  );
}