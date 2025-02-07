"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import FlipWordsDemo from "./words";


export default function ShootingStarsAndStarsBackgroundDemo() {
    return (
             
      <div className="min-h-screen min-w-full rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
           <nav className="flex justify-between m-3 p-3 text-white font-semibold">
            <ul className="px-3 space-x-7 ">
                <a href="/" className=" m-2 p-2 bg-gray-300 bg-opacity-15 rounded-xl">Explore Events 🡕</a>
                <a href="" className="m-2 p-2 bg-gray-300 bg-opacity-15 rounded-xl">Sign In</a>
            </ul>
        </nav>
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
        <FlipWordsDemo/>
        </h2>
      <ShootingStars />
      <StarsBackground />
            </div>
  );
}
