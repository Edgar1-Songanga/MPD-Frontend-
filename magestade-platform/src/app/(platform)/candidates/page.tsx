// Placeholder for src/app/(platform)/candidates/page.tsx
async function getCandidates() {
  const res = await fetch(
    "http://localhost:3000/api/candidates?companyId=default",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function CandidatesPage() {
  const candidates = await getCandidates();

  return (
    <div>
      <h1>Candidates</h1>

      <ul>
        {candidates.map((c: any) => (
          <li key={c.id}>
            {c.firstName} {c.lastName} — {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
