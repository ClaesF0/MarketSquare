import { useParams } from "react-router-dom";
import { useEffect } from "react"; //this will help run function to fetch products by ID when the component mounts
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/modules/productsReducer";
import { addSingleProductToCart } from "../../store/modules/cartSlice";

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
    <div className="w-5/6 mx-auto shadow-md p-2 ">
      <hgroup className="">
        <p className="text-3xl text-gray-600 text-center px-auto">
          {singleProduct.title} from {singleProduct.brand}{" "}
        </p>
        <div className="sm:flex flex-row m-2">
          {singleProduct.images && singleProduct.images.length && (
            <img
              className="mx-auto w-1/2 sm:w-1/2 "
              src={singleProduct.thumbnail}
            />
          )}
          {/*

<div
            id="default-carousel"
            class="relative w-full"
            data-carousel="slide"
          >
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={singleProduct.thumbnail}
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/docs/images/carousel/carousel-2.svg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/docs/images/carousel/carousel-3.svg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/docs/images/carousel/carousel-4.svg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="/docs/images/carousel/carousel-5.svg"
                  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>

            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>

            <button
              type="button"
              class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
*/}

          <div className="info-holder-div m-2">
            <p>{singleProduct.description}</p>

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
            <span className="">
              Ordinary price: {singleProduct.price} NOK{" "}
              <p className="text-lg font-bold text-green-500">
                now {singleProduct.discountPercentage} % off!{" "}
              </p>
            </span>
            <span className="pl-2 py-2 mx-auto mt-auto border-2 border-stone-100 rounded-lg ">
              {(
                singleProduct.price -
                (singleProduct.price * singleProduct.discountPercentage) / 100
              ).toFixed(0)}{" "}
              NOK
              <button
                type="submit"
                className="p-2 ml-1 bg-cyan-700 text-gray-200 mb-0 rounded-r-md  hover:bg-blue-500 hover:text-white "
                onClick={() => dispatch(addSingleProductToCart(singleProduct))}
              >
                Add to cart
              </button>
            </span>
          </div>
        </div>
      </hgroup>
    </div>
  );
};

export default SingleProduct;
