import React, { useEffect, useState } from "react";
import "./orders.css";
import OrderCard from "./orderCard.jsx";
import ordermockData from "./orderMockData.jsx";
const Orders = () => {
  let [order, setOrder] = useState([]);

  useEffect(() => {
    setOrder(ordermockData);
  }, []);

  const handleDeleteOrder = (Id) => {
    console.log("order Id", Id);
    const updatedOrders = order.filter((o) => o.orderId !== Id);
    //  console.log("Updated orders",updatedOrders);
    setOrder(updatedOrders);
    console.log("orders ", order);
  };
  return (
    <div className="order-container">
      {order.map((p) => (
        <OrderCard
        key={p.orderId}
          orderId={p.orderId}
          customerName={p.customerName}
          price={p.price}
          orderDate={p.orderDate}
          status={p.status}
          onDelete={handleDeleteOrder}
        />
      ))}
    </div>
  );
};

export default Orders;
