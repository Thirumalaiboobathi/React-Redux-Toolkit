import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import { todoService } from './../reducer/services';

const rootReducer = combineReducers({
  todos: todosReducer,
  [todoService.reducerPath]: todoService.reducer,
});

export default rootReducer;
