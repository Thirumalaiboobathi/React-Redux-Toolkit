import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from './../config';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  try {
    const response = await axios.get(`${config.api_endpoint_baseURL}/todos`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    throw Error('Failed to fetch todos');
  }
});

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoSuccess(state, action) {
      state.todos.push(action.payload);
      state.error = null;
    },
    updateTodoSuccess(state, action) {
      const { id, ...updatedTodo } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], ...updatedTodo };
        state.error = null;
      }
    },
    deleteTodoSuccess(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = null;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addTodoSuccess, updateTodoSuccess, deleteTodoSuccess } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
export default todosSlice.reducer;
