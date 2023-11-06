import React from 'react';
import { CircularProgress, CircleProgress, CircleBackground, Text } from './CircularProgress.styles';

type CircularProgressProps = {
  radius: number,
  strokeWidth: number;
  progress: number;
}

export default function CircularProgressComponent({ radius = 50, strokeWidth = 2, progress = 50 }: CircularProgressProps) {
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    
    <CircularProgress height={radius * 2} width={radius * 2}>
      <CircleBackground
        cx={radius}
        cy={radius}
        r={normalizedRadius}
      />
      <CircleProgress
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        circunference={circumference}
        offset={offset}
      />
      <Text radius={radius} x={radius} y={radius}>
        {progress}%
      </Text>
    </CircularProgress>

  );
}