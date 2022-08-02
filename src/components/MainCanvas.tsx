import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { FC, Suspense } from 'react';

import Loading from './templates/Loading';
import MirrorBox from './templates/MirrorBox';

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
      <Suspense fallback={<Loading />}>
        <color attach='background' args={['#0f0f0f']} />
        <MirrorBox />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default MainCanvas;
