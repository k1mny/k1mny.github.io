import * as THREE from 'three';
import { FC, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { proxy, useSnapshot } from 'valtio';
import { state } from '../state';

const damp = THREE.MathUtils.damp;

interface ItemType {
  index: number;
  position: [x: number, y: number, z: number];
  scale: [x: number, y: number];
  c?: THREE.Color;
  url: string;
}

export const Item: FC<ItemType> = ({ index, position, scale, c = new THREE.Color(), ...props }) => {
  const ref = useRef<any>(null); // typeof Image not work
  const scroll = useScroll();
  const { clicked, urls } = useSnapshot(state);
  const [hovered, hover] = useState(false);
  const click = () => (state.clicked = index === clicked ? null : index);
  const over = () => hover(true);
  const out = () => hover(false);
  useFrame((state, delta) => {
    if (ref.current) {
      const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length);
      ref.current.material.scale[1] = ref.current.scale.y = damp(
        ref.current.scale.y,
        clicked === index ? 5 : 4 + y,
        8,
        delta,
      );
      ref.current.material.scale[0] = ref.current.scale.x = damp(
        ref.current.scale.x,
        clicked === index ? 4.7 : scale[0],
        6,
        delta,
      );
      if (clicked !== null && index < clicked)
        ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta);
      if (clicked !== null && index > clicked)
        ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta);
      if (clicked === null || clicked === index)
        ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta);
      ref.current.material.grayscale = damp(
        ref.current.material.grayscale,
        hovered || clicked === index ? 0 : Math.max(0, 1 - y),
        6,
        delta,
      );
      ref.current.material.color.lerp(
        c.set(hovered || clicked === index ? 'white' : '#aaa'),
        hovered ? 0.3 : 0.1,
      );
    }
  });
  return (
    <Image
      ref={ref}
      {...props}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
    />
  );
};
