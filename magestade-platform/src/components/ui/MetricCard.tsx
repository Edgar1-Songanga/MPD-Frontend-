export function MetricCard({
  title,
  value,
  subtitle
}: {
  title: string;
  value: string | number;
  subtitle?: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E5E7EB",
        borderRadius: 12,
        padding: 20,
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
      }}
    >
      <p style={{ fontSize: 12, color: "#6B7280" }}>{title}</p>

      <h2 style={{ fontSize: 26, margin: "6px 0" }}>
        {value}
      </h2>

      {subtitle && (
        <p style={{ fontSize: 12 }}>{subtitle}</p>
      )}
    </div>
  );
}