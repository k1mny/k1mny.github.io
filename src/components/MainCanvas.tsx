import { FC, Ref, useState } from "react"

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from './Text'
import * as THREE from "three"

function Jumbo() {
  const ref = useRef<THREE.Group>(null!)
  // useFrame(({ clock }) => {
  //   ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3
  // })
  return (
    <group ref={ref}>
      <Text position={new THREE.Vector3(0, 0, 0)} >KIMNY</Text>
    </group>
  )
}

export const MainCanvas: FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 50] }}>
      <color attach="background" args={["black"]} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Jumbo />
      </Suspense>
    </Canvas>
  )
}