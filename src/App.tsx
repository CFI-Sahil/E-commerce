import Signin from "./Components/Account/Signin";
import Cart from "./Components/Cart_bag/Cart";
import Category_Page from "./Components/Category_Section/Category_Page";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Components/Products_details/ProductDetails";
import ScrollToTop from "./Components/ScrollToTop";
import ViewAll from "./Components/view-All/ViewAll";
import Home from "./Home";

import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/category/:categoryName" element={<Category_Page />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/view-all/:categoryName" element={<ViewAll />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default App;
