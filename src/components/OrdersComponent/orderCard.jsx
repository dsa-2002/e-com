import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
const orderCard = ({orderId,customerName,price,orderDate,status,onDelete}) => {
  const deletehandler = ()=>{
    onDelete(orderId);
  }
  return (
    // <div className='orderCard-container'>
    <div className="ordercard">
    <h3>Order Id: {orderId}</h3>
    <h3>Customer Name: {customerName}</h3>
    <h3>Price: {price}</h3>
    <h3>Order Date: {orderDate}</h3>
    <h3>Status: {status}</h3>
    <Stack direction="row" spacing={10}>
    <Button variant="contained" color="success">
  View Details
</Button>
<IconButton aria-label="delete" onClick={deletehandler}>
        <DeleteIcon />
      </IconButton>

</Stack>
    </div>
    // </div>
  )
}


export default orderCard;