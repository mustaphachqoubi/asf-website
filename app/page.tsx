import { Navbar } from './Navbar'
import { Herobanner } from './Herobanner'

export default function Home() {
return (
    <main className="w-full text-center">
      <Navbar />
      <Herobanner />
      <div className="absolute bg-[#161616] w-full h-full" />
      <div className="absolute gradient w-80 h-80 rounded-full -top-36 -left-36 blur-2xl z-1" />
      <div className="absolute bg-[#161616]/30 w-full h-full backdrop-blur-sm" />
    </main>
  )
}
