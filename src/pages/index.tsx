import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const MainCanvas = dynamic(
  () => import('../components/MainCanvas'),
  {ssr: false}
);

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>kimny</title>
        <meta name='description' content='Portfoliony' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <MainCanvas />
      </main>
    </div>
  );
};

export default Home;
