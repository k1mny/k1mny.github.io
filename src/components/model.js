import ModelDice from './models/dice';
import ModelWor3dle from './models/wor3dle';

export default function Model({ name, ...props }) {
  let model;
  switch (name) {
    case 'Dice':
      model = <ModelDice />;
      break;
    case 'Wor3dle':
      model = <ModelWor3dle />;
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
