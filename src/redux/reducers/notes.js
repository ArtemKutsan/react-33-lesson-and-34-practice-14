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

    case 'UPDATE_NOTE':
      return {
        ...state,
        data: state.data.map((note) => (note.id === action.payload.id ? action.payload : note)),
      };

    default:
      return state;
  }
};

export default notesReducer;
