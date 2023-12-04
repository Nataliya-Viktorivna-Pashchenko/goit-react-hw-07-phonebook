export const selectContacts = state => state.contactsStore.contacts;
export const selectContactsIsLoading = state => state.contactsStore.isLoading;
export const selectContactsError = state => state.contactsStore.error;