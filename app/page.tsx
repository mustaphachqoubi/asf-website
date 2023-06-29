"use client"

import { Navbar } from "./Navbar";
import { Herobanner } from "./Herobanner";
import { useEffect, useState } from 'react'

export default function Home() {

  const [display, setDisplay] = useState('hidden')

    const [scrollLevel, setScrollLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const level = window.scrollY;
      setScrollLevel(level);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  useEffect(() => { 
    scrollLevel >= 161 && setDisplay('flex')
    scrollLevel === 0 && setDisplay('hidden')
  })

  return (
    <main className="w-full text-center">

      <div className={`sticky top-0 h-[300vh]`}>
        <Navbar />
        <Herobanner />
      </div>

      <div className={`${display} sticky top-0 w-full h-screen justify-center items-center text-white bg-[#161616]`}>
        what we do
      </div>

      <div className={`${display} sticky top-0 w-full h-screen justify-center items-center text-white bg-[#161616]`}>
        contact us
      </div>
    </main>
  );
}
