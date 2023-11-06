import styled from 'styled-components';
import { ImageSkeleton } from '../../../../components/Loading/Loading.styles';

export const SkeletonActorCard = styled(ImageSkeleton)`
  width: 175px;
  height: 221px;
  box-sizing: border-box;
  left: 50%;
  transform: translateX(-50%);
`;

export const Card = styled.div`
  padding: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 336px;
  gap: 16px;
  position: relative;
  img {
    width: 175px;
    height: 221px;
    border-radius: 4px;
    object-fit: cover;
  }
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
`