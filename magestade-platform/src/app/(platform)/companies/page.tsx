// Placeholder for src/app/(platform)/companies/page.tsx
async function getCompanies() {
  const res = await fetch("http://localhost:3000/api/companies", {
    cache: "no-store"
  });

  return res.json();
}

export default async function CompaniesPage() {
  const companies = await getCompanies();

  return (
    <div>
      <h1>Companies</h1>

      <ul>
        {companies.map((c: any) => (
          <li key={c.id}>
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
