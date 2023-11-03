import React from 'react';
import { Container } from './Layout.styles';
import Header from '../Header';
import ListGenres from '../ListGenres';

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <Container>
      <Header  />
      <ListGenres  />
      {children}
    </Container>
  );
}