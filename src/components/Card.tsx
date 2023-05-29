import { FC } from 'react';
import { Icons } from './Icons';
import HoverVideo from './HoverVideo';

export const Card: FC = () => {
  return (
    <div
      style={{
        width: '580px',
        backgroundColor: '#f5f5f5',
        border: '2px solid gray',
        borderRadius: '4px',
        padding: '5px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>kimny</h1>
      <Icons />
      <HoverVideo
        thumbnail='/test.png'
        video='/diceroll.gif'
        link='https://k1mny.github.io/dice-roll/'
        text='Dice Roll'
      />
      <HoverVideo
        thumbnail='/test.png'
        video='/diceroll.gif'
        link='https://k1mny.github.io/wor3dle/'
        text='WOR3DLE'
      />
    </div>
  );
};
