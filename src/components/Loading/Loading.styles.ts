import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #E73980;
  z-index: 100;
`;

export const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #861040;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


const pulse = keyframes`
 0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
`;

export const ImageSkeleton = styled.div`
  width: 176px; 
  height: 264px; 
  min-width: 176px;
  background-color: #aaa; 
  border-radius: 4px; 
  animation: ${pulse} 1.5s infinite;
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 4px;
`;