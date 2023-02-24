import styled from '@emotion/styled';

export const StyledInput = styled.input`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  font-family: 'Cinzel', serif;
  padding: 4px;
  transition: border 400ms ease;

  :hover,
  :focus {
    border-color: steelblue;
  }
`;
