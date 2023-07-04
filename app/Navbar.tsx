import { FiMenu } from 'react-icons'

const navList = ["Amis sans frontieres", "Home", "What we do", "Contact Us"];

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 text-white">

      <div className="grid grid-cols-3 w-full place-content-center z-50 ">
        {navList.map((list, index) => (
          <a key={index} href={`${index === 1 ? "#home" : index === 2 ? "#wwd" : index === 3 ? "#cu" : "#"}`}
className={`border-b-2 border-white p-2 text-sm md:text-md 2xl:p-5 2xl:text-2xl 2xl:font-bold flex justify-center text-center items-center ${
              index === 0
                ? "col-span-3 font-bold border-t-none p-4 text-md md:text-lg 2xl:text-4xl"
                : "col-span-3 cursor-pointer col-span-1 md:col-span-1 hover:bg-[#1f2937]/30"
            }`}
          >
            {list}
          </a>
          ))}
      </div>

      <div className="absolute gradient w-80 h-80 rounded-full -top-36 -left-36 blur-2xl z-10" />
    </div>
  );
};
