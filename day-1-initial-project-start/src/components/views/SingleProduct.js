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
            <label class="rating-label">
              <strong>Average rating is {singleProduct.rating}/5</strong>
              <input
                aria-label={`Rating ${singleProduct.rating} out of 5`}
                class="rating"
                max="5"
                readonly
                step="0.01"
                style={{ "--fill": "#0097a7", "--value": singleProduct.rating }}
                type="range"
              />
            </label>

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
