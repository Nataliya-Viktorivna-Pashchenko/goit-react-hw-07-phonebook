import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contactsStore.contacts;
export const selectContactsIsLoading = state => state.contactsStore.isLoading;
export const selectContactsError = state => state.contactsStore.error;
export const selectContactsFilter = state => state.contactsStore.filter;

export const selectFilterContacts = createSelector([selectContacts, selectContactsFilter],
    (contacts, filter) => contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase().trim())));
    