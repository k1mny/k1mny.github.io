import { useFrame, useThree } from '@react-three/fiber';
import { FC } from 'react';
import useRefs from 'react-use-refs';
import * as THREE from 'three';
import Lights from '../atoms/Lights';
import Photos from '../organisms/Photos';
import Text from '../molecules/Text';

const UnsplashPhotos: FC = () => {
  const { width } = useThree((state) => state.viewport);
  // const scroll = useScroll();

  const [scene, twitter, unsplash] = useRefs<THREE.Group>(null);

  useFrame((state, delta) => {
    // const r1 = scroll.range(0 / 2, 2 / 2);
    if (scene.current) {
      // scene.current.position.y = (scene.current.position.y + 0.01) % 30;
    }
  });

  return (
    <>
      <group ref={scene} position={new THREE.Vector3(0, 0, 0)}>
        <Lights />
        <Text
          ref={twitter}
          link={'https://twitter.com/k1mny'}
          position={new THREE.Vector3(0, 0, 0)}
          rotation={new THREE.Euler(0, 0, 0)}
          size={width / 80}
        >
          Twitter
        </Text>
        <Text
          ref={unsplash}
          link={'https://unsplash.com/@kimny'}
          position={new THREE.Vector3(0, -3, 0)}
          rotation={new THREE.Euler(0, 0, 0)}
          size={width / 80}
        >
          Unsplash
        </Text>
        <Photos />
      </group>
      {/* <Floor /> */}
      {/* <Postprocessing /> */}
    </>
  );
};

export default UnsplashPhotos;
