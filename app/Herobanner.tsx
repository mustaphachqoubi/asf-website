import ReactPlayer from 'react-player';

export const Herobanner = () => {

  return (
    <div className="leading-[3rem] md:leading-[5rem] lg:leading-[6rem] p-8 text-white text-2xl sm:text-4xl md:text-6xl lg:text-8xl 2xl:text-9xl font-bold tracking-wider ">
      <div>
        Uniting People in{" "}
        <div className="flex items-center justify-center tracking-widest ">
          S
          <div className="relative overflow-hidden flex items-center justify-center bg-hidden border-4 border-white w-36 sm:h-16 h-10 md:w-32 md:h-16 rounded-full">
            
            <ReactPlayer 
              url="https://youtu.be/UvWfDw6Rnww" 
              playing="true"
              muted="true"
              loop="true"
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
