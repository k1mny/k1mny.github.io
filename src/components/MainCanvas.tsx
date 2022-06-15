import { Canvas, useFrame } from '@react-three/fiber';
import React, { FC, Ref, useState, Suspense, useRef, useEffect } from 'react';

import * as THREE from 'three';
import Text from './Text';

function Jumbo() {
  const ref = useRef<THREE.Group>(null!);
  // useFrame(({ clock }) => {
  //   ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3
  // })
  return (
    <group ref={ref}>
      <Text position={new THREE.Vector3(0, 0, 0)}>KIMNY</Text>
    </group>
  );
}

const MainCanvas: FC = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 50],
        fov: 90,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 2000,
      }}
      dpr={window.devicePixelRatio}
      shadows
    >
      <color attach='background' args={['black']} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Jumbo />
      </Suspense>
    </Canvas>
  );
};

export default MainCanvas;