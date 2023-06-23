/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 .\mac.gltf --transform
Author: Imagigoo (https://sketchfab.com/Imagigoo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-mac-book-pro-laptop-344a472d2e3e45f9af68079fc0336d17
Title: (Free) Mac Book Pro - Laptop
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/mac-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube010_black_0.geometry} material={materials.black} position={[-0.392, 0.018, -0.188]} rotation={[-1.57, 0, 0]} scale={[0.006, 0.001, 0.003]} />
      <mesh geometry={nodes.Cube011_key_0.geometry} material={materials.material} position={[0.14, 0.027, -0.167]} rotation={[-Math.PI / 2, 0, 0]} scale={0.259} />
      <mesh geometry={nodes.Cube012_key002_0.geometry} material={materials['key.002']} position={[0.006, 0.027, -0.093]} rotation={[-Math.PI / 2, 0, 0]} scale={0.259} />
      <mesh geometry={nodes.Cube013_body_0.geometry} material={materials.body} position={[-0.4, 0.026, -0.213]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.001, 0.001, 0]} />
      <mesh geometry={nodes.Cube014_black001_0.geometry} material={materials['black.001']} position={[0.321, 0.026, -0.213]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.001, 0.001, 0]} />
      <mesh geometry={nodes.Cube018_black003_0.geometry} material={materials['black.003']} position={[-0.393, 0.019, -0.183]} rotation={[-1.57, 0, 0]} scale={[0.006, 0.008, 0.004]} />
      <mesh geometry={nodes.Cube021_Dark_0.geometry} material={materials.Dark} position={[0, 0.017, -0.003]} rotation={[-1.586, 0, 0]} />
      <mesh geometry={nodes.Cube021_Material028_0.geometry} material={materials['Material.028']} position={[0, 0.017, -0.003]} rotation={[-1.586, 0, 0]} />
      <mesh geometry={nodes.Cube016_screen_0.geometry} material={materials.screen} position={[0, 0.014, -0.281]} rotation={[-0.027, 0, 0]} scale={0.274} />
      <mesh geometry={nodes.Cube016_dark_0.geometry} material={materials.dark} position={[0, 0.014, -0.281]} rotation={[-0.027, 0, 0]} scale={0.274} />
      <mesh geometry={nodes.Cube016_glass002_0.geometry} material={materials['glass.002']} position={[0, 0.014, -0.281]} rotation={[-0.027, 0, 0]} scale={0.274} />
      <mesh geometry={nodes.Cube016_Material024_0.geometry} material={materials['Material.024']} position={[0, 0.014, -0.281]} rotation={[-0.027, 0, 0]} scale={0.274} />
      <mesh geometry={nodes.Cube016_glass003_0.geometry} material={materials['glass.003']} position={[0, 0.014, -0.281]} rotation={[-0.027, 0, 0]} scale={0.274} />
      <mesh geometry={nodes['Cube016_Apple-logo_0'].geometry} material={materials['Apple-logo']} position={[0, 0.014, -0.281]} rotation={[-0.027, 0, 0]} scale={0.274} />
      <mesh geometry={nodes.Text003_Material029_0.geometry} material={materials['Material.029']} position={[0.003, 0.043, -0.282]} rotation={[-0.027, 0, 0]} scale={[0.011, 0.013, 0.012]} />
    </group>
  )
}

useGLTF.preload('/mac-transformed.glb')
