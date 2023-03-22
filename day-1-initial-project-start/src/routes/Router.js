import { Route, Routes } from "react-router-dom";
import Products from "../components/views/Products";
import SingleProduct from "../components/views/SingleProduct";
import CartCheckOutPage from "../components/views/CartCheckOutPage";
import ContactUsPage from "../components/views/ContactUsPage";
import PageNotFound from "../components/views/PageNotFound";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartCheckOutPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />

        {/*ONLY MATCH THIS AS LAST RESORT WHEN NO OTHER ROUTES ARE MATCHING*/}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Router;
