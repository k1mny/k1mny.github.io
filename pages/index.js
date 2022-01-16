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
      <Flex w="full" h="100vh" align="center" justify="center" flexDir="column">
       <Flex>
          <Box flexBasis="24.8%" h="1rem" w="50vw"></Box>
          <Box flexBasis="75.2%" border="1rem solid black" h="1rem" w="50vw"></Box>
        </Flex>
        <Box fontSize="18rem" fontFamily="kimnyTitle" lineHeight="1.151" zIndex="10">
          kimny
        </Box>
        <Flex>
          <Box flexBasis="69.3%" border="1rem solid black" h="1rem" w="50vw"></Box>
          <Box flexBasis="30.7%" h="1rem" w="50vw"></Box>
        </Flex>
      </Flex>
    </>
  )
}
