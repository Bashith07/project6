"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    // Save user details in localStorage
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    localStorage.setItem("isLoggedIn", "true");

    // Redirect to login page
    router.push("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Join Smart City platform</p>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-primary" onClick={handleRegister}>
          Register
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>
          Already registered?{" "}
          <button
            onClick={() => router.push("/login")}
            className="link-btn"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
