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
