import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  gap: 12px;
  margin-top: 12px;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;