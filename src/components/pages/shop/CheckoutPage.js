import React, { useState, useEffect } from "react";
import "./CheckoutPage.css";

const CheckoutPage = () => {
    const [cart, setCart] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
    });

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];

        // Filtriramo nevalidne podatke kako bismo izbegli greške
        const validCart = localCart.filter(
            (item) =>
                item &&
                typeof item.price === "number" &&
                typeof item.quantity === "number"
        );

        setCart(validCart);
    }, []);

    const totalPrice = () => {
        return cart
            .reduce(
                (total, item) =>
                    total + ((item.price ?? 0) * (item.quantity ?? 1)),
                0
            )
            .toFixed(2);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order placed:", formData, cart);

        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        setCart([]);
    };

    return (
        <div className="checkout container">
            <h1>Checkout</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td></td>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>{(item.price ?? 0).toFixed(2)} EUR</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Total: {totalPrice()} EUR</h3>

                    <form onSubmit={handleSubmit} className="checkout-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="btn btn-success">
                            Place Order
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default CheckoutPage;
