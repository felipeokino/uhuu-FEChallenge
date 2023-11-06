import React from 'react';
import { Container } from './Header.styles';
import Logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={Logo} alt="TMDB Logo" onClick={() => navigate('/')}/>
    </Container>
  );
}
  