import Head from 'next/head';
import { Box, Button, Flex, HStack, Icon, IconButton } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import Vanta from './components/vanta';

export default function Home() {
  return (
    <>
      <Head>
        <title>kimny</title>
        <meta name='description' content='Homepage of kimny' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preload' href='/fonts/melete_0100/Melete-Medium.ttf' as='font' crossOrigin='' />
      </Head>
      <Vanta>
        <Flex w='full' h='100vh' align='center' justify='center' flexDir='column'>
          <Box
            fontSize='8rem'
            fontFamily='kimnyTitle'
            lineHeight='1.151'
            textAlign='center'
            zIndex='100'
          >
            kimny
          </Box>

          <Flex align='center' justify='center' marginTop='50px'>
            <IconButton
              aria-label='twitter'
              as='a'
              href='https://twitter.com/k1mny'
              colorScheme='twitter'
              icon={<FaTwitter />}
              w='50px'
              h='50px'
              fontSize='30px'
              rounded='3px'
            ></IconButton>
          </Flex>
        </Flex>
      </Vanta>
    </>
  );
}
