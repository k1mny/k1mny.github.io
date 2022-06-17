import * as THREE from 'three';
import React, { useMemo, useRef, useLayoutEffect, FC } from 'react';
import fontUrl from '../../assets/fonts/Melete_Medium_Regular.json';
import { Text3D, useTexture } from '@react-three/drei';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

type props = {
  children: string;
  hAlign?: string;
  vAlign?: string;
  size?: number;
  color?: string;
  position: Vector3;
};

const Text: FC<props> = ({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1.5,
  color = '#000000',
  ...props
}) => {
  const config = useMemo(
    () => ({
      size: 40,
      height: 30,
      curveSegments: 32,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [],
  );

  const [normal] = useTexture([`/textures/pexels-scott-webb-2117937.jpg`]);

  const mesh = useRef<THREE.Mesh>(null!);
  const ref = useRef<THREE.Group>(null!);
  useLayoutEffect(() => {
    const size = new THREE.Vector3();
    mesh.current.geometry.computeBoundingBox();
    mesh.current.geometry.boundingBox?.getSize(size);
    mesh.current.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x;
    mesh.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y;
  }, [children, hAlign, vAlign]);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <group ref={ref} {...props} scale={[0.1 * size, 0.1 * size, 0.05]}>
      <Text3D ref={mesh} font={fontUrl as unknown as string} {...config}>
        {children}
        <meshPhongMaterial color={'white'} normalMap={normal} />
      </Text3D>
    </group>
  );
};

export default Text;
