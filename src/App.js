import "./App.css";
import Navbar from "./Navbar/navbar";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/DashboardComponents/Dashboard.jsx";
import Orders from "./components/OrdersComponent/Orders.jsx";
import Product from "./components/ProductComponent/Product.jsx";
import AddProduct from "./components/ProductComponent/AddProduct.jsx";
import UpdateProduct from "./components/ProductComponent/updateproduct.jsx";
import CalenderView from "./components/CalenderComponent/CalenderView.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/addProduct" exact element={<AddProduct />} />
          <Route path="/editProduct/:id" exact element={<UpdateProduct />} />
          <Route path="/products" element={<Product />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/calendar" element={<CalenderView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
