interface Props {
  title: string;
  value: string;
}

export default function MetricCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-white border p-6">

      <h3 className="text-sm text-gray-500">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}
