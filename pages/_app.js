import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/index';
import '@fontsource/alfa-slab-one';
import Fonts from './fonts';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
