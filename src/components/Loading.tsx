import { Html, useProgress } from '@react-three/drei';
import { FC, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Loading: FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <Box>
        <CenterText>kimny</CenterText>
        <ProgressBar value={progress} max='100' />
      </Box>
    </Html>
  );
};

export default Loading;

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0f;
`;

const textclip = keyframes`
  from {
    background-position: 200% center;
  }
`;

const CenterText = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 100px;
  margin-bottom: 10px;

  background-image: linear-gradient(90deg, #f0f0f0 0%, #0a0a0a 29%, #0f0f0f 67%, #f0f0f0 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 1s linear infinite;
  display: inline-block;
  font-size: 190px;
`;

const ProgressBar = styled.progress`
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background-color: #0f0f0f;
  height: 5px;

  ::-webkit-progress-bar {
    background-color: #0f0f0f;
  }
  ::-moz-progress-bar {
    background-color: #0f0f0f;
  }
  ::-webkit-progress-value {
    background-color: #f0f0f0;
  }
`;
