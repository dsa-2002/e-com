import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Hidden, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./AddProduct.css";
import productData, { updateProductData } from "./data";

const AddProduct = () => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    Name: "",
    category: "",
    stock: 0,
    price: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    // productData.push(newProduct);
    updateProductData(newProduct);
    // console.log("newProduct clicked ", newProduct);
    navigate('/products'); 
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
            />
            <TextField
              required
              className="text-field"
              label="Category"
              variant="outlined"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
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
// const TextFieldStyle = { margin: 7 };
export default AddProduct;
