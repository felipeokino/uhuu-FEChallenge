import React from 'react';
import { CarouselItem } from './Carousel.styles';

type ItemProps = {
  children: React.ReactNode
}
export default function Item({ children }: ItemProps) {
  return (
    <CarouselItem>
      {children}
    </CarouselItem>
  );
}
