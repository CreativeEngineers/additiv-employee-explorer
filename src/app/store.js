import { configureStore } from '@reduxjs/toolkit';
import searchEmployeeReducer from '../features/searchEmployee/searchEmployeeSlice';

export const store = configureStore({
  reducer: {
    searchEmployee: searchEmployeeReducer
  },
});
