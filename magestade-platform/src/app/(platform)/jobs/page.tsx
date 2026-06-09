async function getJobs() {
  const res = await fetch(
    "http://localhost:3000/api/jobs?companyId=default",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div>
      <h1>Jobs</h1>

      <ul>
        {jobs.map((j: any) => (
          <li key={j.id}>
            <strong>{j.title}</strong>
            <p>{j.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
