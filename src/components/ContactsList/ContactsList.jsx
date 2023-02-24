import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/thunks';
import SingleContact from 'components/SingleContact';
import { StyledList } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
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
        {filteredContacts() ? (
          filteredContacts()?.map(({ id, name, number }) => {
            return (
              <SingleContact key={id} id={id} name={name} number={number} />
            );
          })
        ) : (
          <div>
            <h3>No contacts</h3>
          </div>
        )}
      </StyledList>
    </>
  );
};

export default ContactsList;
