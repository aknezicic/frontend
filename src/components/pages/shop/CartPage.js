import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './CartPage.css';

const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart')) || [];
        const validCart = localCart.filter(item => item && typeof item.price === "number" && typeof item.quantity === "number");
        setCart(validCart);
    }, []);

    console.log("Cart contents:", cart); // Debugging

    const totalPrice = () => {
        return cart.reduce((total, item) => total + ((item.price ?? 0) * (item.quantity ?? 1)), 0).toFixed(2);
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const updateQuantity = (id, change) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(item.quantity + change, 1); // Sprečava količinu ispod 1
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    return (
        <div className="cart">
            <h1>Cart</h1>

            <div className="container py-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Single price</th>
                            <th>Total price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td></td>
                                <td><img src={item.thumbnail} alt={item.title} width="44" /></td>
                                <td><strong>{item.title}</strong></td>
                                <td>
                                    <strong>
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </strong>
                                </td>
                                <td><span>{(item.price ?? 0).toFixed(2)} EUR</span></td>
                                <td><span>{((item.price ?? 0) * (item.quantity ?? 1)).toFixed(2)} EUR</span></td>
                                <td><button onClick={() => removeItem(item.id)}>X</button></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"><h4>Total price:</h4></td>
                            <td colSpan="2"><h4>{totalPrice()} EUR</h4></td>
                        </tr>
                    </tfoot>
                </table>

                <Link to="/checkout" className="btn btn-success">Checkout</Link>
            </div>
        </div>
    );
};

export default CartPage;
