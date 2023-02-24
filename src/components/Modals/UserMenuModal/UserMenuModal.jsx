import { IoMdLogOut } from 'react-icons/io';
import { StyledButton } from './UserMenuModal.styled';

const UserMenuModal = () => {
  const preventLogoutModal = () => {
    const userMenuBackdrop = document.querySelector('.user-menu-backdrop');
    userMenuBackdrop.classList.remove('shown');
    document.querySelector('.logout-backdrop').classList.add('shown');
  };

  return (
    <div className="user-menu-backdrop">
      <StyledButton
        className="logout-button"
        type="button"
        onClick={preventLogoutModal}
      >
        LogOut
        <IoMdLogOut />
      </StyledButton>
    </div>
  );
};

export default UserMenuModal;
