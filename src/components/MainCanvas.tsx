import { Html, OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { FC, Suspense, useCallback } from 'react';

import * as THREE from 'three';
import Floor from './Floor';
import Text from './Text';
import Postprocessing from './PostProcessing';
import Lights from './Lights';
import { Euler, Spherical, Vector3 } from 'three';
import useRefs from 'react-use-refs';

const InsideCanvas: FC = () => {
  const { width } = useThree((state) => state.viewport);
  const scroll = useScroll();

  const [scene, name, twitter] = useRefs<THREE.Group>(null);

  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 2, 1 / 2);
    if (scene.current) {
      scene.current.rotation.y = r1 * Math.PI * 2;
    }
  });

  const distanceFromOrigin = 15;
  const center = new Vector3(distanceFromOrigin, 0, 0);

  const thetaToVector3 = useCallback(
    (theta: number): Vector3 => {
      theta += (Math.PI * 3) / 2;
      theta %= Math.PI * 2;
      const p = new Vector3();
      p.setFromSpherical(new Spherical(distanceFromOrigin, Math.PI / 2, theta));
      return p;
    },
    [distanceFromOrigin],
  );

  return (
    <>
      <Lights />
      <group ref={scene} position={center}>
        <Text
          ref={name}
          position={thetaToVector3(0)}
          rotation={new Euler(0, 0, 0)}
          size={width / 80}
        >
          kimny
        </Text>
        <Text
          ref={twitter}
          link={'https://twitter.com/k1mny'}
          position={thetaToVector3(Math.PI)}
          rotation={new Euler(0, Math.PI, 0)}
          size={width / 80}
        >
          Twitter
        </Text>
      </group>
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
        <Suspense fallback={<Html center>loading...</Html>}>
          <InsideCanvas />
        </Suspense>
      </ScrollControls>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default MainCanvas;
