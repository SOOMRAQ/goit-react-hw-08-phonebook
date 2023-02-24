import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/thunks';
import Nav from 'components/Nav';
import { PrivateRoute, RestrictRoute } from 'components/Routes/Routes';

const LoginPage = lazy(() => import('scenes/LoginPage'));
const RegistrationPage = lazy(() => import('scenes/RegistrationPage'));
const Phonebook = lazy(() => import('scenes/Phonebook'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route
          index
          element={
            <RestrictRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<Phonebook />} />}
        />
      </Route>
      <Route
        path="*"
        element={
          <RestrictRoute redirectTo="/contacts" component={<LoginPage />} />
        }
      ></Route>
    </Routes>
  );
};

export default App;
