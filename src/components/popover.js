import { useRecoilValue } from 'recoil';
import { useClicked } from '../globalStates/globalStates';

export default function PopoverInfo({ title, text }) {
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
        {clicked}
      </div>
    );
  }
  return null;
}
