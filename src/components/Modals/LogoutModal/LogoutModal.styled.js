import styled from '@emotion/styled';

export const StyledBackdrop = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: all 250ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  &.shown {
    opacity: 1;
    pointer-events: all;
  }
`;

export const StyledModal = styled.div`
  padding: 28px 56px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  div {
    display: flex;
    gap: 15px;
  }
  p {
    font-size: 18px;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  font-family: 'Cinzel', serif;
  background: none;
  border: none;
  border: 1px solid steelblue;
  padding: 4px 16px;
  transition: color 400ms ease, background-color 400ms ease;

  :hover {
    background-color: steelblue;
    color: white;
  }

  &.accept {
    border-color: green;
    :hover {
      background-color: green;
    }
  }

  &.cancel {
    border-color: firebrick;
    :hover {
      background-color: firebrick;
    }
  }
`;
