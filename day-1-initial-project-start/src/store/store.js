//this will help you create the redux store
import { configureStore } from "@reduxjs/toolkit";

//this will help you to combine all your modules e.g. (products, productDetails, etc)
import { combineReducers } from "@reduxjs/toolkit";

import listings from "./modules/listings";

//here i am combining my modules
const reducer = combineReducers({
  //list of my modules
  listings,
});

//here i am creating my store
const index = configureStore({
  reducer,
});

export default index;
