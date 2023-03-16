import { useParams } from "react-router-dom";
import { useEffect } from "react"; //this will help run function to fetch products by ID when the component mounts
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/modules/products";

const SingleProduct = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>HALLO singleproduct and this is id : {id}</h1>
    </div>
  );
};

export default SingleProduct;
