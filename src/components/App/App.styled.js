import styled from '@emotion/styled';
import background from '../../images/notebook.png';

export const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  height: 666px;
  width: 506px;
  margin: 0 auto;
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  transition: background-color 400ms ease;
`;
