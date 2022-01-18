import Head from 'next/head'
import { Box, Button, Flex, HStack, Icon } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { convertRemToPx } from '../util/util';
import { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import Vanta from './components/vanta';

export default function Home() {
  const [isAnimated, setAnimated] = useState(false);
  const control_line_over = useAnimation();
  const control_line_under = useAnimation();
  const control_chara = useAnimation();
  const control_content = useAnimation();
  
  const controls = () => {
    if (!isAnimated) {
      const amout_of_move = convertRemToPx(10);
      control_line_over.start({ y: [0, -(amout_of_move-convertRemToPx(22))], opacity: [1, 0] });
      control_line_under.start({ y: [0, -amout_of_move], opacity: [1, 0] });
      control_chara.start({ y: [0, -amout_of_move] });
      control_content.start({ scale: [0, 1] });
      setAnimated(true);
    }
  };

  return (
    <>
      <Head>
        <title>kimny</title>
        <meta name="description" content="Homepage of kimny" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Vanta>
        <Flex w="full" h="100vh" align="center" justify="center" flexDir="column" onClick={() => controls()}>
        <motion.div
            style={{ width: "100%", height: "1rem"}}
            animate={control_line_over}
            transition={{ duration: 1 }}
          >
            <Flex>
              <Box flexBasis="24.8%" h="1rem" w="50vw"></Box>
              <Box flexBasis="75.2%" border="1rem solid black" h="1rem" w="50vw"></Box>
            </Flex>
          </motion.div>
          
          <motion.div
            style={{ width: "100%", height: "21rem"}}
            animate={control_chara}
            transition={{ duration: 1 }}
          >
            <Box fontSize="18rem" fontFamily="kimnyTitle" lineHeight="1.151" textAlign="center" zIndex="100">
              kimny
            </Box>
          </motion.div>

          <motion.div
            style={{ width: "100%", height: "1rem"}}
            animate={control_line_under}
            transition={{ duration: 1 }}
          >
            <Flex>
              <Box flexBasis="69.3%" border="1rem solid black" h="1rem" w="50vw"></Box>
              <Box flexBasis="30.7%" h="1rem" w="50vw"></Box>
            </Flex>
          </motion.div>

          <motion.div
            style={{ width: "100%", height: "0"}}
            animate={control_content}
            transition={{ duration: 1 }}
          >
            <Flex hidden={!isAnimated} align="center" justify="center">
              <Button as="a" href='https://twitter.com/k1mny' colorScheme='twitter' leftIcon={<FaTwitter />} w="12rem" h="12rem" fontSize="8rem" rounded="2rem">
              </Button>
            </Flex>
          </motion.div>
          
        </Flex>
      </Vanta>
    </>
  )
}
