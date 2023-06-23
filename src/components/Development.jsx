import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Mac from './Mac'

const Development = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Mac />
      </Stage>

      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Development