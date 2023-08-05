import Image from 'next/image';
import { FC } from 'react';

export const Overlay: FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ position: 'absolute', top: 40, left: 40, width: '30px', height: '30px' }}>
        <Image src='/icon_gray.png' alt='kimny icon' fill />
      </div>
      <div style={{ position: 'absolute', top: 40, left: 80, fontSize: '13px' }}>kimny</div>
    </div>
  );
};
