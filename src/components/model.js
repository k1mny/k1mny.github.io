import ModelDice from './models/dice';

export default function Model({ name, ...props }) {
  let model;
  switch (name) {
    case 'Dice':
      model = <ModelDice />;
      break;
    default:
      model = <ModelDefault />;
  }
  return (
    <group name={name} dispose={null} {...props}>
      {model}
    </group>
  );
}

function ModelDefault() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' />
    </mesh>
  );
}
