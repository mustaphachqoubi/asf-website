export const Herobanner = () => {
  return (
    <div className="md:mb-20 p-8 text-white text-4xl md:text-7xl lg:text-8xl font-bold tracking-wider leading-normal sm:leading-relaxed md:leading-[6rem] lg:leading-[7.5rem]">
      <div>
        Uniting People in{" "}
        <div className="flex items-center justify-center tracking-widest ">
          S
          <div className="relative overflow-hidden flex items-center justify-center bg-hidden border-4 border-white w-36 sm:h-16 h-10 md:w-32 md:h-16 rounded-full">
            <video
              src="https://www.youtube.com/watch?v=KCFLo5YMj_M"
              autoPlay
              loop
              muted
            />
          </div>
          lidarity
        </div>{" "}
        and Humanity for a Brighter{" "}
        <div className="relative font-serif italic">
          <div className="absolute left-10 right-10 md:left-20 md:left-20 md:right-20 md:right-10 bottom-0 top-0 border border-white rounded-[50%] -rotate-12" />
          Future
        </div>{" "}
      </div>
    </div>
  );
};
