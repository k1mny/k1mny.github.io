import { useGLTF } from '@react-three/drei';

export default function ModelDice() {
  const { nodes } = useGLTF('/dice.gltf');
  return (
    <>
      <mesh geometry={nodes.Cube001_2.geometry}>
        <meshStandardMaterial attach='material' />
      </mesh>
      <mesh geometry={nodes.Cube001_1.geometry}>
        <meshStandardMaterial attach='material' />
      </mesh>
    </>
  );
}
