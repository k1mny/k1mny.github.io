import * as THREE from 'three';
import { SpotLight, useDepthBuffer, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { FC, useRef } from 'react';

interface LightsProps {
  position: THREE.Vector3;
}
const Lights: FC<LightsProps> = ({ position }) => {
  const depthBuffer = useDepthBuffer({ size: 256 });
  const scroll = useScroll();
  const ref = useRef<THREE.SpotLight>(null!);

  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 4, 1 / 4);

    ref.current.position.x = THREE.MathUtils.damp(
      ref.current.position.x,
      (r1 - 0.5) * position.x,
      4,
      delta,
    );
  });

  return (
    <>
      {/* Purple */}
      <SpotLight
        ref={ref}
        penumbra={0.5}
        depthBuffer={depthBuffer}
        position={position}
        intensity={150}
        angle={Math.PI / 3}
        distance={100}
        color='#c1c2e2'
        castShadow
      />
    </>
  );
};

export default Lights;
