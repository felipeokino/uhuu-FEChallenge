import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 112px;
  margin-bottom: 64px;
  
  & > div {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 12px;
    overflow-x: auto;
    box-sizing: border-box;
    scroll-snap-type: x mandatory;
    & > div {
      scroll-snap-align: end;
    }
  }
  iframe {
    width: 907px;
    height: 510px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    padding: 0;
    div {
      padding: 0 12px;
    }
    iframe {
      width: 100%;
      height: 182px;
    }
  }
`;