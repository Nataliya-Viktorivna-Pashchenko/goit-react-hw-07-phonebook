import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios.get(
    `https://65623f81dcd355c08324b0a9.mockapi.io/contacts`
  );

  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(
    `https://65623f81dcd355c08324b0a9.mockapi.io/contacts`, contact
  );

  return data;
};
export const deleteContact = async (id) => {
  const { data } = await axios.delete(
    `https://65623f81dcd355c08324b0a9.mockapi.io/contacts/${id}`
  );

  return data;
};