import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: false,
  },
  reducers: {
    //here we have functions which will amend the state only
    SET_LOADER: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default loaderSlice.reducer;

const { SET_LOADER } = loaderSlice.actions;

//actions

export const setLoadingState = (loadingStatus) => async (dispatch) => {
  dispatch(SET_LOADER(loadingStatus));
};
