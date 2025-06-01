import { useState } from "react";
import { signup } from "../services/auth";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [confirmePassword, setConfirmePassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePassword = () => {
    if (form.password !== confirmePassword) {
      setError('Password does not match');
      return false; 
    } 
    setError('');
    return true; 
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    try {
      if (validatePassword()) {
        
      }
      const data = await signup(form.username, form.email, form.password);
      setMessage(data.message);
      window.location.replace("/")
    } catch {
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-8 bg-white rounded shadow">
        <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="block w-full mb-4 p-4 bg-gray-300 placeholder-black rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="E-post"
          value={form.email}
          onChange={handleChange}
          className="block w-full mb-4 p-4 bg-gray-300 placeholder-black rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Passord"
          value={form.password}
          onChange={handleChange}
          className="block w-full mb-4 p-4 bg-gray-300 placeholder-black rounded"
          required
        />
        <input
          name="confirmePassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmePassword}
          onChange={e => setConfirmePassword(e.target.value)}
          className="block w-full mb-4 p-4 bg-gray-300 placeholder-black rounded"
          required
        />
        {error && (
          <div className="text-red-500 text-center mb-2">{error}</div>
        )}
        <button type="submit" className="w-full bg-gray-300 hover:bg-gray-400 text-black py-3 rounded mt-2">
          Sign Up
        </button>
        {message && (
          <div
            className={`mt-4 text-center ${message === "User registered successfully"
                ? "text-green-600"
                : "text-red-500"}`}>
            {message}
          </div>
        )}
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-500 hover:underline">
            Already have an account?
          </a>
        </div>
      </form>
    </div>
  );
}