import { SpotLight, useDepthBuffer } from '@react-three/drei';
import { FC } from 'react';

const Lights: FC = () => {
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
    </>
  );
};

export default Lights;
