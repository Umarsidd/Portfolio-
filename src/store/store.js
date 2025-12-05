import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    contact: contactReducer,
  },
});
