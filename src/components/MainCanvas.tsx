import { Html } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { FC, Ref, useState, Suspense, useRef, useEffect } from 'react';

import * as THREE from 'three';
import Floor from './Floor';
import Text from './Text';
import PhysicalText from './PhysicalText';

const InsideCanvas: FC = () => {
  const { width } = useThree(state => state.viewport);
  return (
    <>
      <PhysicalText position={new THREE.Vector3(0, 0, 0)} size={width / 80}>KIMNY</PhysicalText>
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
        fov: 50,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 2000,
      }}
      dpr={window.devicePixelRatio}
      shadows
    >
      <color attach='background' args={['black']} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={<Html center>loading...</Html>}>
        <Physics
          gravity={[0, -50, 0]}
          defaultContactMaterial={{ restitution: 0.7, friction: 0.5 }}
        >
          <InsideCanvas />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default MainCanvas;