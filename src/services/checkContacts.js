import { Notify } from 'notiflix';

const checkContacts = (contact, data) => {
  if (contact.name === data.name) {
    Notify.failure(`${data.name} is already in contacts.`);
    return contact;
  } else if (contact.number === data.number) {
    Notify.failure(
      `This number (${data.number}) is already in ${contact.name} contact.`
    );

    return contact;
  }
};

export default checkContacts;
