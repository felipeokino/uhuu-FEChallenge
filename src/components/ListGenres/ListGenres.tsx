
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGenres } from '../../hooks/useGenres';
import { ButtonComponent, Container } from './ListGenres.styles';
import { IoCloseCircleSharp } from 'react-icons/io5';

export default function ListGenres(){
  const { genres } = useGenres();
  const [ selectedGenre, setSelectedGenre ] = React.useState<number[]>([]);
  const [ filters , setFilters ] = useSearchParams();

  const loadFilters = () => {
    const genres = filters.get('with_genres') || '';
    if (genres) 
      setSelectedGenre(genres.split('|').map(Number));
  };

  const handleClick = (genre: number) => {
    const selected = new Set(selectedGenre);
    console.log(selectedGenre, genre);
    if (selected.has(genre)) 
      selected.delete(genre);
    else 
      selected.add(genre);
    
    const arrayOfSelected = Array.from(selected);
    setSelectedGenre(arrayOfSelected);
    applyFilter(arrayOfSelected);
  };

  const applyFilter = (filterData: number[]) => {
    if (filterData.length) 
      filters.set('with_genres', filterData.join('|'));
    else
      filters.delete('with_genres');
    setFilters(filters);
  };

  useEffect(() => {
    loadFilters();
  }, []);
  
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

