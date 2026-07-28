import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';

// main store for the app
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
