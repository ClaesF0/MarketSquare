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

      <Router />
    </>
  );
}

export default App;
