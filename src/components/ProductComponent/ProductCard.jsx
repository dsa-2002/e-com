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
    onDelete(productId);
 }


  const handleEditProduct=()=>{
    onEdit(productId);
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
          // onClick={()=>navigate(`/updateProduct/${productId}`)}
          // onClick={onEdit(productId)}
          onClick={handleEditProduct}
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
