import React from 'react';
import { Loader, LoaderContainer, LoadingContainer } from './Loading.styles';

export default function Loading() {
  return (
    <LoadingContainer>
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    </LoadingContainer>
  );
}