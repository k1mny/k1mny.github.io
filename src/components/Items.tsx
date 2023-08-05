import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { proxy, useSnapshot } from 'valtio';
import { state } from '../state';
import { Minimap } from './Minimap';
import { Item } from './Item';

export const Items = ({ w = 0.7, gap = 0.15 }) => {
  const { urls } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;
  return (
    <ScrollControls horizontal damping={0.1} pages={(width - xW + urls.length * xW) / width}>
      <Minimap />
      <Scroll>
        {
          urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4]} url={url} />) /* prettier-ignore */
        }
      </Scroll>
    </ScrollControls>
  );
};
