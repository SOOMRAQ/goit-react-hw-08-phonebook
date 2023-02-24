import axios from 'axios';

export const getContactsAPI = async () => {
  const response = await axios.get('/contacts');
  return response;
};

export const postContactAPI = async data => {
  const response = await axios.post('/contacts', data);
  return response;
};

export const deleteContactAPI = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response;
};

export const changeContactAPI = async (id, data) => {
  const response = await axios.patch(`/contacts/${id}`, data);
  return response;
};
