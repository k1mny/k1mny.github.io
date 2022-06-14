import { FC, Ref, useState } from "react"

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
// import { Text } from './Text'
import * as THREE from "three"

// function Jumbo() {
//   const ref = useRef<THREE.Group>(null!)
//   useFrame(({ clock }) => {
//     ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3
//   })
//   return (
//     <group ref={ref}>
//       <Text hAlign="right" position={new THREE.Vector3(-12, 6.5, 0)} >KIMNY</Text>
//       <Text hAlign="right" position={new THREE.Vector3(-12, 0, 0)} >KIMNY</Text>
//       <Text hAlign="right" position={new THREE.Vector3(-12, -6.5, 0)} >KIMNY</Text>
//     </group>
//   )
// }
function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export const MainCanvas: FC = () => {
  return (
    // <Canvas camera={{ position: [0, 0, 35] }}>
    //   <ambientLight intensity={2} />
    //   <pointLight position={[40, 40, 40]} />
    //   <Suspense fallback={null}>
    //     {/* <Jumbo /> */}
    //     <Box />
    //     <Environment preset="city" />
    //   </Suspense>
    // </Canvas>
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}