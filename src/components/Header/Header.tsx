import React from 'react';
import { Container } from './Header.styles';
import Logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="TMDB Logo" />
    </Container>
  );
}
  