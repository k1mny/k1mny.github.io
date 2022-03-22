import Head from 'next/head';
import MainCanvas from './components/MainCanvas';

export default function Home() {
  return (
    <>
      <Head>
        <title>kimny</title>
        <meta name='description' content='Homepage of kimny' />
        <link rel='icon' href='/favicon.ico' />
        {/* <link rel='preload' href='/fonts/melete_0100/Melete-Medium.ttf' as='font' crossOrigin='' /> */}
      </Head>

      <MainCanvas />
    </>
  );
}
