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
    <div className="flex flex-wrap mx-auto justify-between w-5/6">
      {products.map((product) => (
        <div key={product.id} className="mx-auto p-2 ">
          <hgroup
            className="w-[300px] h-[440px] basis-1/4 shadow-lg max-w-1/2 sm:max-w-1/3 flex flex-col m-2 p-4"
            style={{ display: "flex", flexGrow: 1 }}
          >
            <Link to={`/product/${product.id}`}>
              <img
                className="h-[200px] mx-auto my-2 bg-cover shadow-sm hover:shadow-blue-200 hover:shadow-md"
                src={product.images[0]}
              />
              <span className="text-gray-700 text-sm font-semibold mx-auto">
                {product.title}
              </span>

              <div className="flex items-center">
                Rating: {product.rating}
                {[...Array(5)].map((_, i) => (
                  <svg
                    aria-label={`Rating ${product.rating} out of 5`}
                    key={i}
                    className={`h-5 w-5 fill-current ${
                      i < product.rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 0l3.09 6.3 6.9.99-5 4.86 1.18 6.88L10 16.25l-6.07 3.28 1.18-6.88-5-4.86 6.9-.99L10 0z" />
                  </svg>
                ))}
              </div>

              <p className="mt-2 text-sm text-gray-500">
                {product.description.slice(0, 80) +
                  (product.description.length > 80 ? "..." : ".")}
              </p>
            </Link>
            <p className="mt-auto text-sm text-gray-400">
              Price: {product.price}NOK{" "}
            </p>
            <p className="text-green-500 ">
              {product.discountPercentage}% discount!
            </p>
            <span className="pl-2 mx-auto mt-auto border-2 border-stone-100 rounded-lg ">
              {" "}
              Now{" "}
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(0)}{" "}
              NOK
              <button className="p-2 ml-1 bg-cyan-700 text-gray-200 mb-0 rounded-r-md  hover:bg-blue-500 hover:text-white ">
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
