import React from 'react';
import { Container } from './Layout.styles';

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}