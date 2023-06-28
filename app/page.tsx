import { Navbar } from "./Navbar";
import { Herobanner } from "./Herobanner";

export default function Home() {
  return (
    <main className="w-full text-center">
      <div id="home" className="sticky top-0">
        <Navbar />
        <Herobanner />
      </div>

      <div id="whatWeDo" className="bg-green-500 sticky top-0 w-full h-screen flex justify-center items-center text-white bg-[#161616]">
        what we do
      </div>

      <div id="contactUs" className="sticky top-0 w-full h-screen flex justify-center items-center text-white bg-[#161616]">
        contact us
      </div>
    </main>
  );
}
