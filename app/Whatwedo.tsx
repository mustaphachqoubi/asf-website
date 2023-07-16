import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const Whatwedo = () => {
  return (
    <>
      <div className="flex-1 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex-1 h-full flex justify-center items-center w-full">
          one
        </div>
        <div className=" flex-1 h-full flex justify-center items-center w-full ">
          <div className="flex grid grid-cols-[153px_30px_30px] w-full h-full md:grid-cols-1 divide-x md:divide-x-0 md:divide-y divide-dashed">
            <div className="">
              <div className="md:h-full md:w-5 ">
                <div className="border border-white rounded-full h-5 w-5 text-sm flex justify-center items-center ">
                  <AiOutlineArrowLeft />
                </div>
              </div>
            </div>
            <div className=""> 
              <div className="md:h-full md:w-5 ">
                <div className="border border-white rounded-full h-5 w-5 text-sm flex justify-center items-center ">
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
            <div className=""> 
              <div className="md:h-full md:w-5 ">
                <div className="border border-white rounded-full h-5 w-5 text-sm flex justify-center items-center ">
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>          

          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-between items-center z-50">
        <div className=" flex-1 h-full flex justify-center items-center w-full">
          <div className="flex grid grid-cols-1 w-full h-full md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-dashed">
            <div>two</div>
            <div>two</div>
            <div>two</div>
          </div>
        </div>
        <div className=" flex-1 h-full flex justify-center items-center w-full">
          one
        </div>
      </div>
      <div className="absolute gradient w-80 h-80 rounded-full bottom-0 right-0 blur-2xl z-10" />
    </>
  );
};
