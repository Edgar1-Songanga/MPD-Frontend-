export function Card({
  title,
  value
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 10,
        border: "1px solid #E5E7EB"
      }}
    >
      <h4 style={{ color: "#64748B" }}>{title}</h4>
      <h2 style={{ fontSize: 24, fontWeight: "bold" }}>
        {value}
      </h2>
    </div>
  );
}
