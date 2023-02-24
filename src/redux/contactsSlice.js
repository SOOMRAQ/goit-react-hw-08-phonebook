import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => handlePending(state))
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) =>
        handleReject(state, action)
      )
      .addCase(addContact.pending, state => handlePending(state))
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) =>
        handlePending(state, action)
      )
      .addCase(deleteContact.pending, state => handlePending(state))
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) =>
        handlePending(state, action)
      )
      .addCase(changeContact.pending, state => handlePending(state))
      .addCase(changeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(changeContact.rejected, (state, action) =>
        handleReject(state, action)
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
