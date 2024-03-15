let productData = [
    { "Name": "Product-1", "category": "Shirt", "price": 500, "stock": 15, "id": "1" },
    { "Name": "Product-2", "category": "Pant", "price": 1200, "stock": 8, "id": "2" },
    { "Name": "Product-3", "category": "Cycle", "price": 3500, "stock": 20, "id": "3" },
    { "Name": "Product-4", "category": "Bucket", "price": 150, "stock": 30, "id": "4" },
    { "Name": "Product-5", "category": "Shoe", "price": 800, "stock": 25, "id": "5" },
    { "Name": "Product-6", "category": "Bottle", "price": 250, "stock": 10, "id": "6" },
    { "Name": "Product-7", "category": "Shirt", "price": 600, "stock": 18, "id": "7" },
    { "Name": "Product-8", "category": "Pant", "price": 900, "stock": 12, "id": "8" },
    { "Name": "Product-9", "category": "Cycle", "price": 2500, "stock": 15, "id": "9" },
    { "Name": "Product-10", "category": "Bucket", "price": 120, "stock": 22, "id": "10" },
    { "Name": "Product-11", "category": "Shoe", "price": 700, "stock": 7, "id": "11" },
    { "Name": "Product-12", "category": "Bottle", "price": 180, "stock": 13, "id": "12" },
    { "Name": "Product-13", "category": "Shirt", "price": 450, "stock": 28, "id": "13" },
    { "Name": "Product-14", "category": "Pant", "price": 1100, "stock": 5, "id": "14" },
    { "Name": "Product-15", "category": "Cycle", "price": 3000, "stock": 17, "id": "15" },
    { "Name": "Product-16", "category": "Bucket", "price": 130, "stock": 12, "id": "16" },
    { "Name": "Product-17", "category": "Shoe", "price": 850, "stock": 20, "id": "17" },
    { "Name": "Product-18", "category": "Bottle", "price": 200, "stock": 8, "id": "18" },
    { "Name": "Product-19", "category": "Shirt", "price": 550, "stock": 10, "id": "19" },
    { "Name": "Product-20", "category": "Pant", "price": 950, "stock": 25, "id": "20" },
  ];
  

  
export const  updateProductData = (newProductData) => {
  productData.push(newProductData);
  console.log(productData);
};

export const  updateEditProductData = (editedProductData) => {
  const index = productData.findIndex(product => product.id === editedProductData.id);
 
    console.log("index: ",index);
  

    productData[index] = { ...productData[index], ...editedProductData };
  
};
  export default productData;
  
