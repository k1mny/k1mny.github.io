import { FC } from 'react';
import { Icons } from './Icons';

export const Card: FC = () => {
  return (
    <div
      style={{
        width: '580px',
        backgroundColor: '#f5f5f5',
        border: '2px solid gray',
        borderRadius: '4px',
        padding: '5px 8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h1>kimny</h1>
      <Icons />
    </div>
  );
};
