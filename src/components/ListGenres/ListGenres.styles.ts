import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 450px;
    background-color: #861040;
    justify-content: center;
    align-items: center;
    padding: 20px;
    p {
        color: var(--neutral-color);
        font-size: 48px;
        width: 60%;
        text-align: center;
    }
    & > div {
        display: flex;
        width: 70%;

        flex-wrap: wrap;
        gap: .75rem;
        justify-content: center;
        align-items: center;
        & > span {
            display: block;
            width: 100%;
            text-align: center;
            color: var(--neutral-color)
        }
    }
`;

export const ButtonComponent = styled.button<{selected?: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 8px 16px;
    background-color: var(--neutral-color);
    color: black;
    border-radius: 4px;
    background-color: ${props => props.selected ? '#D18000':'var(--neutral-color)'};
    color: ${props => props.selected ? 'var(--neutral-color)':'#000000'};
    transition: .3s;
`;
