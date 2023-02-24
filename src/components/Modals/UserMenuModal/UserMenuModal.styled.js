import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-family: 'Cinzel', serif;
  background: none;
  border: none;
  background-color: firebrick;
  padding: 8px;
  border-bottom-right-radius: 20px;
  transition: color 400ms ease;

  :hover {
    color: white;
  }
`;
