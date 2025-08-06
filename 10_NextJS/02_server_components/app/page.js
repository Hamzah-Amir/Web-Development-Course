"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setcount] = useState(0)
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Hello I am a component called count and my count value is {count}
      <button className="border-[1px] w-[100px] rounded-2xl cursor-pointer" onClick={() => setcount(count + 1)}>Click me</button>
    </div>
  )
}
