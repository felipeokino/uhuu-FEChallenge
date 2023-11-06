import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 176px;
  min-width: 176px;
  min-height: 320px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  & > div > span:last-of-type {
    color: var(--neutral-color-gray900);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  @media screen and (max-width: 768px) {
    width: 158px;
  }
`;

export const CardImage = styled.img`
  height: 264px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  margin-bottom: 4px;
`;