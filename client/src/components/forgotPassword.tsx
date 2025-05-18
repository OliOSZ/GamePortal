import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message || "Check your email for reset instructions.");
    } catch {
      setMessage("Something went wrong.");
    }
  };

  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="block w-full mb-4 p-4 bg-gray-300 placeholder-black rounded"
            required
        />
        <button type="submit" className="w-full bg-gray-400 text-black py-3 rounded">
            Send Reset Link
        </button>
        {message && <div className="mt-4 text-center text-red-500">{message}</div>}
            <div className="mt-4 text-center">
                <a href="/login" className="text-blue-500 hover:underline">
                Back to Login
                </a>
            </div>
        </form>
    </div>
  );
}