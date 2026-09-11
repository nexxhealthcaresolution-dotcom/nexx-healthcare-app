"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Incorrect password. Please try again.");
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-8">
      <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 w-full max-w-sm space-y-5">
        <div className="text-center">
          <img src="/nexx-logo-primary.png" alt="Nexx Healthcare Solution" className="h-20 w-auto mx-auto mb-4" />
          <h1 className="text-xl font-semibold">Admin Login</h1>
        </div>
        <div>
          <label className="text-sm font-medium block mb-1.5">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-accent/20 px-4 py-2.5 outline-none focus:border-accent"
            placeholder="Enter admin password"
            required
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent text-white font-medium px-5 py-3 rounded-full hover:bg-accent-dark transition disabled:opacity-60"
        >
          {loading ? "Checking..." : "Log In"}
        </button>
      </form>
    </main>
  );
}
