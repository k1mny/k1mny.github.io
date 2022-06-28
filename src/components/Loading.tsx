import { Html, useProgress } from '@react-three/drei';
import { FC, useEffect } from 'react';
import styled from 'styled-components';

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

const CenterText = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 100px;
  color: #f0f0f0;
  margin-bottom: 10px;
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
