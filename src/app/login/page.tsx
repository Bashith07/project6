"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {
    localStorage.setItem("isLoggedIn", "true");
    router.push("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>{isLogin ? "Login" : "Register"}</h1>
        <p>
          {isLogin
            ? "Access Smart City services"
            : "Create your Smart City account"}
        </p>

        <div className="auth-form">
          {!isLogin && <input placeholder="Full Name" />}
          <input placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="btn-primary" onClick={handleSubmit}>
            {isLogin ? "Login" : "Register"}
          </button>
        </div>

        <p className="auth-footer">
          {isLogin ? (
            <>
              New here?{" "}
              <button onClick={() => setIsLogin(false)} className="link-btn">
                Create account
              </button>
            </>
          ) : (
            <>
              Already registered?{" "}
              <button onClick={() => setIsLogin(true)} className="link-btn">
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
