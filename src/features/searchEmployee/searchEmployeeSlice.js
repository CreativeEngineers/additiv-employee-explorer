import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEmployeeInfo } from "./searchEmployeeAPI";

const initialState = {
  employee: {
    name: "",
  },
  loading: false,
  hasErrors: false,
};

/**
 * This async method is to call the backend api and handle the side effects
 * and this will invoke the pending, fullfilled actions for the respective
 * action being performed
 * @returns {Object}
 */
export const fetchEmployeeDetails = createAsyncThunk(
  "searchEmployee/employeeByName",
  async (employeeName, { dispatch }) => {
    try {
      const employeeTree = await getEmployeeInfo(employeeName);
      return employeeTree;
    } catch (error) {
      console.warn(error);
      dispatch(fetchEmployeeDetailsError());
    }
  }
);

/**
 * This is the searchEmployeeSlice where we will bootstrap all the actions
 * and reducer methods and even the side effects can be handled
 */
export const searchEmployeeSlice = createSlice({
  name: "searchEmployee",
  initialState,
  reducers: {
    fetchEmployeeDetailsError: (state) => {
      return {
        ...state,
        hasErrors: true,
      };
		},
		resetEmployeeDetails: (state) => {
			return {
				...state,
				employee: {},
				loading: false,
				hasErrors: false
			}
		}
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeeDetails.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(fetchEmployeeDetails.fulfilled, (state, action) => {
        if (action.payload) {
          return {
            ...state,
            employee: {
							...state.employee,
							name: action.meta.arg,
              [action.meta.arg]: action.payload,
            },
            loading: false,
          };
        } else {
					return {
            ...state,
            loading: false,
          };
				}
      });
  },
});

export const { fetchEmployeeDetailsError, resetEmployeeDetails } = searchEmployeeSlice.actions;

export const getEmployee = (state) => state.searchEmployee.employee;

export const hasError = (state) => state.searchEmployee.hasErrors;

export default searchEmployeeSlice.reducer;
