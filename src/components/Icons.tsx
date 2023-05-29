import { FC } from 'react';
import { IconContext } from 'react-icons';
import { FaTwitter, FaUnsplash } from 'react-icons/fa';

export const Icons: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
      }}
    >
      <Icon type='FaTwitter' url='https://twitter.com/k1mny' />
      <Icon type='FaUnsplash' url='https://unsplash.com/@kimny' />
    </div>
  );
};

const IconType = {
  FaTwitter,
  FaUnsplash,
};
type IconProps = {
  type: keyof typeof IconType;
  url: string;
};
const Icon: FC<IconProps> = (props) => {
  const { type, url } = props;

  const IconComponent = IconType[type];

  return (
    <IconContext.Provider value={{ color: '#0f0f0f', size: '48px' }}>
      <a href={url}>
        <IconComponent />
      </a>
    </IconContext.Provider>
  );
};
