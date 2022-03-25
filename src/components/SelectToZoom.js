import { useRef, useState, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { useBounds } from '@react-three/drei';
import * as THREE from 'three';
import { useRecoilState } from 'recoil';
import { useClicked } from '../globalStates/globalStates';

const color = new THREE.Color();

const recolorMaterial = (obj, recolor, alpha) => {
  if (obj.type === 'Mesh' && obj.name !== 'fixMaterial') {
    obj.material.color.lerp(color.set(recolor).convertSRGBToLinear(), alpha);
  } else {
    obj.children.forEach((child) => recolorMaterial(child, recolor, alpha));
  }
};

const getTarget = (obj) => {
  let target = obj;
  while (target.name === '' || target.name === 'fixMaterial') {
    target = target.parent;
  }
  return target;
};

// This component wraps children in a group with a click handler
// Clicking any object will refresh and fit bounds
export default function SelectToZoom({ children }) {
  const api = useBounds();
  const group = useRef();
  const [hovered, setHovered] = useState();
  const [clicked, setClicked] = useRecoilState(useClicked);
  useFrame(() => {
    group.current.children.forEach((child) => {
      const currentColor =
        clicked === child.name ? 'gold' : hovered === child.name ? 'tomato' : 'white';
      recolorMaterial(child, currentColor, hovered ? 0.1 : 0.05);
    });
  });

  const onPointerOverHandler = useCallback((e) => {
    e.stopPropagation();
    const target = getTarget(e.object);
    setHovered(target.name);
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
      const target = getTarget(e.object);
      api.refresh(target).fit();
      setClicked(target.name);
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
