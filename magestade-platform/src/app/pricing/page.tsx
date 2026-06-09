export default function PricingPage() {
  return (
    <div style={{ padding: 60 }}>
      <h1>Pricing</h1>

      <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
        
        {/* BASIC */}
        <div style={{ border: "1px solid #E5E7EB", padding: 20 }}>
          <h3>Starter</h3>
          <p>$2.500/month</p>
          <ul>
            <li>Basic HR tools</li>
            <li>Candidate tracking</li>
            <li>Job management</li>
          </ul>
        </div>

        {/* PRO */}
        <div style={{ border: "2px solid #C9A24A", padding: 20 }}>
          <h3>Professional</h3>
          <p>$5.000/month</p>
          <ul>
            <li>Full HR suite</li>
            <li>Contracts system</li>
            <li>Analytics dashboard</li>
            <li>File uploads</li>
          </ul>
        </div>

        {/* ENTERPRISE */}
        <div style={{ border: "1px solid #E5E7EB", padding: 20 }}>
          <h3>Enterprise</h3>
          <p>$10.000/month</p>
          <ul>
            <li>Multi-company setup</li>
            <li>Dedicated support</li>
            <li>Custom integrations</li>
          </ul>
        </div>

      </div>
    </div>
  );
}