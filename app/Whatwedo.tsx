import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Wall.jsx'
import Image from 'next/image'

export const Whatwedo: React.FC = () => {
  return (
    <>
      <div className="flex-1 flex justify-center items-center h-full w-full overflow-hidden ">
          <Canvas >
            <Model />
            <OrbitControls />
          </Canvas>
      </div>

      <div className="flex-1 flex justify-between items-center z-50 text-sm md:text-md xl:text-3xl">
        <div className=" flex-1 h-full flex justify-center items-center w-full">
          <div className="text-left flex grid grid-cols-1 w-full md:grid-cols-3 lg:grid-cols-1 lg:divide-y lg:divide-x-0  md:divide-x divide-y md:divide-y-0 divide-dashed">
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
        <div className=" flex-1 h-full hidden lg:flex justify-center items-center p-4 w-full">
          <div className='relative rounded-lg overflow-hidden '>
            <Image placeholder="blur" loading="lazy" blurDataURL="/paris.jpeg" alt="people" src="/paris.jpeg" width="1000" height="1000"/>
            <div className="absolute bg-[#121212]/80 top-0 left-0 right-0 bottom-0"/>
            <div className="absolute cardgradient w-60 h-60 rounded-full -top-20 -left-20 blur-2xl z-10" />
            <div className="absolute top-5 right-5 rounded-full border text-[0.5rem] w-20">Multiple projects</div>
            <div className="absolute bottom-5 left-5 flex flex-col gap-2 w-full items-start">
              <h1 className="font-bold text-2xl ">50+ PROJECT DONE</h1>
              <a href="https://google.com" target="_blank" className="bg-white rounded-full text-[#121212] text-[0.5rem] w-36 font-bold border-2 border-white hover:border-white hover:bg-transparent hover:text-white cursor-pointer duration-300">See Projects</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute gradient w-80 h-80 rounded-full bottom-0 right-0 blur-2xl z-10" />
    </>
  );
};

