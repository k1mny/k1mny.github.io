import { Html, OrbitControls, SpotLight, useDepthBuffer } from '@react-three/drei';
import { Debug, Physics } from '@react-three/cannon';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { FC, Ref, useState, Suspense, useRef, useEffect } from 'react';

import * as THREE from 'three';
import Floor from './Floor';
import Text from './Text';
import Postprocessing from './PostProcessing';

const InsideCanvas: FC = () => {
  const { width } = useThree((state) => state.viewport);
  const depthBuffer = useDepthBuffer({ size: 256 });

  return (
    <>
      {/* Green */}
      <SpotLight
        penumbra={0.8}
        depthBuffer={depthBuffer}
        position={[-10, 10, 15]}
        intensity={20}
        angle={-1.0}
        distance={30}
        color='#a0cd9e'
        castShadow
      />
      {/* Purple */}
      <SpotLight
        penumbra={0.5}
        depthBuffer={depthBuffer}
        position={[10, 10, -15]}
        intensity={50}
        angle={1.0}
        distance={30}
        color='#5f3261'
        castShadow
      />
      <Text position={new THREE.Vector3(0, 0, 0)} size={width / 80}>
        KIMNY
      </Text>
      <Floor />
      <Postprocessing />
    </>
  );
};

const MainCanvas: FC = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 20],
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
      {/* <pointLight position={[40, 40, 40]} /> */}
      <Suspense fallback={<Html center>loading...</Html>}>
        <InsideCanvas />
      </Suspense>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default MainCanvas;
