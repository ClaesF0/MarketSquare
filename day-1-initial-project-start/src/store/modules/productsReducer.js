import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

/*
//Slice. 
Slice is where i will create my slice - 
slice in redux is a function called createSlice, 
we can put in init state, name AND reducers
in the reducers is where we have functions to change or amend state 
*/

const productsSlice = createSlice({
  name: "productsReducer",
  initialState: {
    products: [],
    singleProduct: {},
    total: 0,
  },
  reducers: {
    //here we declare functions whcih amend our state
    SET_PRODUCTS: (state, action) => {
      //state is the currnt state at this time - action: it will have new state we get from apicall
      console.log("action.payload", action.payload);
      state.products = action.payload;
    },
    SET_SINGLE_PRODUCT: (state, action) => {
      state.singleProduct = action.payload;
    },
  },
});

export default productsSlice.reducer;

/*
//Actions
Action is where we make API-calls, we never change state in actions

*/

const { SET_PRODUCTS } = productsSlice.actions;
const { SET_SINGLE_PRODUCT } = productsSlice.actions;
//this will fetch multiple products
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

//this will fetch single product by ID
export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const singleProductData = await response.json();
    dispatch(SET_SINGLE_PRODUCT(singleProductData));
  } catch (e) {}
};
