import styled from 'styled-components';

export const CardContainer = styled.div`
width: 176px;
  height: 320px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 158px;
  }
`
export const CardImage = styled.img`
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;