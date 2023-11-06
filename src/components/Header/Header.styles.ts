import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    width: 100vw;
    height: 56px;
    top: 0;
    left: 0;
    background-color: var(--background-primary);
    color: white;
    justify-content: start;
    align-items: center;
    img {
        cursor: pointer;
        margin-left: 112px;
    }
    @media screen and (max-width: 768px) {
        justify-content: center;
        img {
            margin: 0;
        }
    }
`;