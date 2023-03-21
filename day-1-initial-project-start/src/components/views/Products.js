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
    <>
      <p className=" text-center text-3xl mt-4">Products</p>

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

                <label class="rating-label">
                  <strong className="text-sm">Rated {product.rating}/5</strong>
                  <input
                    aria-label={`Rating ${product.rating} out of 5`}
                    class="rating"
                    max="5"
                    readonly
                    step="0.01"
                    style={{ "--fill": "#0097a7", "--value": product.rating }}
                    type="range"
                  />
                </label>

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
    </>
  );
};

export default Products;
