import React from 'react';
import { Actor } from '../../../../@types/crew';
import SectionTitle from '../SectionTitle';
import ActorCard from '../ActorCard';
import { SectionContainer } from '../common.styles';

type CastListProps = {
  list: Actor[]
}
export default function CastList({ list }: CastListProps) {
  return (
    <SectionContainer>
      <SectionTitle title='Elenco original' />
      <div>
        {
          list.map(actor => (
            <ActorCard key={actor.id} actor={actor} />
          ))
        }
      </div>
    </SectionContainer>
  );
}