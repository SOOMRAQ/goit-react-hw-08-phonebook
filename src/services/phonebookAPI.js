import axios from 'axios';
axios.defaults.baseURL = 'https://63f79cc7e40e087c9592bcd8.mockapi.io/contacts';

export const addContact = async data => {
  const response = await axios.post('', data);
  return response;
};

export const deleteContact = async id => {
  const response = await axios.delete(id);
  return response;
};

export const fetchContacts = async () => {
  const response = await axios.get();
  return response;
};
