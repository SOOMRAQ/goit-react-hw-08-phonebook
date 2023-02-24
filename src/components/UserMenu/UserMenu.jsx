import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import { StyledButton } from './UserMenu.styled';

const UserMenu = () => {
  const username = useSelector(selectUserName);
  return <StyledButton>{username}</StyledButton>;
};

export default UserMenu;
