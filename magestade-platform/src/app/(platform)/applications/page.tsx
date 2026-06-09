async function getApplications() {
  const res = await fetch(
    "http://localhost:3000/api/applications?companyId=default",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function ApplicationsPage() {
  const applications = await getApplications();

  return (
    <div>
      <h1>Applications</h1>

      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Job</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((a: any) => (
            <tr key={a.id}>
              <td>{a.candidate?.firstName}</td>
              <td>{a.job?.title}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
