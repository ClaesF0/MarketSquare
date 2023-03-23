import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsInCart: [],
    numberOfProductsInCart: 0,
  },
  reducers: {
    //here we write the functions which will update the state
    ADD_PRODUCT_TO_CART: (state, action) => {
      //TODO i will update my productsInCart-array , i expect action.payload and need to update cart, therefore i need actions and connect button
      console.log("action", action);
      state.productsInCart = [...state.productsInCart, action.payload];
      state.numberOfProductsInCart = state.productsInCart.length;
      console.log("state.productsInCart.length", state.productsInCart.length);
    },
    REMOVE_PRODUCT_FROM_CART: (state, action) => {
      console.log("state", state);
      console.log("action", action);
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== action.payload
      );
      state.numberOfProductsInCart = state.productsInCart.length;
    },
  },
});

export default cartSlice.reducer;

//actions
const { ADD_PRODUCT_TO_CART } = cartSlice.actions;
const { REMOVE_PRODUCT_FROM_CART } = cartSlice.actions;

export const addSingleProductToCart = (productData) => (dispatch) => {
  console.log("productData", productData);
  dispatch(ADD_PRODUCT_TO_CART(productData));
};

export const removeSingleProductFromCart = (productId) => (dispatch) => {
  console.log("productId", productId);
  dispatch(REMOVE_PRODUCT_FROM_CART(productId));
};
