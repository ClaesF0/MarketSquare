import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { setLoadingState } from "./loaderSlice";

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
//we have two functions beacuase its redux pattern, its not recommended with a single one.
export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoadingState(true)); //here we show the loader until call is done
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log("data.products", data.products);
    dispatch(SET_PRODUCTS(data.products));
    dispatch(setLoadingState(false)); //here we hide the loader
  } catch (e) {
    //handle any errors that occur during the api call fetchproducts
    return console.error(e);
  }
};

//this will fetch single product by ID
export const fetchSingleProduct = (id) => async (dispatch) => {
  dispatch(setLoadingState(true)); //here we show the loader until call is done
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const singleProductData = await response.json();
    dispatch(SET_SINGLE_PRODUCT(singleProductData));
    dispatch(setLoadingState(false)); //here we hide the loader
  } catch (e) {}
};
