"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (user.email === email && user.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/"); // Redirect home
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>
        <p>Access Smart City services</p>

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

        <button className="btn-primary" onClick={handleLogin}>
          Login
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <p>
          New here?{" "}
          <button
            onClick={() => router.push("/register")}
            className="link-btn"
          >
            Create account
          </button>
        </p>
      </div>
    </div>
  );
}
