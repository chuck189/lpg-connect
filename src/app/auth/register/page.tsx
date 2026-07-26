"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, role: "CUSTOMER" }),
    });

    setIsSubmitting(false);

    if (!response.ok) {
      const body = await response.json();
      setError(body.error || "Unable to register account.");
      return;
    }

    router.push("/auth/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg rounded-3xl border bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-semibold">Create account</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Register to start using LPG Connect.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              First name
              <input
                type="text"
                value={formData.firstName}
                onChange={(event) => setFormData({ ...formData, firstName: event.target.value })}
                className="mt-2 w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </label>
            <label className="block text-sm font-medium">
              Last name
              <input
                type="text"
                value={formData.lastName}
                onChange={(event) => setFormData({ ...formData, lastName: event.target.value })}
                className="mt-2 w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </label>
          </div>

          <label className="block text-sm font-medium">
            Email
            <input
              type="email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              className="mt-2 w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </label>

          <label className="block text-sm font-medium">
            Phone
            <input
              type="tel"
              value={formData.phone}
              onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
              className="mt-2 w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </label>

          <label className="block text-sm font-medium">
            Password
            <input
              type="password"
              value={formData.password}
              onChange={(event) => setFormData({ ...formData, password: event.target.value })}
              className="mt-2 w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-green-600 px-4 py-3 text-white hover:bg-green-700 disabled:opacity-60"
          >
            {isSubmitting ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account? <a href="/auth/login" className="text-green-600 underline">Sign in</a>
        </p>
      </div>
    </div>
  );
}
