import styled from '@emotion/styled';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 24px;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  transition: color 400ms ease;

  :hover {
    color: steelblue;
  }
`;

export const StyledInput = styled.input`
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  font-family: 'Cinzel', serif;
  padding: 4px;
  transition: border-color 400ms ease;

  :hover,
  :focus {
    border-color: steelblue;
  }
`;
export const StyledButton = styled.button`
  cursor: pointer;
  font-family: 'Cinzel', serif;
  background: none;
  border: none;
  border: 1px solid steelblue;
  padding: 4px 16px;
  align-self: center;
  transition: color 400ms ease, background-color 400ms ease;

  :hover {
    background-color: steelblue;
    color: white;
  }
`;
