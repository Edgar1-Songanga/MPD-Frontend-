"use client";

import { useState } from "react";

export function LeadForm() {
  const [email, setEmail] = useState("");

  const submit = async () => {
    await fetch("/api/leads", {
      method: "POST",
      body: JSON.stringify({ email })
    });

    alert("Request submitted");
  };

  return (
    <div>
      <input
        placeholder="Business email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={submit}>
        Request Demo
      </button>
    </div>
  );
}