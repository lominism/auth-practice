"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  return async function logout() {
    // 1) Clear session cookie on Nest
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    // 2) Sign out Firebase client
    await signOut(auth);

    // 3) Redirect
    router.replace("/auth/login");
  };
}
