import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import { FC } from 'react';

const Postprocessing: FC = () => {
  return (
    <EffectComposer multisampling={8}>
      <Bloom kernelSize={3} luminanceThreshold={0.5} luminanceSmoothing={0.4} intensity={0.6} />
      <Bloom kernelSize={2} luminanceThreshold={0.5} luminanceSmoothing={0.2} intensity={0.5} />
    </EffectComposer>
  );
};

export default Postprocessing;
