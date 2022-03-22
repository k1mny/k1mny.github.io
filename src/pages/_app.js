import { RecoilRoot } from 'recoil';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
