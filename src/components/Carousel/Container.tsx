import React from 'react';
import { CarouselContainer } from './Carousel.styles';

type ContainerProps = {
  children: React.ReactNode
}
export default function Container({ children }: ContainerProps) {
  return (
    <CarouselContainer>
      {children}
    </CarouselContainer>
  );
}

