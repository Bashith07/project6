"use client";

import { useRouter } from "next/navigation";
import AuthRedirect from "@/components/AuthRedirect";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = () => {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

  return (
    <AuthRedirect>
      <div className="auth-page">
        <div className="auth-card">
          <h1>Create Account</h1>
          <p>Join Smart City platform</p>

          <div className="auth-form">
            <input placeholder="Full Name" />
            <input placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button className="btn-primary" onClick={handleRegister}>
              Register
            </button>
          </div>

          <p className="auth-footer">
            Already registered? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </AuthRedirect>
  );
}
