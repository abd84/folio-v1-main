"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  
  const handleBackClick = () => {
    // Navigate to home page and force a refresh of the hero section
    router.push("/");
  };
  
  return (
    <>
      {pathname !== "/" && (
        <button
          onClick={handleBackClick}
          className="fixed top-6 left-6 z-50 rounded bg-[#212531] px-4 py-2 text-[#e4ded7] shadow hover:bg-[#0E1016] transition-colors"
        >
          ← Back
        </button>
      )}
      {children}
    </>
  );
}