import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from 'components/Api/Api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
   
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const result = await addContact(data);
      if (data.onSuccess) {
        data.onSuccess();
      }
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  
  }
);
  
  export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: "",

};

const contactsSlice = createSlice({
  name: 'contacts',
    
  initialState,
  
  reducers: {
       
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
    extraReducers: builder => 
      builder
        .addCase(fetchContacts.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.contacts = payload;
        })
        
        
        .addCase(addNewContact.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.contacts = [...state.contacts, payload];
        })
        
        .addCase(removeContact.fulfilled, (state, { payload }) => {
          state.isLoading = false;
          state.contacts = state.contacts.filter(contact => contact.id !== payload);
        })
        
        .addMatcher(
          isAnyOf(
            fetchContacts.pending,
            addNewContact.pending,
            removeContact.pending
          ),
          state => {
            state.isLoading = true;
            state.error = null;
          }
        )
        .addMatcher(
          isAnyOf(
            fetchContacts.rejected,
            addNewContact.rejected,
            removeContact.rejected
          ),
          (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
          }
        )
  });

export const { changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
