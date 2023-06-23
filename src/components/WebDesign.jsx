import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import ReactFile from './ReactFile'

const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <ReactFile />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default WebDesign