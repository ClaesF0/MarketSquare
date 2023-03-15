import { createSlice } from "@reduxjs/toolkit";

/*
//Slice. 
Slice is where i will create my slice - 
slice in redux is a function called createSlice, 
we can put in init state, name AND reducers
in the reducers is where we have functions to change or amend state 
*/

const listingsSlice = createSlice({
  name: "listings",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    //here we declare functions whcih amend our state
    SET_PRODUCTS: (state, action) => {
      //state is the currnt state at this time - action: it will have new state we get from apicall
      state.products = action.payload;
    },
  },
});

export default listingsSlice.reducer;

/*
//Actions
Action is where we make API-calls, we never change state in actions

*/

const { SET_PRODUCTS } = listingsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log("data.products", data.products);
    dispatch(SET_PRODUCTS(data.products));
  } catch (e) {
    //handle any errors that occur during the api call fetchproducts
    return console.error(e);
  }
};
