"use client";

import { useRouter } from "next/navigation";
import AuthRedirect from "@/components/AuthRedirect";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

  return (
    <AuthRedirect>
      <div className="auth-page">
        <div className="auth-card">
          <h1>Login</h1>
          <p>Access Smart City services</p>

          <div className="auth-form">
            <input placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button className="btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>

          <p className="auth-footer">
            New here? <a href="/register">Create account</a>
          </p>
        </div>
      </div>
    </AuthRedirect>
  );
}
