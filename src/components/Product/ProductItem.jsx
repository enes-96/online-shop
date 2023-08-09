import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const ProductItem = ({ product }) => (
    <li className="bg-white p-4 h-60 w-60" key={product.id}>
        <Link to={`/products/${product.id}`} className="text-blue-500">
            <div className="w-full grid place-items-center m-2">
                <img className="h-32" src={product.image} alt={product.title} />
            </div>
            <p>{product.title}</p>
        </Link>
    </li>
);

// ...


ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductItem;
