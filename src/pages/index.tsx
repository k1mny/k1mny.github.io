import type { NextPage } from 'next';
import Head from 'next/head';
import { Card } from '../components/Card';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>kimny</title>
        <meta name='description' content='kimny portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f0f0f',
          }}
        >
          <Card />
        </div>
      </main>
    </div>
  );
};

export default Home;
