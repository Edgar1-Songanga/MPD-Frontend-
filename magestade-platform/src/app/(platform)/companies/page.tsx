type Company = {
  id: string;
  name: string;
};

async function getCompanies(): Promise<Company[]> {
  const res = await fetch("/api/companies", {
    cache: "no-store", // remove this if you want ISR
    next: { revalidate: 0 } // Next 14 way to disable cache
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch companies: ${res.status}`);
  }

  return res.json();
}

export default async function CompaniesPage() {
  let companies: Company[] = [];
  let error: string | null = null;

  try {
    companies = await getCompanies();
  } catch (err) {
    error = err instanceof Error ? err.message : "Unknown error";
  }

  if (error) {
    return (
      <div className="p-6">
        <h1>Companies</h1>
        <p className="text-red-500">Failed to load: {error}</p>
      </div>
    );
  }

  if (companies.length === 0) {
    return (
      <div className="p-6">
        <h1>Companies</h1>
        <p>No companies found.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Companies</h1>
      <ul className="space-y-2">
        {companies.map((c) => (
          <li key={c.id} className="border p-2 rounded">
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}