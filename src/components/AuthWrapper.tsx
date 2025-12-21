"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const isAuthPage =
    pathname === "/login" || pathname === "/register";

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // If NOT logged in & not on auth page → redirect
    if (!isLoggedIn && !isAuthPage) {
      router.replace("/login");
    }

    // If logged in & trying to access auth page → redirect
    if (isLoggedIn && isAuthPage) {
      router.replace("/");
    }
  }, [pathname, router, isAuthPage]);

  return <>{children}</>;
}
