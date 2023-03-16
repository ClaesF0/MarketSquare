import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/modules/productsReducer";

import Navbar from "./components/Navbar";
import Products from "./components/views/Products";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Navbar />
      <p className=" text-center text-3xl mt-4">Products</p>
      <Router />
    </>
  );
}

export default App;
