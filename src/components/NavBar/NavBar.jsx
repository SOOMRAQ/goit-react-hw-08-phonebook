import { FaBook, FaSignInAlt } from 'react-icons/fa';
import { StyledItem, StyledList, StyledNavLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <StyledList>
      <StyledItem>
        <StyledNavLink to={'login'}>
          <FaSignInAlt />
          Login
        </StyledNavLink>
      </StyledItem>
      <StyledItem>
        <StyledNavLink to={'register'}>
          <FaBook />
          Register
        </StyledNavLink>
      </StyledItem>
    </StyledList>
  );
};

export default NavBar;
