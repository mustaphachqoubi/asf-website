import { FiMenu } from 'react-icons'

const navList = ["Amis sans frontieres", "Home", "What we do", "Contact Us"];

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 text-white h-40 sm:h-auto">

      <div className="grid grid-cols-3 w-full place-content-center z-50 ">
        {navList.map((list, index) => (
          <div
            key={index}
            className={`border-b-2 border-white p-5 flex justify-center text-center items-center ${
              index === 0
                ? "col-span-3 font-bold text-lg border-t-none"
                : "col-span-3 cursor-pointer col-span-1 md:col-span-3 lg:col-span-1 text-sm md:text-lg hover:bg-[#1f2937]/30"
            }`}
          >
            {list}
          </div>
        ))}
      </div>


  


            <div className="absolute gradient w-80 h-80 rounded-full -top-36 -left-36 blur-2xl z-10" />

    </div>
  );
};


{
  /*
       <div className="flex sm:hidden z-50 my-4 justify-end w-full cursor-pointer">
        <div className="border-2 hover:border-4 border-white rounded-lg h-12 w-12 flex justify-center items-center">
          =
        </div>
      </div>
   */
}
