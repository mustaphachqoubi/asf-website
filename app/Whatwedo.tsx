import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import * as THREE from 'three';
import { useRef, useEffect } from 'react'

export const Whatwedo = () => {

  const threed = useRef(null);

useEffect(() => {

const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}

  threed.current.appendChild( renderer.domElement );
}, []);

  return (
    <>
      <div className="flex-1 flex flex-col-reverse md:flex-row justify-between items-center">
        <div ref={threed} className="flex-1 h-full flex justify-center items-center w-full bg-red-500 overflow-hidden"></div>
      </div>

      <div className="flex-1 flex justify-between items-center z-50">
        <div className=" flex-1 h-full flex justify-center items-center w-full">
          <div className="text-left flex grid grid-cols-1 w-full md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-dashed">
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
