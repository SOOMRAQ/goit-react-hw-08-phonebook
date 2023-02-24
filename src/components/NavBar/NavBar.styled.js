import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledList = styled.ul`
  display: flex;
  padding: 12px;
  gap: 16px;
  max-width: 200px;
  border-bottom-right-radius: 20px;
  background-color: steelblue;
`;
export const StyledItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
  transition: color 400ms ease;

  :hover {
    color: white;
  }
  &.active {
    color: white;
  }
`;
