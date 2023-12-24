import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { todoService } from './../reducer/services'; // Import your RTK-Query service

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoService.middleware),
});

// Automatically set up listeners for all defined endpoints
setupListeners(store.dispatch);


