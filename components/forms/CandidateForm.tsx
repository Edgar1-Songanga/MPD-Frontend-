"use client";

import { useState } from "react";

export default function CandidateForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
  });

  async function handleSubmit() {
    await fetch("/api/candidates", {
      method: "POST",
      body: JSON.stringify(form),
    });
  }

  return (
    <div className="bg-white border p-6">

      <div className="space-y-4">

        <input
          placeholder="Full Name"
          className="w-full border p-3"
          onChange={(e) =>
            setForm({
              ...form,
              fullName: e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          className="w-full border p-3"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <button
          onClick={handleSubmit}
          className="bg-[#0B1F3B] text-white px-6 py-3"
        >
          Save Candidate
        </button>

      </div>

    </div>
  );
}
