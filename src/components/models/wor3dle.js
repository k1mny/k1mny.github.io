import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import threeFontJson from 'three/examples/fonts/helvetiker_bold.typeface.json';
import { extend } from '@react-three/fiber';
extend({ TextGeometry });

export default function ModelWor3dle() {
  return (
    <>
      <ModelWordBox char='K' position={[-4.2, 0, 0]} rotation={[0, -Math.PI / 2, 0, 'YXZ']} />
      <ModelWordBox char='I' position={[-2.1, 0, 0]} rotation={[0, -Math.PI / 2, 0, 'YXZ']} />
      <ModelWordBox char='M' position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0, 'YXZ']} />
      <ModelWordBox char='N' position={[2.1, 0, 0]} rotation={[0, -Math.PI / 2, 0, 'YXZ']} />
      <ModelWordBox char='Y' position={[4.2, 0, 0]} rotation={[0, -Math.PI / 2, 0, 'YXZ']} />
    </>
  );
}

function ModelWordBox({ char, position, rotation }) {
  const textGeo = new TextGeometry(char, {
    font: new FontLoader().parse(threeFontJson),
    size: 1,
    height: 0.1,
  });
  textGeo.computeBoundingBox();
  const centerOffsetX = -(textGeo.boundingBox.max.x - textGeo.boundingBox.min.x) / 2;
  const centerOffsetY = -(textGeo.boundingBox.max.y - textGeo.boundingBox.min.y) / 2;

  return (
    <group position={position} rotation={rotation}>
      <mesh
        name='fixMaterial'
        position={[1, centerOffsetY, -centerOffsetX]}
        rotation={[0, Math.PI / 2, 0]}
        args={[textGeo]}
      >
        <meshStandardMaterial attach='material' opacity={0.5} color='black' />
      </mesh>
      <mesh>
        <boxBufferGeometry args={[2, 2, 2]} />
        <meshStandardMaterial attach='material' opacity={1} />
      </mesh>
    </group>
  );
}
