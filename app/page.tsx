"use client"

import { Navbar } from "./Navbar";
import { Herobanner } from "./Herobanner";
import { Whatwedo } from './Whatwedo'
import { useEffect, useState } from 'react'

export default function Home() {

  return (
    <main className="w-full text-center">

      <div id="#home" className={`sticky top-0 h-screen `}>
        <Navbar />
        <Herobanner />
      </div>

      <div id="wwd" className={`flex flex-col sticky top-0 w-full h-screen p-8 text-white bg-[#161616]`}>
        <Whatwedo />
      </div>

      <div id="cu" className={`flex sticky top-0 w-full h-screen justify-center items-center text-white bg-[#161616]`}>
        contact us
      </div>
    </main>
  );
}
