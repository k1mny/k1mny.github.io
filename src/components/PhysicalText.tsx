import * as THREE from 'three';
import React, { useMemo, useRef, useLayoutEffect, FC } from 'react';
import fontUrl from '../../assets/fonts/Melete_Medium_Regular.json';
import { Text3D } from '@react-three/drei';
import { Vector3 } from 'three';
import { useBox } from '@react-three/cannon';
import Charactor from './atoms/PhysicalCharactor';

type props = {
  children: string;
  hAlign?: string;
  vAlign?: string;
  size?: number;
  color?: string;
  position: Vector3;
};

const PhysicalText: FC<props> = ({
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

  // const mesh = useRef<THREE.Mesh>(null!);
  // const [ref] = useBox(() => ({ mass: 1 }), mesh);
  // useLayoutEffect(() => {
  //   const size = new THREE.Vector3();
  //   mesh.current.geometry.computeBoundingBox();
  //   mesh.current.geometry.boundingBox?.getSize(size);
  //   mesh.current.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x;
  //   mesh.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y;
  // }, [children, hAlign, vAlign]);
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      {children.split('').map((c, idx) => {
        return(<Charactor key={idx} char={c} fontUrl={fontUrl as unknown as string} size={size*5} position={new THREE.Vector3((idx - children.length/2) * 100, 0, 0)} />)
      })}
    </group>
  );
};

export default PhysicalText;