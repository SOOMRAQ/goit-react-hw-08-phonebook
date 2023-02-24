import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import SingleContact from 'components/SingleContact';
import { StyledList } from './ContactsList.styled';
import { fetchContactsThunk } from 'redux/thunks';
import { useEffect } from 'react';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filteredContacts = () => {
    if (contacts?.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue)
      );
    }
  };

  return (
    <>
      <StyledList>
        {filteredContacts()?.map(({ id, name, number }) => {
          return <SingleContact key={id} id={id} name={name} number={number} />;
        })}
      </StyledList>
    </>
  );
};

export default ContactsList;
