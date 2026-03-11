const initialState = {
  data: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case 'DELETE_NOTE':
      return {
        ...state,
        data: state.data.filter((note) => note.id !== action.payload),
      };

    default:
      return state;
  }
};

export default notesReducer;
