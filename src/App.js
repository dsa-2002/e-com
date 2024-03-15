
import './App.css';
import Navbar from "./Navbar/navbar"
import React,{useState,useEffect} from "react"
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Dashboard from "./components/DashboardComponents/Dashboard.jsx"
import Orders from "./components/OrdersComponent/Orders.jsx"
import Product from "./components/Product.jsx"
import AddProduct from "./components/AddProduct.jsx";
import CalenderView from "./components/CalenderComponent/CalenderView.jsx"

import productData from "./components/data";
function App() {

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // fetching data from api or backend
  //   setProducts(productData);
  // }, []);
  // const navigate = useNavigate();

  // const handleAddProduct = () => {
  //   navigate("/addProduct");

  // };
 

  // const addProduct = (newProduct) => {
  //   console.log("test",newProduct)
  //   products.push(newProduct)
  //   setProducts([...products, newProduct]);   
  // };
 

  return (
    <div className="App">
    <Router>
       <Navbar/>
    
       
        <Routes>

        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/addProduct" exact element={<AddProduct />} />
        <Route path="/products" element={<Product/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/calendar" element={<CalenderView/>} />
        </Routes>

    

    </Router>
    </div>
  );
}

export default App;
