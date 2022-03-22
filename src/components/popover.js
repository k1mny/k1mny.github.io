import { useRecoilValue } from 'recoil';
import { useClicked } from '../globalStates/globalStates';

import styles from '../styles/glitch.module.css';

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
        <p className={styles.glitch}>
          <span aria-hidden>{clicked}</span>
          {clicked}
          <span aria-hidden>{clicked}</span>
        </p>
      </div>
    );
  }
  return null;
}
