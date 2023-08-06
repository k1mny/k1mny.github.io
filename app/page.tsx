import '../src/styles/globals.css';

import { Metadata, NextPage } from 'next';
import { Suspense } from 'react';
import { MainCanvas } from '../src/components/MainCanvas';
import { Overlay } from '../src/components/Overlay';

export const metadata: Metadata = {
  title: 'kimny',
  description: 'Portfolio of kimny',
  icons: '/favicon.ico',
};

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
