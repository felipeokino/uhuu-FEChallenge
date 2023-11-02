import React from 'react';
import { Container } from './Header.styles';
import ListGenres from '../ListGenres';

export default function Header() {
  return (
    <Container>
      <span>Code Challenge</span>
      <ListGenres  />
    </Container>
  );
}
  