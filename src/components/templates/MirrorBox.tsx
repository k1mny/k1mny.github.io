import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { FC, useRef } from 'react';
import MagicMirror from '../molecules/MagicMirror';
import { Box, ScrollControls, useScroll } from '@react-three/drei';
import Text from '../molecules/Text';

const MirrorBox: FC = () => {
  const ref = useRef<THREE.Group>(null!);
  const scroll = useScroll();
  const { width } = useThree((state) => state.viewport);
  const size = width / 3;

  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 4, 1);
    const r2 = scroll.range(1 / 4, 2 / 4);
    const r3 = scroll.range(2 / 4, 3 / 4);
    const r4 = scroll.range(3 / 4, 4 / 4);

    ref.current.rotation.y = THREE.MathUtils.damp(
      ref.current.rotation.y,
      ((Math.PI * 3) / 2) * r1,
      4,
      delta,
    );
  });
  return (
    <group ref={ref}>
      <MagicMirror
        position={[0, 0, size / 2] as unknown as THREE.Vector3}
        rotation={[0, 0, 0] as unknown as THREE.Euler}
        size={size}
      >
        <color attach='background' args={['#ffffff']} />
        <Text
          position={new THREE.Vector3(0, 0, 0)}
          rotation={new THREE.Euler(0, 0, 0)}
          size={size / 40}
        >
          kimny
        </Text>
      </MagicMirror>
      <MagicMirror
        position={[size / 2, 0, 0] as unknown as THREE.Vector3}
        rotation={[0, Math.PI / 2, 0] as unknown as THREE.Euler}
        size={size}
      >
        <color attach='background' args={['#0000ff']} />
        <Box />
      </MagicMirror>
      <MagicMirror
        position={[0, 0, -size / 2] as unknown as THREE.Vector3}
        rotation={[0, Math.PI, 0] as unknown as THREE.Euler}
        size={size}
      >
        <color attach='background' args={['#ff0000']} />
        <Box />
      </MagicMirror>
      <MagicMirror
        position={[-size / 2, 0, 0] as unknown as THREE.Vector3}
        rotation={[0, -Math.PI / 2, 0] as unknown as THREE.Euler}
        size={size}
      >
        <color attach='background' args={['#00ff00']} />
        <Box />
      </MagicMirror>
    </group>
  );
};

export default MirrorBox;
