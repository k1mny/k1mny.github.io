import { SpotLight, useDepthBuffer, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { FC, useRef } from 'react';

const Lights: FC = () => {
  const depthBuffer = useDepthBuffer({ size: 256 });
  const { width, height } = useThree((state) => state.viewport);

  return (
    <>
      {/* Purple */}
      <SpotLight
        penumbra={0.5}
        depthBuffer={depthBuffer}
        position={[-width / 2, 10, 10]}
        intensity={50}
        angle={Math.PI / 2}
        distance={100}
        color='#f0f0f0'
        castShadow
      />
    </>
  );
};

export default Lights;
