import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import Product from "./Pages/Product/Product";
import { CartContainer } from "./context/Cartcontext";
import Cart from "./Pages/Cart/Cart";
import Addprod from "./Pages/AddProduct/Addprod";
import Navbar from "./Pages/Home/Navbar";
import { ProductContainer } from "./context/ProductContext";
import LoginPage from "./Components/Login/LoginPage";
import Editprod from "./Pages/EditProduct/Editprod";
import RegisterPage from "./Components/Register/RegisterPage";
import Admin from "./Pages/Admin/Admin";
import History from "./Pages/history/History";
import Productall from "./Pages/Home/Productall";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Admin" element={<Admin />} />
        </Routes>
        <CartContainer>
          <ProductContainer>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/UserHistory/:userName" element={<History />} />
              <Route path="/Product/:id" element={<Product />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Product/edit/:id" element={<Editprod />} />
              <Route path="/addproduct" element={<Addprod />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/Category/:name" element={<Productall />} />
            </Routes>
          </ProductContainer>
        </CartContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
