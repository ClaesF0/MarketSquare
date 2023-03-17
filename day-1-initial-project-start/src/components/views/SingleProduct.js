import { useParams } from "react-router-dom";
import { useEffect } from "react"; //this will help run function to fetch products by ID when the component mounts
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/modules/productsReducer";

const SingleProduct = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    console.log(id);
    console.log("id here", id);
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

  return (
    <div className="w-5/6 mx-auto shadow-md p-2">
      <hgroup className="">
        <p className="text-3xl text-gray-600 text-center px-auto">
          {singleProduct.title} from {singleProduct.brand}{" "}
        </p>
        <div className="sm:flex flex-row m-2">
          <img
            className="mx-auto w-1/2 sm:w-1/2 "
            src={singleProduct.thumbnail}
          />
          <div className="info-holder-div m-2">
            <p>{singleProduct.description}</p>

            <span className="">
              Ordinary price: {singleProduct.price} NOK{" "}
              <p className="text-lg font-bold text-green-500">
                now {singleProduct.discountPercentage} % off!{" "}
              </p>
            </span>
            <div className="flex items-center">
              Rating: {singleProduct.rating}
              {[...Array(5)].map((_, i) => (
                <svg
                  aria-label={`Rating ${singleProduct.rating} out of 5`}
                  key={i}
                  className={`h-5 w-5 fill-current ${
                    i < singleProduct.rating
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0l3.09 6.3 6.9.99-5 4.86 1.18 6.88L10 16.25l-6.07 3.28 1.18-6.88-5-4.86 6.9-.99L10 0z" />
                </svg>
              ))}
            </div>
            <span>Currently {singleProduct.stock} pieces in stock.</span>
            <p>Category: {singleProduct.category}</p>
            <button className="p-2 mt-2 bg-cyan-700 bottom-0 text-gray-200">
              Add to cart
            </button>
          </div>
        </div>
      </hgroup>
    </div>
  );
};

export default SingleProduct;
