import React from 'react'
import './ProductList.css'
import ProductCard from './ProductCard.jsx';
const ProductList = () => {
  return (
    <div className='products'>
     <ProductCard
       key={1}

     />
    </div>
  )
}

export default ProductList
