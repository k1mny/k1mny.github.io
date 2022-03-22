import { useRef, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBounds } from '@react-three/drei';
import * as THREE from 'three';

const color = new THREE.Color();

// This component wraps children in a group with a click handler
// Clicking any object will refresh and fit bounds
export default function SelectToZoom({ children }) {
  const api = useBounds();
  const group = useRef();
  const [hovered, setHovered] = useState();
  const [clicked, setClicked] = useState();
  useFrame(() => {
    group.current.children.forEach((child) => {
      const currentColor =
        clicked === child.material.name
          ? 'gold'
          : hovered === child.material.name
          ? 'tomato'
          : 'white';
      child.material.color.lerp(
        color.set(currentColor).convertSRGBToLinear(),
        hovered ? 0.1 : 0.05,
      );
    });
  });

  const onPointerOverHandler = useCallback((e) => {
    e.stopPropagation();
    setHovered(e.object.material.name);
  }, []);
  const onPointerOutHandler = useCallback((e) => {
    e.stopPropagation();
    setHovered(null);
  }, []);
  const onPointerMissedHandler = useCallback((e) => {
    if (e.button === 0) {
      api.refresh().fit();
      setClicked(null);
    }
  }, []);
  const onClickHandler = useCallback((e) => {
    e.stopPropagation();
    if (e.delta <= 2) {
      api.refresh(e.object).fit();
      setClicked(e.object.material.name);
    }
  }, []);
  return (
    <group
      ref={group}
      onPointerOver={onPointerOverHandler}
      onPointerOut={onPointerOutHandler}
      onPointerMissed={onPointerMissedHandler}
      onClick={onClickHandler}
    >
      {children}
    </group>
  );
}
