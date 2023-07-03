"use client"

import { Navbar } from "./Navbar";
import { Herobanner } from "./Herobanner";
import { useEffect, useState } from 'react'

export default function Home() {

  return (
    <main className="w-full text-center">

      <div id="#home" className={`sticky top-0 h-screen `}>
        <Navbar />
        <Herobanner />
      </div>

      <div id="wwd" className={`flex sticky top-0 w-full h-screen justify-center items-center text-white bg-[#161616]`}>
        what we do
      </div>

      <div id="cu" className={`flex sticky top-0 w-full h-screen justify-center items-center text-white bg-[#161616]`}>
        contact us
      </div>
    </main>
  );
}
