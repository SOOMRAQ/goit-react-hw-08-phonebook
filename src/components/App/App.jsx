import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/thunks';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={1}>
        <Route index element={3} />
        <Route path="/register" element={4} />
        <Route path="/contacts" element={5} />
      </Route>
      <Route path="*" element={2}></Route>
    </Routes>
  );
};

export default App;
