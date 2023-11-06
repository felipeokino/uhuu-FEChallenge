import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;  
  margin: 0 auto;
  gap: 12px;
  margin-top: 12px;
  width: calc(156px * 6);

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;