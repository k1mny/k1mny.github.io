import { Image, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { FC, useRef } from 'react';

const Photos: FC = () => {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef<THREE.Group>(null!);
  useFrame(() => {
    // group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    // group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3;
    // group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    // group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1;
    // group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3;
    group.current.children[4].position.x = (data.range(2 / 3, 3 / 3) * width) / 3;
  });
  return (
    <group ref={group}>
      <Image
        alt='main monochrome building'
        position={[0, (height * 1) / 15, 0]}
        scale={[width, (height * 2) / 3, 1]}
        url='/photos/R0000332.jpg'
      />
      <Image
        alt='clouded cranes'
        position={[Math.min(6, width / 3), -height / 2, 1]}
        scale={[(width * 3) / 5, height / 2 + 2, 1]}
        url='/photos/R0000147.jpg'
      />
      <Image
        alt='monochrome stair pattern'
        position={[0, -height, -2]}
        scale={[width, 10, 1]}
        url='/photos/R0000167-9.jpg'
      />
      <Image
        alt='simple monochrome apartment'
        position={[-width / 3, -height / 3 - 3, 3]}
        scale={[width / 4, 8, 1]}
        url='/photos/R0000242.jpg'
      />
      <Image
        alt='monochrome electric wires'
        position={[-1, -height * 1.5, 1]}
        scale={[(width * 2) / 3, 10, 1]}
        url='/photos/R0000322.jpg'
      />
      {/* <Image position={[0, -height * 1.0, -25]} scale={[1.5, 3, 1]} url='/photos/R0000332.jpg' /> */}
    </group>
  );
};

export default Photos;
