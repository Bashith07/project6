"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  // ⭐ Favourites count
  const favCount = useSelector(
    (state: RootState) => state.favourites.items.length
  );

  // 🛒 Cart count
  const cartCount = useSelector(
    (state: RootState) =>
      state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    setLoggedIn(localStorage.getItem("isLoggedIn") === "true");

    const syncLogin = () => {
      setLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", syncLogin);
    return () => window.removeEventListener("storage", syncLogin);
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
    router.push("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span>Smart City</span>
        </div>

        {/* ================= DESKTOP ================= */}
        <nav className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/tourist">Tourism</Link>
          <Link href="/transport">Transport</Link>
          <Link href="/hospitals">Hospitals</Link>

          {/* ⭐ FAVOURITES */}
          <Link href="/favourites">
            ⭐ Favourites {favCount > 0 && `(${favCount})`}
          </Link>

          {/* 🛒 CART */}
          <Link href="/cart">
            🛒 Cart {cartCount > 0 && `(${cartCount})`}
          </Link>

          {loggedIn ? (
            <button onClick={logout} className="logout-link">
              Logout
            </button>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      {open && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/tourist" onClick={() => setOpen(false)}>Tourism</Link>
          <Link href="/transport" onClick={() => setOpen(false)}>Transport</Link>
          <Link href="/hospitals" onClick={() => setOpen(false)}>Hospitals</Link>

          {/* ⭐ FAVOURITES */}
          <Link href="/favourites" onClick={() => setOpen(false)}>
            ⭐ Favourites {favCount > 0 && `(${favCount})`}
          </Link>

          {/* 🛒 CART */}
          <Link href="/cart" onClick={() => setOpen(false)}>
            🛒 Cart {cartCount > 0 && `(${cartCount})`}
          </Link>

          {loggedIn ? (
            <button onClick={logout} className="logout-link">
              Logout
            </button>
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
