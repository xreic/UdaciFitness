export const RECIEVE_ENTRIES = 'RECIEVE_ENTRIES';
export const ADD_ENTRY = 'ADD_ENTRY';

export const receiveEntries = (entries) => ({
  type: RECIEVE_ENTRIES,
  entries
});

export const addEntry = (entry) => ({
  type: ADD_ENTRY,
  entry
});
