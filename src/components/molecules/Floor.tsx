import { MeshReflectorMaterial, useTexture } from '@react-three/drei';
import { FC } from 'react';

const Floor: FC = () => {
  const [roughness] = useTexture([`/textures/pexels-scott-webb-2117937.jpg`]);

  return (
    <mesh position-y={-3} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      <planeGeometry args={[200, 200, 100, 100]} />
      <MeshReflectorMaterial
        resolution={2048}
        mirror={1}
        blur={[1000, 500]}
        mixBlur={10}
        mixStrength={1.5}
        metalness={1}
        roughnessMap={roughness}
        color='#ffffff'
      />
    </mesh>
  );
};

export default Floor;
