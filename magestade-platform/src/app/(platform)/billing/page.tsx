"use client";

export default function BillingPage() {
  const subscribe = async () => {
    const res = await fetch("/api/billing", {
      method: "POST",
      body: JSON.stringify({
        companyId: "default"
      })
    });

    const data = await res.json();

    window.location.href = data.url;
  };

  return (
    <div>
      <h1>Billing</h1>

      <button onClick={subscribe}>
        Upgrade to Pro
      </button>
    </div>
  );
}