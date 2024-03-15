import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Hidden, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./AddProduct.css";
import { updateProductData } from "./data";

const AddProduct = () => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    Name: "",
    category: "",
    stock: 0,
    price: 0,
  });
    const [errors,setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const validateForm = ()=>{
    const errors={};
    if (!newProduct.Name.trim()) {
      errors.Name = "Name is required";
    }else if (typeof newProduct.Name !== 'string') {
      errors.Name = "Name must be a string";
    }
    if (!newProduct.category.trim()) {
      errors.category = "Category is required";
    }else if (typeof newProduct.category !== 'string') {
      errors.category = "Category must be a string";
    }
    if (newProduct.stock < 0) {
      errors.stock = "Stock cannot be negative";
    }
    if (newProduct.price < 0) {
      errors.price = "Price cannot be negative";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    if (validateForm()) {
      updateProductData(newProduct);
      navigate("/products");
    }
   
};

  return (
    <div className="add-product-page">
      <Paper elevation={3} style={paperStyle}>
        <h1 className="addProduct-header">Add Product</h1>
        <form onSubmit={handleAddProduct}>
          <div className="form-container">
            <TextField
              required
              className="text-field"
              label="Name"
              variant="outlined"
              name="Name"
              value={newProduct.Name}
              onChange={handleInputChange}
              error={!!errors.Name}
              helperText={errors.stock}
            />
            <TextField
              required
              className="text-field"
              label="Category"
              variant="outlined"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              error={!!errors.category}
              helperText={errors.stock}
            />
            <TextField
              required
              className="text-field"
              label="Stocks"
              variant="outlined"
              name="stock"
              type="number"
              value={newProduct.stock}
              onChange={handleInputChange}
              error={!!errors.stock}
              helperText={errors.stock}
            />
            <TextField
              className="text-field"
              required
              label="Price"
              variant="outlined"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={handleInputChange}
              error={!!errors.price}
              helperText={errors.price}
            />
            <Stack className="Stack-center" direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                onClick={handleAddProduct}
              >
                Add Product
              </Button>
            </Stack>
          </div>
        </form>
      </Paper>
    </div>
  );
};

const paperStyle = {
  padding: "30px 20px",
  width: 550,
  margin: "70px auto",
  borderRadius: 40,
  
};
export default AddProduct;
