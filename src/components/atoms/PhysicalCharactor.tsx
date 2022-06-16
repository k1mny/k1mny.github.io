import { useBox } from '@react-three/cannon';
import { Text3D } from '@react-three/drei';
import { FC, RefObject, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Vector3 } from 'three';

type Props = {
  children: string;
  fontUrl: string;
  position: Vector3;
  size?: number;
  color?: string;
};

const PhysicalCharactor: FC<Props> = ({
  children,
  fontUrl,
  size = 1.5,
  color = 'white',
  position,
  ...props
}) => {
  const config = useMemo(
    () => ({
      size: 400,
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

  const initPosition: [x: number, y: number, z: number] = [0, 15, 0];
  const mesh = useRef<THREE.Mesh>(null);
  const [ref, api] = useBox(() => ({ mass: 1, position: initPosition, args: [1, 1, 1] }));
  const sizeRef = useRef<THREE.Vector3>(null!);
  useLayoutEffect(() => {
    const size = new THREE.Vector3();
    if (mesh.current) {
      mesh.current.geometry.computeBoundingBox();
      mesh.current.geometry.boundingBox?.getSize(size);
      mesh.current.position.x = -size.x / 2;
      mesh.current.position.y = -size.y / 2;
      console.log(mesh.current.position);
    }
  }, []);

  return (
    <group ref={ref as React.RefObject<THREE.Group>} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D ref={mesh} font={fontUrl} {...config}>
        {children}
        <meshPhongMaterial color={color} />
      </Text3D>
    </group>
  );
};

export default PhysicalCharactor;
