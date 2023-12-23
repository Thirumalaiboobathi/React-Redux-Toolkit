import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodosStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTodosSuccess(state, action) {
      state.loading = false;
      state.todos = action.payload;
    },
    fetchTodosFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addTodoSuccess(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodoSuccess(state, action) {
      state.todos = action.payload;
    },
    updateTodoSuccess(state, action) {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
  },
});

export const {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoSuccess,
  deleteTodoSuccess,
  updateTodoSuccess,
} = todosSlice.actions;

export default todosSlice.reducer;
