import styled from 'styled-components';

export const CircularProgress = styled.svg`
  transform: rotate(-90deg);
  position: relative;
  
  
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: var(--neutral-color);
  opacity: .2;
  stroke-width: 5;
  
  
`;

export const CircleProgress = styled.circle<{circunference: number, offset: number}>`
  fill: none;
  stroke: #14FF00;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: ${(props) => props.circunference};
  stroke-dashoffset: ${(props) => props.offset};
  transition: stroke-dashoffset 0.3s;
`;

export const Text = styled.text`
  text-anchor: middle;
  alignment-baseline: middle;
  fill: #14FF00;
  transform: rotate(90deg);
  transform-origin: ${props => `${props.x}px ${props.y}px`};
  font-size: 12px;
`;