import Image from 'next/image'
import { Navbar } from './components/'
export default function Home() {
return (
    <main className="w-full">
       <div className="fixed bg-[#161616] w-full h-full" />
      <div className="fixed gradient w-80 h-80 rounded-full -top-36 -left-36 blur-2xl" />
      <div className="fixed bg-[#161616]/30 w-full h-full backdrop-blur-sm" />
      <Navbar />
    </main>
  )
}
