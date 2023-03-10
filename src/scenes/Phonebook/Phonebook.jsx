import Form from 'components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import PhonebookSection from 'components/Section/Section';
import { StyledContainer } from '../../components/App/App.styled';

const Phonebook = () => {
  return (
    <>
      <StyledContainer>
        <PhonebookSection title="Phonebook">
          <Form />
        </PhonebookSection>
        <PhonebookSection title="Contacts">
          <Filter />
          <ContactsList />
        </PhonebookSection>
      </StyledContainer>
    </>
  );
};

export default Phonebook;
