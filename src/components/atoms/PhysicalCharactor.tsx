import { useBox } from "@react-three/cannon";
import { Text3D } from "@react-three/drei";
import { FC, useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from 'three';
import { Vector3 } from "three";

type Props = {
  char: string;
  fontUrl: string;
  position: Vector3;
  size?: number;
  color?: string;
};

const PhysicalCharactor: FC<Props> = ({char, fontUrl, size = 1.5,
  color = 'white', ...props}) => {
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

  const mesh = useRef<THREE.Mesh>(null);
  const [ref] = useBox(() => ({ mass: 1, position: [0, 10, 0] }), mesh);
  useLayoutEffect(() => {
    const size = new THREE.Vector3();
    if (mesh.current) {
      mesh.current.geometry.computeBoundingBox();
      mesh.current.geometry.boundingBox?.getSize(size);
      mesh.current.position.x = -size.x / 2;
      mesh.current.position.y = -size.y / 2;
    }
  }, [mesh]);

  return(
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D ref={ref} font={fontUrl} {...config}>
        {char}
        <meshPhongMaterial color={color} />
      </Text3D>
    </group>
  )
}

export default PhysicalCharactor;