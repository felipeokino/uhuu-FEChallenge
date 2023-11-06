import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  background-color: var(--background-secondary);
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 70px;
  color: var(--neutral-color);
  p {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    gap: 8px;
    span {
      font-weight: 700;
    }
  }
  @media screen and (max-width: 768px) {
    position: static;
    flex-direction: column;
    height: auto;
    i {
      display: none;
    }
  }
`;
export const DetailsContainer = styled.div`
  margin-left: 500px;
  display: flex;
  flex-direction: column;
  height: 80%;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const PosterImage = styled.img`
    width: 383px;
    border-radius: 4px;
    position: absolute;
    top: 72px;
    left: 112px;
    z-index: 1000;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      position: static;
      width: 186px;
      height: 279px;
      object-fit: cover;
      margin: 34px 0 42px;
    }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 0;
  margin-bottom: 20px;
`;

export const DetailsLine = styled.div` 
  font-size: 18px;
  display: flex;
  gap: 4px;
  font-weight: 400;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
      flex-direction: column;
    }
`;

export const UserRating =styled.div`
  width: 210px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: 400;
  gap: 8px;
`;

export const ProductionDetails = styled.section`
  display: flex;
  justify-content: start;
  
`;