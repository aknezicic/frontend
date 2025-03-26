import React, { useEffect, useState } from "react";
import QRCode from "./QRCode";
import { useParams } from "react-router-dom";
import "./SingleOrder.css";

const SingleOrder = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        // Pretpostavimo da dohvaćaš narudžbu iz localStorage ili API-ja
        const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        const foundOrder = savedOrders.find(o => o.id === orderId);

        if (foundOrder) {
            setOrder(foundOrder);
        }
    }, [orderId]);

    if (!order) {
        return <p>Order not found.</p>;
    }

    return (
        <div className="single-order container">
            <h1>Order Review</h1>
            <h3>Order ID: {orderId}</h3>
            <p>Name: {order.name}</p>
            <p>User name: {order.username}</p>
            <p>Email: {order.email}</p>
            <p>Address: {order.address}, {order.city}</p>
            <h3>Order Summary</h3>
            <ul>
                {order.cart.map((item) => (
                    <li key={item.id}>
                        {item.title} - {item.quantity} x {(item.price).toFixed(2)} EUR
                    </li>
                ))}
            </ul>
            <h3>Total: {order.totalPrice} EUR</h3>

            {/* QR Code for payment */}
            <QRCode formData={order} cart={order.cart} />
        </div>
    );
};

export default SingleOrder;
