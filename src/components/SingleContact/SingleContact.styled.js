import styled from '@emotion/styled';

export const StyledItem = styled.li`
  flex-basis: calc(50% - 30px);
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  border: 1px dashed steelblue;
  border-radius: 50px;
  padding: 4px 10px;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 4px;
  font-size: 16px;
`;
