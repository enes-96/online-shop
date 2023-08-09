import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Calculate total price of items in the cart
export const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const dollarFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });
    return dollarFormat.format(total); // Note the .format() method
};

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
    return (
        <div className="p-4 bg-gray-100 h-screen">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            <ul className="space-y-4">
                {cartItems.map((item) => (
                    <li key={item.id} className="flex items-center justify-between border-b pb-2">
                        <img src={item.img} className="h-20" alt="" />
                        <span className="font-medium">{item.name}</span>
                        <span className="font-medium">${item.price}</span>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, e.target.value)}
                            className="w-16 p-1 border rounded"
                        />
                        <button
                            onClick={() => removeItem(item.id)}
                            className="px-3 py-1 bg-red-500 text-white rounded"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <p className="mt-4 text-xl font-bold">Total:  {calculateTotal(cartItems)}</p>
            <p></p>
            <Link to="/checkout" className="bg-blue-400 py-1 px-4 text-white text-2xl">Checkout </Link>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    updateQuantity: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
};

export default Cart;
