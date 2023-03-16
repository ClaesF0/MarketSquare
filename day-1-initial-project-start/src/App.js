import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/modules/listings";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.listings);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("products from app", products);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap mx-auto">
        {products.map((product) => (
          <div className="mx-auto  ">
            <hgroup className=" h-[350px] w-[300px] basis-1/4 border-2 border-gray-800 max-w-1/2 sm:max-w-1/3 flex flex-col m-2 p-2">
              <span className="text-gray-700 text-xl mx-auto">
                {product.title}
              </span>
              <img
                className="max-w-[200px] mx-auto bg-cover "
                src={product.images[0]}
              />
            </hgroup>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
