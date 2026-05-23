import MetricCard from "@/components/dashboard/MetricCard";

export default function DashboardPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mt-8">

        <MetricCard title="Companies" value="12" />
        <MetricCard title="Candidates" value="245" />
        <MetricCard title="Jobs" value="32" />
        <MetricCard title="Applications" value="89" />

      </div>

    </div>
  );
}
