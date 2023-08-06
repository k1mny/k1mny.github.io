import type { NextPage } from 'next';
import { Suspense } from 'react';
import { MainCanvas } from '../components/MainCanvas';
import { Overlay } from '../components/Overlay';

const Home: NextPage = () => {
  return (
    <main>
      <Suspense fallback={null}>
        <MainCanvas />
      </Suspense>
      <Overlay />
    </main>
  );
};

export default Home;
