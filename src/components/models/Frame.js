import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

export default function Frame() {
  const texture = useLoader(THREE.TextureLoader, '/icon_rectangle.png');
  return (
    <>
      <mesh scale={[1, 1, 0.05]} position={[0, 1 / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshStandardMaterial map={texture} roughness={1} />
        </mesh>
      </mesh>
    </>
  );
}
