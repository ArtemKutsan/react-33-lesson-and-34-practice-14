export const addNoteAction = (data) => {
  return {
    type: 'ADD_NOTE',
    payload: data,
  };
};

export const deleteNoteAction = (id) => {
  return {
    type: 'DELETE_NOTE',
    payload: id,
  };
};

export const updateNoteAction = (note) => ({
  type: 'UPDATE_NOTE',
  payload: note,
});
