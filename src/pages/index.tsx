import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
import { MainCanvas } from '../components/MainCanvas';
// const MainCanvas = dynamic(() => import('../components/MainCanvas'), { ssr: false });

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>kimny</title>
        <meta name='description' content='Portfoliony' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Suspense fallback={null}>
          <MainCanvas />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
