/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
// https://www.turbosquid.com/3d-models/3d-model-pen-notepad-1480422

import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Diary() {
  const { nodes } = useGLTF('/diary.gltf');
  return (
    <>
      <mesh
        geometry={nodes.lower_part_of_handle.geometry}
        material={nodes.lower_part_of_handle.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.kernel.geometry}
        material={nodes.kernel.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cap.geometry}
        material={nodes.cap.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.holder.geometry}
        material={nodes.holder.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.central_jumper.geometry}
        material={nodes.central_jumper.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.top_part_of_handle.geometry}
        material={nodes.top_part_of_handle.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.pile_of_leaves.geometry}
        material={nodes.pile_of_leaves.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.uvula.geometry}
        material={nodes.uvula.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cover.geometry}
        material={nodes.cover.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </>
  );
}

useGLTF.preload('/diary.gltf');
