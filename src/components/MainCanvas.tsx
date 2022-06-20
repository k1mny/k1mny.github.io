import { Html, Image, OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { FC, Suspense, useCallback } from 'react';

import * as THREE from 'three';
import Floor from './Floor';
import Text from './Text';
import Postprocessing from './PostProcessing';
import Lights from './Lights';
import { Euler, Spherical, Vector3 } from 'three';
import useRefs from 'react-use-refs';
import Photos from './Photos';

const InsideCanvas: FC = () => {
  const { width } = useThree((state) => state.viewport);
  const scroll = useScroll();

  const [scene, name, photo, twitter] = useRefs<THREE.Group>(null);

  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 2, 2 / 2);
    if (scene.current) {
      scene.current.position.y = r1 * 30;
    }
  });

  return (
    <>
      <group ref={scene} position={new THREE.Vector3(0, 0, 0)}>
        <Lights />

        <Text
          ref={name}
          position={new THREE.Vector3(0, 0, 2)}
          rotation={new Euler(0, 0, 0)}
          size={width / 80}
        >
          kimny
        </Text>
        <Text
          ref={photo}
          position={new THREE.Vector3(0, -15, 2)}
          rotation={new Euler(0, 0, 0)}
          size={width / 80}
        >
          Photo
        </Text>
        <Text
          ref={twitter}
          link={'https://twitter.com/k1mny'}
          position={new THREE.Vector3(0, -30, 2)}
          rotation={new Euler(0, 0, 0)}
          size={width / 80}
        >
          Twitter
        </Text>
        <Photos />
      </group>
      {/* <Floor /> */}
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
      <ScrollControls pages={3}>
        <color attach='background' args={['#0f0f0f']} />
        <Suspense fallback={<Html center>loading...</Html>}>
          <InsideCanvas />
        </Suspense>
      </ScrollControls>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default MainCanvas;
