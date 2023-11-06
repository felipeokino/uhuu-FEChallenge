import React from 'react';
import { StyledSectionTitle } from './SectionTitle.styles';

type SectionTitleProps = {
  title: string
}
export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <StyledSectionTitle>{ title }</StyledSectionTitle>
  );
}