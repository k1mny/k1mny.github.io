import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Melete';
        src: url('/fonts/melete_0100/Melete-Medium.otf');
        font-style: medium;
        font-display: swap;
      }
      `}
  />
);

export default Fonts;
