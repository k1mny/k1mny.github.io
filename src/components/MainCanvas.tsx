import { Html, OrbitControls, ScrollControls } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { FC, Ref, useState, Suspense, useRef, useEffect } from 'react';

import * as THREE from 'three';
import Floor from './Floor';
import Text from './Text';
import Postprocessing from './PostProcessing';
import Lights from './Lights';

const InsideCanvas: FC = () => {
  const { width } = useThree((state) => state.viewport);

  return (
    <>
      <Lights />
      <Text position={new THREE.Vector3(0, 0, 0)} size={width / 80}>
        kimny
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
      <ScrollControls pages={2}>
        <color attach='background' args={['black']} />
        {/* <pointLight position={[40, 40, 40]} /> */}
        <Suspense fallback={<Html center>loading...</Html>}>
          <InsideCanvas />
        </Suspense>
      </ScrollControls>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default MainCanvas;
