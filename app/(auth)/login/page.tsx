"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  async function handleLogin() {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white border p-10 w-[400px]">

        <h1 className="text-2xl font-bold">
          Login
        </h1>

        <div className="space-y-4 mt-6">

          <input
            placeholder="Email"
            className="w-full border p-3"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            onClick={handleLogin}
            className="bg-[#0B1F3B] text-white w-full py-3"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}
