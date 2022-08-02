import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { FC, useRef } from 'react';
import MagicMirror from '../molecules/MagicMirror';
import { Box } from '@react-three/drei';

const MirrorBox: FC = () => {
  const ref = useRef<THREE.Group>(null!);
  useFrame((state, delta) => {
    // const r1 = scroll.range(0 / 2, 2 / 2);
    ref.current.rotation.y = ref.current.rotation.y + 0.001;
  });
  return (
    <group ref={ref}>
      <MagicMirror
        position={[0, 2.5, 5] as unknown as THREE.Vector3}
        rotation={[0, 0, 0] as unknown as THREE.Euler}
      >
        <color attach='background' args={['#ffffff']} />
        <Box />
      </MagicMirror>
      <MagicMirror
        position={[5, 2.5, 0] as unknown as THREE.Vector3}
        rotation={[0, Math.PI / 2, 0] as unknown as THREE.Euler}
      >
        <color attach='background' args={['#0000ff']} />
        <Box />
      </MagicMirror>
      <MagicMirror
        position={[0, 2.5, -5] as unknown as THREE.Vector3}
        rotation={[0, Math.PI, 0] as unknown as THREE.Euler}
      >
        <color attach='background' args={['#ff0000']} />
        <Box />
      </MagicMirror>
      <MagicMirror
        position={[-5, 2.5, 0] as unknown as THREE.Vector3}
        rotation={[0, -Math.PI / 2, 0] as unknown as THREE.Euler}
      >
        <color attach='background' args={['#00ff00']} />
        <Box />
      </MagicMirror>
    </group>
  );
};

export default MirrorBox;
