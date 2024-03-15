import React, { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";
import { Button, Hidden, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "../ProductComponent/AddProduct.css";
import  { updateEditProductData } from "./data";
const UpdateProduct = () => {
  const navigate = useNavigate();
  const {id}=useParams();
  console.log("indserx " ,id);
  const [values,setValues] = useState({
    id:id,
    Name:"",
    category:"",
    stock:"",
    price:"price"
  });

  useEffect(()=>{
    setValues({...values});
   

  },[]);
   
  const [errors,setErrors] = useState({});

  const handleInputChange = (e)=>{
    const { name, value } = e.target;
setValues({...values,[name]:value})
  }
  
  const validateForm = ()=>{
    const errors={};
    if (!values.Name.trim()) {
      errors.Name = "Name is required";
    }else if (typeof values.Name !== 'string') {
      errors.Name = "Name must be a string";
    }
    if (!values.category.trim()) {
      errors.category = "Category is required";
    }else if (typeof values.category !== 'string') {
      errors.category = "Category must be a string";
    }
    if (values.stock < 0) {
      errors.stock = "Stock cannot be negative";
    }
    if (values.price < 0) {
      errors.price = "Price cannot be negative";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }; 

  const handleSubmit=(e)=>{
     e.preventDefault();
     if (validateForm()) {
       updateEditProductData(values);
       navigate("/products")
     
    }
   
  }
  return (
  
    <div className="add-product-page">
      <Paper elevation={3} style={paperStyle}>
        <h1 className="addProduct-header">Update Product</h1>
        <form 
        onSubmit={handleSubmit}
        >
          <div className="form-container">
            <TextField
              required
              className="text-field"
              label="Name"
              variant="outlined"
              name="Name"
              value={values.Name}
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
              value={values.category}
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
              value={values.stock}
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
              value={values.price}
              onChange={handleInputChange}
              error={!!errors.price}
              helperText={errors.price}
            />
            <Stack className="Stack-center" direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                // onClick={handleSubmit}
              >
                Update
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
export default UpdateProduct;
