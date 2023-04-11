import * as THREE from 'three';
import { PerspectiveCamera, useFBO } from '@react-three/drei';
import { FC, ReactNode, useRef, useState } from 'react';
import { createPortal, useFrame } from '@react-three/fiber';
import { Euler, Vector3 } from 'three';

interface MagicMirrorProps {
  children: ReactNode;
  position: Vector3;
  rotation: Euler;
  size: number;
}

const MagicMirror: FC<MagicMirrorProps> = ({ children, size, ...props }) => {
  const cam = useRef<THREE.Camera>(null!);
  // useFBO creates a WebGL2 buffer for us, it's a helper from the "drei" library
  const fbo = useFBO();
  // The is a separate scene that we create, React will portal into that
  const [scene] = useState(() => new THREE.Scene());
  // Tie this component into the render-loop
  useFrame((state) => {
    // Our portal has its own camera, but we copy the originals world matrix
    cam.current.matrixWorldInverse.copy(state.camera.matrixWorldInverse);
    // Then we set the render-target to the buffer that we have created
    state.gl.setRenderTarget(fbo);
    // We render the scene into it, using the local camera that is clamped to the planes aspect ratio
    state.gl.render(scene, cam.current);
    // And flip the render-target to the default again
    state.gl.setRenderTarget(null);
  });
  return (
    <>
      <mesh {...props}>
        <planeGeometry args={[size, size]} />
        {/* The "mirror" is just a boring plane, but it receives the buffer texture */}
        <meshBasicMaterial map={fbo.texture} />
      </mesh>
      <PerspectiveCamera
        manual
        ref={cam}
        fov={50}
        aspect={1}
        onUpdate={(c) => c.updateProjectionMatrix()}
      />
      {/* This is React being awesome, we portal this components children into the separate scene above */}
      {createPortal(children, scene)}
    </>
  );
};

export default MagicMirror;
