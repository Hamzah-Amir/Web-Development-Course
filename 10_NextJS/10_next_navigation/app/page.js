"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setTimeout(() => {
      router.push('/about')
    }, 2333);
  }, [])
  

  return (
    <div>
      This is our Page
    </div>
  );
}