import * as THREE from 'three'
import React, { useMemo, useRef, useLayoutEffect, FC } from 'react'
import fontUrl from './assets/fonts/Melete_Medium_Regular.json'
import { Text3D } from '@react-three/drei'
import { Vector3 } from 'three';

type props = {
  children: string
  hAlign: string
  vAlign?: string
  size?: number
  color?: string
  position: Vector3
};


export const Text: FC<props> = ({ children, vAlign = 'center', hAlign = 'center', size = 1.5, color = '#000000', ...props }) => {
  const config = useMemo(
    () => ({ size: 40, height: 30, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
    []
  )

  const mesh = useRef<THREE.Mesh>(null!)
  useLayoutEffect(() => {
    const size = new THREE.Vector3()
    mesh.current.geometry.computeBoundingBox()
    mesh.current.geometry.boundingBox?.getSize(size)
    mesh.current.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
    mesh.current.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
  }, [children, hAlign, vAlign])
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <Text3D ref={mesh} font={fontUrl as unknown as string} {...config}>
        {children}
        <meshNormalMaterial />
      </Text3D>
    </group>
  )
}
