import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { FC, Ref, useState, Suspense, useRef, useEffect } from 'react';

import * as THREE from 'three';
import Floor from './Floor';
import Text from './Text';

const InsideCanvas: FC = () => {
  const { width } = useThree(state => state.viewport);
  return (
    <>
    <Text position={new THREE.Vector3(0, 0, 0)} size={width / 80}>KIMNY</Text>
    <Floor />
    </>
  )
}

const MainCanvas: FC = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 30],
        rotation: [0, 0, 0],
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
      <Suspense fallback={<div>loading...</div>}>
        <InsideCanvas />
      </Suspense>
    </Canvas>
  );
};

export default MainCanvas;