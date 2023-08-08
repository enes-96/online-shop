import React, { useState } from "react";

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
    // Calculate total price of items in the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, e.target.value)}
                        />
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
        </div>
    );
};

export default Cart;
