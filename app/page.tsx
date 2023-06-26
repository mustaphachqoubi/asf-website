import { Navbar } from './Navbar'
import { Herobanner } from './Herobanner'

export default function Home() {
return (
    <main className="w-full text-center">
      <Navbar />
      <Herobanner />
      <div className="absolute bg-[#161616] w-full" />
      <div className="absolute gradient w-80 h-80 rounded-full -top-36 -left-36 blur-2xl" />
      <div className="absolute bg-[#161616]/30 w-full backdrop-blur-sm" />
    </main>
  )
}
