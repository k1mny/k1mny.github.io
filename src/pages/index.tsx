import type { NextPage } from 'next'
import Head from 'next/head'
import { MainCanvas } from '../components/MainCanvas'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>kimny</title>
        <meta name="description" content="Portfoliony" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainCanvas />
      </main>
    </div>
  )
}

export default Home
