"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
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
          <Link href="/favourites">⭐ Favourites</Link>

          {/* Logout (Desktop) */}
          <button onClick={logout} className="logout-link">
            Logout
          </button>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">
          <ThemeToggle />

          {/* Hamburger */}
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
          <Link href="/favourites" onClick={() => setOpen(false)}>
            ⭐ Favourites
          </Link>

          {/* Logout (Mobile) */}
          <button onClick={logout} className="logout-link">
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
