import { useState } from "react";
import { login } from "../services/auth";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        try {
            const data = await login(form.email, form.password);
            if (data.token) {
                localStorage.setItem("token", data.token);
                setMessage("Login successful");
                window.location.replace("/")
            } else {
                setMessage(data.message || "Login failed");
            }
        } catch {
            setMessage("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white rounded shadow p-8"
            >
                <h1 className="text-3xl font-bold text-center mb-8">
                    Login
                </h1>
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
                    className="block w-full mb-2 p-4 bg-gray-300 placeholder-black rounded"
                    required
                />
                <div className="flex justify-between mb-4 text-sm">
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Create An account
                    </a>
                    <a href="/forgotPassword" className="text-blue-500 hover:underline">
                        Forgot password?
                    </a>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-300 hover:bg-gray-400 text-black py-3 rounded mt-2"
                >
                    Login
                </button>
                {message && (
                    <div
                        className={`mt-4 text-center ${message === "Login successful"
                                ? "text-green-600"
                                : "text-red-500"
                            }`}
                    >
                        {message}
                    </div>
                )}
                <div className="mt-4 text-center">
                    <a href="/" className="text-blue-500 hover:underline">
                        Back to Home
                    </a>
                </div>
            </form>
        </div>
    );
}