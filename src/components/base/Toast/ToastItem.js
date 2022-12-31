import styled from '@emotion/styled';
import { useState } from 'react';
import Text from '../../components/Text';
import useTimeout from '../../hooks/useTimeout';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 450px;
  height: 70px;
  padding: 0 20px;
  align-self: center;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  opacity: 1;
  transition: opacity 0.4s ease-out;

  &:not(:first-of-type) {
    margin-top: 8px;
  }

  &:first-of-type {
    animation: move 0.4s ease-out forwards;
  }

  @keyframes move {
    0% {
      margin-top: 80px;
    }
    100% {
      margin-top: 0;
    }
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 4px;
  background-color: #44b;
  animation-name: progress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes progress {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

const ToastItem = ({ id, message, duration, onDone }) => {
  const [show, setShow] = useState(true);
  useTimeout(() => {
    setShow(false);
    setTimeout(() => onDone(), 400);
  }, duration);

  return (
    <Container style={{ opacity: show ? 1 : 0 }}>
      <ProgressBar style={{ animationDuration: `${duration}ms` }} />
      <Text>{message}</Text>
    </Container>
  );
};

export default ToastItem;
