import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/thunks';
import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <StyledDiv>
      <h2>
        <span style={{ color: 'steelblue' }}>Sign</span> <hr />
        in
      </h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Email
          <StyledInput
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledInput
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </StyledLabel>
        <StyledButton type="submit">Log in</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default LoginForm;
