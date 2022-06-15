import { FC, Ref, useState } from "react"

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Text } from './Text'
import * as THREE from "three"

function Jumbo() {
  const ref = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3
  })
  return (
    <group ref={ref}>
      <Text hAlign="right" position={new THREE.Vector3(-12, 6.5, 0)} >KIMNY</Text>
      <Text hAlign="right" position={new THREE.Vector3(-12, 0, 0)} >KIMNY</Text>
      <Text hAlign="right" position={new THREE.Vector3(-12, -6.5, 0)} >KIMNY</Text>
    </group>
  )
}

export const MainCanvas: FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 135] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Jumbo />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}