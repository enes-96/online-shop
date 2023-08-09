import React from "react";
import PropTypes from "prop-types"

const Checkout = ({ checkoutItems }) => {
    console.log(checkoutItems);

    return (
        <div>
            <h1>Checkout</h1>
            <ul>
                {checkoutItems.map((item, index) => (
                    <li key={index}>
                        <div>
                            <img src={item.img} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Price: {item.price}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Checkout.propTypes = {
    checkoutItems: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Checkout;
