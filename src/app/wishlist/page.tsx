"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Wishlist() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <h1>My Wishlist</h1>
      <p>Your saved places will appear here.</p>
    </div>
  );
}
