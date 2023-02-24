import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import LogoutModal from 'components/Modals/LogoutModal';
import UserMenuModal from 'components/Modals/UserMenuModal';
import NavBar from 'components/NavBar';
import UserMenu from 'components/UserMenu';

const Nav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <>
          <LogoutModal />
          <UserMenuModal />
        </>
      )}
      <header>{isLoggedIn ? <UserMenu /> : <NavBar />}</header>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Nav;
