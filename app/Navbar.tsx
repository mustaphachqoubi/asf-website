
const navList = ["Amis sans frontieres", "Home", "What we do", "Contact Us"]

export const Navbar = () => {
  return (
  <div className="flex items-center justify-between px-8 text-white ">
   <div className="grid grid-cols-3 w-full place-content-center">
    {navList.map((list, index) => (
    <div key={index} className={`border-b-2 border-white p-5 flex justify-center text-center  items-center ${index === 0 ? "col-span-3 font-bold text-lg border-t-none" : "col-span-3 cursor-pointer md:col-span-1 text-xs hover:bg-[#1f2937]/30"}`}>
      {list}
    </div>
    ))}
 </div>
  </div>
  )
}