import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   contacts: [],
  filter: "",

};

const contactsSlice = createSlice({
    name: 'contacts',
    
    initialState,
  
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
      },
      
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
      },
    
     changeFilter(state, { payload }) {
        state.filter = payload;
    },
    },
   
});

export const { deleteContact, addContact, changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
