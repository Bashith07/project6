"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <div className="navbar-logo">
          <span>Smart City</span>
        </div>

        {/* Desktop Links */}
        <nav className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/tourist">Tourism</Link>
          <Link href="/transport">Transport</Link>
          <Link href="/hospitals">Hospitals</Link>

          {loggedIn ? (
            <>
              <Link href="/favourites">⭐ Favourites</Link>
              <button onClick={logout} className="logout-link">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <ThemeToggle />

          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/tourist" onClick={() => setOpen(false)}>Tourism</Link>
          <Link href="/transport" onClick={() => setOpen(false)}>Transport</Link>
          <Link href="/hospitals" onClick={() => setOpen(false)}>Hospitals</Link>

          {loggedIn ? (
            <>
              <Link href="/favourites" onClick={() => setOpen(false)}>
                ⭐ Favourites
              </Link>
              <button onClick={logout} className="logout-link">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
