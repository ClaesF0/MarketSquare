import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    isError: false,
    errorMessage: "Sorry we have a very bad issue ;__; ",
  },
  reducers: {
    SET_ERROR: (state, action) => {
      state.isError = action.payload;
    },
    SET_ERROR_MESSAGE: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export default errorSlice.reducer;

const { SET_ERROR } = errorSlice.actions;
const { SET_ERROR_MESSAGE } = errorSlice.actions;

export const setError = (hasError, ErrorMessage) => (dispatch) => {
  dispatch(SET_ERROR(hasError));
  dispatch(SET_ERROR_MESSAGE(ErrorMessage));
};
