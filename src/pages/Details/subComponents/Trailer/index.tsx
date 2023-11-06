import React from 'react'
import { Video } from '../../../../@types/videos';
import SectionTitle from '../SectionTitle';
import { SectionContainer } from '../common.styles';

type VideoDisplayProps = {
  video: Video
}
export default function Trailer({ video }: VideoDisplayProps) {
  const embedUrl = `https://www.youtube.com/embed/${video.key}`;

  return (
    <SectionContainer>
      <SectionTitle title='Trailer' />
      <div>
        <iframe
          src={embedUrl}
          title={video.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </SectionContainer>
  );
}