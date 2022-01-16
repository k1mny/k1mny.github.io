import Head from 'next/head'
import { Box, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>kimny</title>
        <meta name="description" content="Homepage of kimny" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="full" h="100vh" align="center" justify="center">
        <Box fontSize="9xl" fontFamily="kimnyTitle">
          kimny
        </Box>
      </Flex>
    </>
  )
}
