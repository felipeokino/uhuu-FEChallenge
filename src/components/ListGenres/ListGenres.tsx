
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGenres } from '../../hooks/useGenres';
import { ButtonComponent, Container } from './ListGenres.styles';
import { IoCloseCircleSharp } from 'react-icons/io5';
export default function ListGenres(){
  const { genres } = useGenres();
  const [ selectedGenre, setSelectedGenre ] = React.useState<number[]>([]);
  const [ filters , setFilters ] = useSearchParams();

  const handleClick = (genre: number) => {
    const selected = new Set(selectedGenre);

    if (selected.has(genre)) 
      selected.delete(genre);
    else 
      selected.add(genre);
    
    setSelectedGenre(Array.from(selected));
    applyFilter();
  };

  const applyFilter = () => {  
    filters.set('with_genres', (selectedGenre||[]).join('|'));
    setFilters(filters);
  };

  return (
    <Container>
      <p>
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </p>
      <div>
        <span>FILTRE POR:</span>
        {genres.map(({ id, name }) => (
          <ButtonComponent 
            selected={selectedGenre.includes(id)} 
            key={id} 
            onClick={() => handleClick(id)}
          >
            {name}
            {selectedGenre.includes(id) && (
              <IoCloseCircleSharp size={16} fill={'var(--neutral-color)'}/>
            )}
          </ButtonComponent>
        ))}
      </div>
       
    </Container>
  );
}

