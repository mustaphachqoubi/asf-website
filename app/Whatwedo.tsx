import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const Whatwedo = () => {
  return (
    <>
      <div className="flex-1 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex-1 h-full flex justify-center items-center w-full">
          one
        </div>
      </div>

      <div className="flex-1 flex justify-between items-center z-50">
        <div className=" flex-1 h-full flex justify-center items-center w-full">
          <div className="text-left flex grid grid-cols-1 w-full h-full md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-dashed">
            <div className="p-2"> 
              Our actions create meaningful connections between people through solidarity and mutual support.
            </div>
            <div className="p-2"> 
              We facilitate volunteering opportunities to help communities in need, fostering empathy and love.
            </div>
            <div className="p-2"> 
              Together, we build a better world by providing food, shelter, and education to the less fortunate.
            </div>
          </div>
        </div>
        <div className=" flex-1 h-full hidden md:flex justify-center items-center w-full">
          one
        </div>
      </div>
      <div className="absolute gradient w-80 h-80 rounded-full bottom-0 right-0 blur-2xl z-10" />
    </>
  );
};
