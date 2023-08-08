import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ product }) => (
    <li className="" key={product.id}>
        <div className="w-full  grid place-items-center">
            <img className="h-32" src={product.image} alt={product.title} />
        </div>
        <p>{product.title}</p>
    </li>
);

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductItem;
