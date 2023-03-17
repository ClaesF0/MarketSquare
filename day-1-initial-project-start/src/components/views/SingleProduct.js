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
    <div className="">
      <hgroup>
        <h1 className="text-3xl text-gray-600 text-center">
          {singleProduct.title} from {singleProduct.id} {singleProduct.brand}{" "}
        </h1>
        <div className="flex">
          <img
            className="mx-auto w-1/3 sm:w-1/4"
            src={singleProduct.thumbnail}
          />
          <div>
            <p>{singleProduct.description}</p>

            <span>
              Ordinary price: {singleProduct.price} NOK{" "}
              <p className="text-lg font-bold text-green-500">
                now {singleProduct.discountPercentage} % off!{" "}
              </p>
            </span>
            <div className="flex items-center">
              Rating: 
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
          </div>
          <span>Currently {singleProduct.stock} pieces in stock.</span>
          <p>Category: {singleProduct.category}</p>
        </div>
      </hgroup>
    </div>
  );
};

export default SingleProduct;
