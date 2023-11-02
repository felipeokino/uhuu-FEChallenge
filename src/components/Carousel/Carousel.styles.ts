import styled from 'styled-components';

export const CarouselContainer = styled.div`
 display: flex;
 gap: 2rem;
 scroll-snap-type: x mandatory; 
 overflow-x: scroll;
`;

export const CarouselItem = styled.div`
 scroll-snap-align: center;
`;