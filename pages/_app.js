import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/index'
import '@fontsource/alfa-slab-one'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
