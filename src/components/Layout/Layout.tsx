import React from 'react';
import { Container } from './Layout.styles';
import Header from '../Header';


type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <Container>
      <Header  />
      {children}
    </Container>
  );
}