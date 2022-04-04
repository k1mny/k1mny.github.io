import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { useClicked } from '../globalStates/globalStates';
import testImg from '../img/test.webp';
import ContentsFrame from './contents/ContentsFrame';
import styles from '../styles/glitch.module.css';
import ContentsDiary from './contents/ContentsDialy';
import ContentsWor3dle from './contents/ContentsWor3dle';
import ContentsDice from './contents/ContentsDice';

const contents = {
  Frame: <ContentsFrame />,
  Diary: <ContentsDiary />,
  Wor3dle: <ContentsWor3dle />,
  Dice: <ContentsDice />,
};

export default function PopoverInfo() {
  const clicked = useRecoilValue(useClicked);

  if (clicked) {
    return (
      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          width: '300px',
          height: '200px',
          background: 'rgba(255,255,255,0.5)',
          zIndex: '10',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div style={{ zIndex: 1, fontSize: 64, color: 'rgba(255, 255, 255, 0.5)' }}>
            {contents[clicked]}
          </div>
          <Image src={testImg} layout={'fill'} />
        </div>
      </div>
    );
  }
  return null;
}
