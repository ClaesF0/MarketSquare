import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/modules/productsReducer";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap mx-auto mt-4 justify-between">
      {products.map((product) => (
        <div key={product.id} className="mx-auto  ">
          <hgroup className=" h-[350px] w-[300px] basis-1/4 border-2 border-gray-800 max-w-1/2 sm:max-w-1/3 flex flex-col m-2 p-2">
            <Link to={`product/${product.id}`}>
              <img
                className="h-[200px] mx-auto bg-cover "
                src={product.images[0]}
              />
              <span className="text-gray-700 text-xl mx-auto">
                {product.title}
              </span>
              <p className="mt-1 text-sm text-gray-500">
                {product.description}
              </p>
            </Link>
            <span className=" mx-auto mt-2">
              {" "}
              Price: {product.price} NOK{" "}
              <button className="p-2 bg-cyan-700 bottom-0 text-gray-200">
                Add to cart
              </button>
            </span>
          </hgroup>
        </div>
      ))}
    </div>
  );
};

export default Products;
