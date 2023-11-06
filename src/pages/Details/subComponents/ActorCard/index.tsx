import React, { useState } from 'react';
import { Actor } from '../../../../@types/crew';
import { formatImageUrl } from '../../../../utils';
import { Card, SkeletonActorCard } from './ActorCard.styles';

type ActorCardProps = {
  actor: Actor
}
export default function ActorCard({ actor }: ActorCardProps) {
  const { profile_path, name, character } = actor;
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  }
  return (
    <Card>
      {isLoading && <SkeletonActorCard  />}
      <img 
        onLoad={handleLoad}
        loading='lazy'
        src={formatImageUrl(profile_path || '')||''} alt={name}/>
      <div>
        <span>{name}</span>
        <span>{character}</span>
      </div>
    </Card>
  );
}