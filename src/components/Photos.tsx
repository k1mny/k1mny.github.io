/* eslint-disable jsx-a11y/alt-text */
import { Image, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import axios from 'axios';
import { FC, useEffect, useRef, useState } from 'react';
import { Vector3 } from 'three';

const Photos: FC = () => {
  const { width, height } = useThree((state) => state.viewport);
  const picWidth = width / 3;

  const [photos, setPhotos] = useState([]);
  const [pos, setPos] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.unsplash.com/users/kimny/photos?per_page=15&order_by=views', {
        headers: {
          Authorization: `Client-ID 1g7UrBr5iksM0axEeSZ8B6l3lhcu2LLr_7V-QfmMlIg`,
        },
      })
      .then((res) => {
        setPhotos(res.data);
        // 各写真をこの高さにする
        const picHeights = res.data.map((c) => (picWidth * c.height) / c.width);
        setPos(
          picHeights.map((h, i, arr) => {
            const prevHeight = arr
              .filter((height, idx) => idx % 3 === i % 3 && idx < i)
              .reduce((prev, curr) => prev + curr, 0);
            return new Vector3(-picWidth + picWidth * (i % 3), height / 2 - h / 2 - prevHeight, 0);
          }),
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const data = useScroll();
  const group = useRef<THREE.Group>(null!);

  useFrame(() => {
    // group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    // @ts-ignore
    // (group.current.children[1] as THREE.Mesh).material.zoom = 1 + data.range(0, 1 / 3) / 3;
    // group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3;
    // group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    // group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1;
    // group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3;
    // group.current.children[4].position.x = (data.range(2 / 3, 3 / 3) * width) / 3;
  });
  return (
    <group ref={group}>
      {photos.map((photo, idx) => {
        return (
          <Image
            key={idx}
            position={pos[idx]}
            scale={
              [picWidth, (width / 3 / photo.width) * photo.height, 1] as [
                x: number,
                y: number,
                z: number,
              ] &
                number
            }
            url={photo.urls.regular}
          />
        );
      })}
    </group>
  );
};

export default Photos;
