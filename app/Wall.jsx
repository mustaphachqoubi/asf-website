import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/wall.glb')
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.005; 
  });
  
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group position={[0, -1.116, 0.989]} rotation={[2.984, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.Stereo_textured_mesh_Material0_0.geometry} material={materials.Material0} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material0_0001.geometry} material={materials.Material0} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material0_0002.geometry} material={materials.Material0} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material0_0003.geometry} material={materials.Material0} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material0_0004.geometry} material={materials.Material0} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material0_0005.geometry} material={materials.Material0} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material0_0006.geometry} material={materials.Material0} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material0_0007.geometry} material={materials.Material0} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material1_0.geometry} material={materials.Material1} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material1_0001.geometry} material={materials.Material1} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material1_0002.geometry} material={materials.Material1} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material1_0003.geometry} material={materials.Material1} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material1_0004.geometry} material={materials.Material1} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material1_0005.geometry} material={materials.Material1} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material1_0006.geometry} material={materials.Material1} />
          <mesh geometry={nodes.Stereo_textured_mesh_Material1_0007.geometry} material={materials.Material1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/wall.glb')
