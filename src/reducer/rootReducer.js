import { combineReducers } from 'redux';
import todosReducer from './todosSlice';
import { todoService } from './../reducer/services'; // Import your RTK-Query service

const rootReducer = combineReducers({
  todos: todosReducer,
  [todoService.reducerPath]: todoService.reducer,
});

export default rootReducer;
