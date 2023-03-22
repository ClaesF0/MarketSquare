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
      <p className=" text-center text-3xl mt-4 ">Products</p>

      <div className="flex flex-wrap mx-auto justify-between w-5/6 ">
        {products.map((product) => (
          <div key={product.id} className="mx-auto p-2 ">
            <hgroup
              className="w-[300px] h-[480px] basis-1/4 shadow-lg max-w-1/2 sm:max-w-1/3 flex flex-col m-2 p-4 rounded-md"
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
                <label class="rating-label ">
                  <p className="text-xs ">Rated {product.rating}/5</p>
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
              <p className="mt-auto text-sm text-gray-400 line-through">
                {product.price} NOK
              </p>
              <p className="text-green-500 ">
                {product.discountPercentage}% discount!
              </p>
              <p>
                {" "}
                Now{" "}
                {(
                  product.price -
                  (product.price * product.discountPercentage) / 100
                ).toFixed(0)}{" "}
                NOK!
              </p>
              <span className="pl-2 mx-auto mt-auto border-2 border-stone-100 rounded-lg "></span>
            </hgroup>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
