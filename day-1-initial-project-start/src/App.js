import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/modules/productsReducer";

import Navbar from "./components/Navbar";
import Products from "./components/views/Products";
import Router from "./routes/Router";

import Loader from "./components/shared/Loader";

function App() {
  const { isLoading } = useSelector((state) => state.loader);
  return (
    <>
      <Navbar />
      <Router />
      {isLoading && <Loader />}
    </>
  );
}

export default App;
