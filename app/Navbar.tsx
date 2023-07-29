import React from "react";

const navList = [
  {
    name: "Amis sans frontieres", 
    id: 1
  }, 
  {
    name: "Home", 
    id:2
  }, 
  {
    name: "What we do",
    id:3
  }, 
  {
    name: "Contact Us",
    id:4
  }
];

export const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-8 text-white">
      <div className="grid grid-cols-3 w-full place-content-center z-50 ">
        {navList.map((list) => (
          <a
            key={list.id}
            href={`${
              list.id === 2
                ? "#home"
                : list.id === 3
                ? "#wwd"
                : list.id === 4
                ? "#cu"
                : "#"
            }`}
            className={`border-b-2 border-white p-2 text-sm md:text-md 2xl:p-5 2xl:text-2xl 2xl:font-bold flex justify-center text-center items-center ${
              list.id === 1
                ? "col-span-3 font-bold border-t-none p-4 text-md md:text-lg 2xl:text-4xl"
                : "col-span-3 cursor-pointer col-span-1 md:col-span-1 hover:bg-[#1f2937]/30"
            }`}
          >
            {list.name}
          </a>
        ))}
      </div>

      <div className="absolute gradient w-80 h-80 rounded-full -top-36 -left-36 blur-2xl z-10" />
    </div>
  );
};

