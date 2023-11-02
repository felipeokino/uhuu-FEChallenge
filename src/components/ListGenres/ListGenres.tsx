import React from 'react';
import { useGenres } from '../../hooks/useGenres';
import { MenuButton, MenuItem, MenuList, Menu } from '@chakra-ui/react';
import { ButtonComponent } from './ListGenres.styles';
import { useSearchParams } from 'react-router-dom';

export default function ListGenres(){
  const { genres } = useGenres();
  const [ selectedGenre, setSelectedGenre ] = React.useState<number[]>([]);
  const [ filters , setFilters ] = useSearchParams();

  const handleChange = (genre: number) => {
    const selected = new Set(selectedGenre);

    if (selected.has(genre)) 
      selected.delete(genre);
    else 
      selected.add(genre);
    
    setSelectedGenre(Array.from(selected));
  };

  const handleClose = () => {  
    filters.set('with_genres', (selectedGenre||[]).join('|'));
    setFilters(filters);
  };

  return (
    <div>
      <Menu onClose={handleClose}>
        <MenuButton as={ButtonComponent} >
              Genres
        </MenuButton>
        <MenuList>
          <>
            <MenuItem 
              bg={'#c5c5c5'}
              color={'#303030'}
              outline={'none'} 
              border={'none'}
              padding={'4px 3px'}
              margin={'2px'}
              onClick={() => {
                setSelectedGenre([]);
              }} 
              closeOnSelect={true}
              cursor={'pointer'}
            >
              Clear All
            </MenuItem>
            {genres.map(({ id, name }) => (
              <MenuItem 
                cursor={'pointer'}
                outline={'none'} 
                border={'none'}
                padding={'4px 3px'}
                margin={'2px'}
                key={id} 
                bg={selectedGenre.includes(id) ? '#303030': '#f1f1f1'}
                color={!selectedGenre.includes(id) ? '#303030': '#f1f1f1'}
                
                onClick={() => handleChange(id)} 
                closeOnSelect={false}
              >
                {name}
              </MenuItem>
            ))}
          </>
        </MenuList>
      </Menu>
    </div>
  );
}

