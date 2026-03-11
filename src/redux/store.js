import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counter';
import notesReducer from './reducers/notes';

const rootReducer = combineReducers({
  counter: counterReducer,
  notes: notesReducer,
});

const store = createStore(rootReducer);

export default store;
