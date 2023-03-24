import { Link } from "react-router-dom";
const ProductList = ({ products }) => {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col gap-y-3"
          >
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-md text-gray-700 relative">
                  <Link to={`product/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {product.description}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900 line-through">
                NOK{product.price}
              </p>
            </div>
            <span className="">
              <p className="text-lg font-bold text-green-500">
                now {product.discountPercentage} % off!{" "}
              </p>{" "}
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(0)}{" "}
              NOK
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
            <Link
              to={`product/${product.id}`}
              className="py-2 px-4 bg-teal-500 text-white mt-auto text-center rounded-md hover:bg-teal-600"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProductList;
