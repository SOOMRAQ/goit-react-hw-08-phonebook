import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/thunks';
import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './RegistrationForm.styled';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <StyledDiv>
      <h2>
        <span style={{ color: 'steelblue' }}>Create</span>
        <hr /> your account
      </h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </StyledLabel>
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
        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default RegistrationForm;
