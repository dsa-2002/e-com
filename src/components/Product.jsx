// import React,{useState} from 'react'

// // import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// // import AddIcon from '@mui/icons-material/Add';
// import Stack from '@mui/material/Stack';
// import './ProductCard.css'

// import {useNavigate} from 'react-router-dom'
// import ProductCard from './ProductCard.jsx';
// import ProductList from './ProductList'
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import Fab from "@mui/material/Fab";
// import Tooltip from '@mui/material/Tooltip';
// import './Product.css'
// import productData from "./data.jsx";
// const Product = () => {
//    const navigate = useNavigate();
//   const [products,setProducts] = useState([{id:1,name:'Product 1',category:'category 1',price:'100',stock:'21'}])

//   const [newProduct,setNewProduct] = useState({
//     name:'',
//     category:'',
//     price:0,
//     stock:0
//   });

//   const [isEditing,setIsEditing] = useState(false);
//   const [editedProduct,setEditedProduct] = useState(null);

//   const handleInputChange=(e)=>{
//     const {name,value} = e.target;
//     setNewProduct({...newProduct,[name]:value});
//   };

//   const addProduct = ()=>{
//     setProducts([...products,{...newProduct,id:products.length+1}]);
//     setNewProduct({
//       name:'',
//       category:'',
//       price:0,
//       stock:0
//     })

//   }

//   const editProduct = (product) => {
//     setIsEditing(true);
//     setEditedProduct(product);
//     setNewProduct(product);
//   };

//   const updateProduct = () => {
//     setProducts(products.map((p) => (p.id === editedProduct.id ? newProduct : p)));
//     setNewProduct({
//       name: '',
//       category: '',
//       price: 0,
//       stock: 0,
//     });
//     setIsEditing(false);
//     setEditedProduct(null);
//   };

//   const deleteProduct = (productId) => {
//     setProducts(products.filter((p) => p.id !== productId));
//   };

//   const handleAddProduct = () => {
//     // Redirect to "/addProduct" when AddIcon is clicked
//     navigate("/addProduct");
//   };
//   return (
//     <div className="products-page">

//   Products...
//    {/* <div className="add-product-button">

//         <Tooltip title="Add Product">
//         <Fab color="primary" style={{ position: "fixed", bottom: 16, right: 35 }} onClick={handleAddProduct}>
//           <AddIcon />
//         </Fab>
//       </Tooltip>
//    </div> */}

//     </div>
//   )
// }

// export default Product

import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import ProductCard from "./ProductCard";
import productData from "./data";
// import AddProduct from "./AddProduct.jsx";
import "./Product.css";
const Product = () => {
  const [product, setProduct] = useState([]);
  


  useEffect(() => {
    // fetching data from api or backend
    setProduct(productData);
  }, []);
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/addProduct");

  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = product.filter((p) => p.id !== productId);
    setProduct(updatedProducts);
    // Call your backend API to delete the product using productId
    // Example API call:
    // deleteProduct(productId).then(() => {
    //   setProducts(updatedProducts);
    // });
  };

  const handleEditProduct= (productId)=>{
    // navigate(`/addProduct/${productId}`)
  }
  return (
    <div>
      <div className="product-list">
        {product.map((p) => (
          <ProductCard
            key={p.id}
            productId={p.id}
            Name={p.Name}
            category={p.category}
            price={p.price}
            stock={p.stock}
            onDelete={handleDeleteProduct}
            onEdit={handleEditProduct}
          />
        ))}
      </div>
      <div className="add-product-button">
        <Tooltip title="Add Product">
          <Fab
            color="primary"
            style={{ position: "fixed", bottom: 16, right: 35,border: "2px solid white" }}
            onClick={handleAddProduct}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
};

export default Product;
