import * as THREE from 'three';
import React, {
  useMemo,
  useRef,
  useLayoutEffect,
  forwardRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import fontUrl from '../../../assets/fonts/Melete_Medium_Regular.json';
import { Text3D, useTexture } from '@react-three/drei';
import { Euler, Vector3 } from 'three';
import { ThreeEvent } from '@react-three/fiber';

type Props = {
  children: string;
  hAlign?: string;
  vAlign?: string;
  size?: number;
  color?: string;
  position: Vector3;
  rotation: Euler;
  link?: string;
};

const Text = forwardRef<THREE.Group, Props>(
  (
    {
      children,
      vAlign = 'center',
      hAlign = 'center',
      size = 1.5,
      color = '#000000',
      link,
      ...props
    },
    ref,
  ) => {
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
    useLayoutEffect(() => {
      const size = new THREE.Vector3();
      mesh.current.geometry.computeBoundingBox();
      mesh.current.geometry.boundingBox?.getSize(size);
      mesh.current.position.x =
        hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x;
      mesh.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y;
    }, [children, hAlign, vAlign]);

    const [hovered, setHovered] = useState(false);

    const onPointerOverHandler = useCallback(
      (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        if (link) {
          setHovered(true);
        }
      },
      [link],
    );
    const onPointerOutHandler = useCallback(
      (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        if (link) {
          setHovered(false);
        }
      },
      [link],
    );
    const onClickHandler = useCallback(
      (e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        if (link) {
          window.open(link, '_blank');
        }
      },
      [link],
    );

    useEffect(() => {
      document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered]);

    return (
      <group ref={ref} {...props} scale={[0.1 * size, 0.1 * size, 0.01]}>
        <Text3D
          ref={mesh}
          font={fontUrl as unknown as string}
          {...config}
          onClick={onClickHandler}
          onPointerOver={onPointerOverHandler}
          onPointerOut={onPointerOutHandler}
        >
          {children}
          <meshPhongMaterial
            color={hovered ? 'white' : link ? 'gray' : 'white'}
            normalMap={normal}
          />
        </Text3D>
      </group>
    );
  },
);

// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
Text.displayName = 'Text';

export default Text;
