import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bounds, OrbitControls, ContactShadows, Html, Stats } from '@react-three/drei';
import SelectToZoom from './SelectToZoom';
import Model from './model';
import { useRecoilBridgeAcrossReactRoots_UNSTABLE } from 'recoil';

export default function MainCanvas() {
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  return (
    <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
      <RecoilBridge>
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
              <Model name='Frame' position={[0, 0, 0]} rotation={[0, 0, 0]} scale={10} />
              <Model name='Diary' position={[-21, -15, -13]} rotation={[2, 0, 1]} scale={0.5} />
              <Model name='Wor3dle' position={[10, 10, -15]} rotation={[0, 0, 0]} scale={2} />
              <Model name='Dice' position={[20, 15, 4]} rotation={[3, -1, 3]} scale={2} />
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
        <OrbitControls
          makeDefault
          enablePan={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
        />
        <Stats />
      </RecoilBridge>
    </Canvas>
  );
}
