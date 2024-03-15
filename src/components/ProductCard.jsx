// import React,{useState,useEffect} from 'react'
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import Stack from '@mui/material/Stack';
// import './ProductCard.css'
// const ProductCard = ({id,Name,category,price,stock}) => {

//   const [onEdit,setOnEdit] =useState(false);
//   const [onDelete,setonDelete] = useState(null);
//   return (
//     <div className='Product-card'>
//        console.log(id,Name,category,price,stock);
//         <div className="product-details">
//             <h3 className="product-item-detail">Name:{Name}</h3>
//             <h3 className="product-item-detail">Category:{category}</h3>
//             <h3 className="product-item-detail">Price:{price}</h3>
//             <h3 className="product-item-detail">Stock:{stock}</h3>
//             <div className="buttons">
//             <Stack direction="row" spacing={2}>
//       <Button variant="contained"  color="success" startIcon={<AddIcon />}>
//         Add to Cart
//       </Button>
//       <Button variant="outlined"   startIcon={<DeleteIcon />}>
//         Delete
//       </Button>
//     </Stack>
//     </div>
//         </div>

//     </div>
//   )
// }

// export default ProductCard;

import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import "./ProductCard.css";
import productData from "./data";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ productId, Name, category, price, stock,onDelete,onEdit }) => {
  const navigate = useNavigate();
 const deletehandler=()=>{
   // backend endpoint for delete with productId 
    // productData=productData.filter((p)=>p.id !== productId)
    onDelete(productId);
 }


  return (
    <section className="product-item">
      <h3>Name: {Name}</h3>
      <h3>Category: {category}</h3>
      <h3>Price: {price}</h3>
      <h3>Stock:{stock}</h3>
      <Stack direction="row" spacing={7} className="button_">
        <Button
        
          variant="contained"
          color="success"
          startIcon={<EditIcon />}
          onClick={()=>navigate(`/addProduct/${productId}`)}
          // onClick={onEdit(productId)}
        >
          Edit
        </Button>
        <Button 
          className="button_delete"
        variant="outlined" startIcon={<DeleteIcon />} onClick={deletehandler}>
          Delete
        </Button>
      </Stack>
    </section>
  );
};

export default ProductCard;
