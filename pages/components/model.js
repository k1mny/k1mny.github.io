import { useGLTF } from '@react-three/drei';

export default function Model({ name, ...props }) {
  const { nodes } = useGLTF('/compressed.glb');
  return (
    <mesh
      geometry={nodes[name].geometry}
      material={nodes[name].material}
      material-emissive='black'
      material-roughness={1}
      {...props}
      dispose={null}
    />
  );
}
