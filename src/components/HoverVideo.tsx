import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/HoverVideo.module.css';

interface HoverVideoProps {
  thumbnail: string;
  video: string;
  text: string;
  link: string;
}

const HoverVideo: React.FC<HoverVideoProps> = ({ thumbnail, video, text, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.hoverVideo}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={link}>
        <div className={styles.hoverVideoContent}>
          <h3 className={styles.hoverVideoText}>{text}</h3>
          <div className={`${styles.hoverVideoMedia} ${isHovered ? styles.hoverVideoActive : ''}`}>
            <Image
              src={video}
              alt='Thumbnail'
              layout='fill'
              objectFit='cover'
              className={styles.video}
              style={{ opacity: isHovered ? 1 : 0 }}
            />
            <Image
              src={thumbnail}
              alt='Thumbnail'
              layout='fill'
              objectFit='cover'
              className={styles.image}
              style={{ opacity: isHovered ? 0 : 1 }}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default HoverVideo;
