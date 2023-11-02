import React from 'react';
import { Card, CardBody, Divider, Flex, Heading, Image, Stack, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import { useMovieDetails } from '../../hooks/useDetails';
import { formatDate, formatImageUrl } from '../../utils';
import { BackButton, Container } from './Details.styles';

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { movie: { title, release_date, budget, poster_path, vote_average, overview } } = useMovieDetails(id!);

  
  const handleClick = () => {
    navigate('/popular');
  };
  
  return (
    <Container>
      <BackButton onClick={handleClick}>
        <BiArrowBack  />
      </BackButton>
      <Card maxW='sm' >
        <CardBody>
          <Flex mt='6' >
            <Image
              width={300}
              src={formatImageUrl(poster_path)}
              alt={`Poster do filme ${title}`}
              borderRadius='lg'
            />
            <Stack ml={16}>

              <Heading size='md' color={'white'}>{title}</Heading>
              <Text color={'white'}>
                {overview}
              </Text>
              <Text color={'white'}>Data de lançamento: {formatDate(release_date)}</Text>
              <Stat color={'white'}>
                <StatLabel>Orçamento:</StatLabel>
                <StatNumber>{budget?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}</StatNumber>
              </Stat>
              <Text color={'white'}>
                Nota: {vote_average?.toFixed(1)}/10
              </Text>
            </Stack>
          </Flex>
        </CardBody>
        <Divider /> 
      </Card>
    </Container>
  );
}