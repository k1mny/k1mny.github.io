/* eslint-disable jsx-a11y/alt-text */
import { Image, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import axios from 'axios';
import { FC, useEffect, useRef, useState } from 'react';
import { Vector3 } from 'three';
import { randFloat } from 'three/src/math/MathUtils';

type Photo = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

const scrollSpeed = [randFloat(0.001, 0.005), randFloat(0.001, 0.005), randFloat(0.001, 0.005)];

const Photos: FC = () => {
  const { width, height } = useThree((state) => state.viewport);
  const picWidth = width / 3;

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [pos, setPos] = useState<Vector3[]>([]);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  useEffect(() => {
    axios
      .get('https://api.unsplash.com/users/kimny/photos?per_page=15&order_by=views', {
        headers: {
          Authorization: `Client-ID 1g7UrBr5iksM0axEeSZ8B6l3lhcu2LLr_7V-QfmMlIg`,
        },
      })
      .then((res: { data: Photo[] }) => {
        setPhotos(res.data);
        // 合計高さを決める
        const picColHeights = [0, 1, 2].map((i) =>
          res.data
            .filter((_, idx) => idx % 3 === i % 3)
            .reduce((prev, curr) => prev + (picWidth * curr.height) / curr.width, 0),
        );
        const totalHeight = Math.max(...picColHeights) * 1.1;
        setScrollHeight(totalHeight);
        const heightMargin = [totalHeight, totalHeight, totalHeight];
        console.log(heightMargin);
        // 各写真をこの高さにする
        const picHeights: number[] = res.data.map((c, idx, arr) => {
          const colIdx = idx % 3;
          const margin =
            idx < arr.length - 3 ? heightMargin[colIdx] * randFloat(0, 0.1) : heightMargin[colIdx];
          const picHeight = (picWidth * c.height) / c.width;
          heightMargin[colIdx] -= margin + picHeight;
          return picHeight + margin;
        });

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
  }, [height, picWidth, width]);

  // const data = useScroll();
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
    group.current.children.map((img, idx) => {
      let nextPosY = img.position.y + scrollSpeed[idx % 3];
      if (nextPosY > height) {
        nextPosY = pos[idx].y - scrollHeight;
      }
      img.position.y = nextPosY;
    });
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
