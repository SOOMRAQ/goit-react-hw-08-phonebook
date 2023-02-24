import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
} from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import checkContacts from 'services/checkContacts';
import { getContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/thunks';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isInContactsList = contacts.filter(contact =>
      checkContacts(contact, { name, number })
    ).length;

    if (!isInContactsList) {
      dispatch(addContactThunk({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </StyledLabel>

      <StyledButton type="submit">Save</StyledButton>
    </StyledForm>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
};
