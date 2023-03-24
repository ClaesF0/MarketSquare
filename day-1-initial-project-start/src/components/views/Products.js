import React from "react";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/modules/productsReducer";
import ProductList from "../ProductList";
import ErrorComponent from "../shared/ErrorComponent";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  const { isError } = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const memoProducts = useMemo(() => products, [products]);
  return (
    <>
      <p className=" text-center text-3xl mt-4 ">Products</p>

      {isError ? <ErrorComponent /> : <ProductList products={memoProducts} />}
    </>
  );
};

export default Products;
