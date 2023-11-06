import styled from 'styled-components';


export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  gap: 4px;
  margin: 10px 0 24px;
  height: 70px;
`;

export const PaginationButton = styled.button<{disabled?: boolean}>`
  border: none;
  padding: 8px;
  width: 32px;
  height: 32px;
  outline: none;
  border: none;
  border-radius: 4px;
  color: var(--neutral-color);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-primary);
  cursor: ${({ disabled }) => disabled? 'not-allowed' : 'pointer'};
`;

export const PaginationStep = styled(PaginationButton)<{active: boolean}>`
  background: ${props => props.active ? 'var(--background-secondary)' : 'var(--background-primary)'};
`;