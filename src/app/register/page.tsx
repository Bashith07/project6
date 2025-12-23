"use client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = () => {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p>Join Smart City platform</p>

        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="btn-primary" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}
