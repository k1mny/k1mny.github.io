import Head from 'next/head';
import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bounds, useBounds, OrbitControls, ContactShadows, useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';

const color = new THREE.Color();

export default function Home() {
  return (
    <>
      <Head>
        <title>kimny</title>
        <meta name='description' content='Homepage of kimny' />
        <link rel='icon' href='/favicon.ico' />
        {/* <link rel='preload' href='/fonts/melete_0100/Melete-Medium.ttf' as='font' crossOrigin='' /> */}
      </Head>

      <div
        style={{
          position: 'absolute',
          width: '300px',
          height: '200px',
          background: 'rgba(255,255,255,0.5)',
          zIndex: '10',
        }}
      >
        test
      </div>
      <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
        <spotLight position={[-100, -100, -100]} intensity={0.2} angle={0.3} penumbra={1} />
        <hemisphereLight
          color='white'
          groundColor='#101010'
          position={[-7, 25, 13]}
          intensity={1}
        />
        <Suspense
          fallback={
            <Html center className='loader'>
              LOADING
            </Html>
          }
        >
          <Bounds fit clip margin={1.2}>
            <SelectToZoom>
              <Model name='Curly' position={[1, -11, -20]} rotation={[2, 0, -0]} />
              <Model name='DNA' position={[20, 0, -17]} rotation={[1, 1, -2]} />
              <Model name='Headphones' position={[20, 2, 4]} rotation={[1, 0, -1]} />
              <Model name='Notebook' position={[-21, -15, -13]} rotation={[2, 0, 1]} />
              <Model name='Rocket003' position={[18, 15, -25]} rotation={[1, 1, 0]} />
              <Model name='Roundcube001' position={[-25, -4, 5]} rotation={[1, 0, 0]} scale={0.5} />
              <Model name='Table' position={[1, -4, -28]} rotation={[1, 0, -1]} scale={0.5} />
              <Model name='VR_Headset' position={[7, -15, 28]} rotation={[1, 0, -1]} scale={5} />
              <Model name='Zeppelin' position={[-20, 10, 10]} rotation={[3, -1, 3]} scale={0.005} />
            </SelectToZoom>
          </Bounds>
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -35, 0]}
            opacity={0.2}
            width={200}
            height={200}
            blur={1}
            far={50}
          />
        </Suspense>
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
      </Canvas>
    </>
  );
}

function Model({ name, ...props }) {
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

// This component wraps children in a group with a click handler
// Clicking any object will refresh and fit bounds
function SelectToZoom({ children }) {
  const api = useBounds();
  const group = useRef();
  const [hovered, setHovered] = useState();
  const [clicked, setClicked] = useState();
  useFrame((state) => {
    group.current.children.forEach((child, index) => {
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
      child.material.color.lerp(
        color.set(currentColor).convertSRGBToLinear(),
        clicked ? 0.1 : 0.05,
      );
    });
  });
  return (
    <group
      ref={group}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (e.delta <= 2) {
          api.refresh(e.object).fit();
          setClicked(e.object.material.name);
        }
      }}
      onPointerMissed={(e) => {
        if (e.button === 0) {
          api.refresh().fit();
          setClicked(null);
        }
      }}
    >
      {children}
    </group>
  );
}
