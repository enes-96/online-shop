import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const dollarFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    return dollarFormat.format(total); // Note the .format() method
};

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
    return (
        <div className="p-4 min-h-screen col-start-2 col-span-full border-2 ">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            <div className="">
                <p className="mt-4 text-xl font-bold my-8">Total: {calculateTotal(cartItems)}</p>

                <ul className="space-y-4 my-8">
                    {cartItems.map((item, index) => (
                        <li key={index} className="flex items-center justify-between border-b pb-2">
                            <img src={item.img} className="h-20" alt="" />
                            <span className="font-medium">{item.name}</span>
                            <span className="font-medium">${item.price}</span>
                            <span>{item.size}</span>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.uniqueId, e.target.value)}
                                className="w-10 h-10 text-center p-1 border rounded "
                            />
                            <button
                                onClick={() => removeItem(item.uniqueId)}
                                className="px-3 py-1 bg-red-500 text-white rounded"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <Link
                    to="/checkout"
                    className={`bg-blue-400 py-1 px-4 text-white text-2xl my-8 ${cartItems.length === 0 ? "pointer-events-none opacity-30 " : ""
                        }`}
                >
                    Checkout
                </Link>

            </div>
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
