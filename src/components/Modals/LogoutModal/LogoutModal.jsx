import { useDispatch } from 'react-redux';
import { logout } from 'redux/thunks';
import {
  StyledBackdrop,
  StyledButton,
  StyledModal,
} from './LogoutModal.styled';

const LogoutModal = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    const backdrop = document.querySelector('.logout-backdrop');
    backdrop.classList.add('shown');
    dispatch(logout());
  };
  const closeModal = () => {
    const backdrop = document.querySelector('.logout-backdrop');
    backdrop.classList.remove('shown');
  };

  return (
    <StyledBackdrop className="logout-backdrop" onClick={closeModal}>
      <StyledModal className="logout-modal">
        <p>R u sure?</p>

        <div>
          <StyledButton className="accept" onClick={handleLogout}>
            Yes
          </StyledButton>
          <StyledButton className="cancel" onClick={closeModal}>
            No
          </StyledButton>
        </div>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default LogoutModal;
