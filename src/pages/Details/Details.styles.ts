import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: start;
  margin: auto;
  width: 80%;
  position: relative;
  margin-top: 2rem;
`;

export const BackButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  top: 0;
  right: 0;
  background-color: #666;
  cursor: pointer;
  z-index: 100;
  transition: 0.3s;
  border: none;
  outline: none;
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 1;
  }
`;