import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types"

const ProductDetails = ({ addToCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const handleAddToCart = () => {
        if (selectedSize && quantity > 0) {
            addToCart(product, selectedSize, quantity)
            alert("added to cart")
        }
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    const sizes = ["s", "m", "l", "xl"];

    return (
        <div className="p-4 bg-gray-100">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
                <div className="flex justify-center">
                    <img className="h-36  mb-4" src={product.image} alt={product.title} />
                </div>
                <div className="mb-4">
                    <p className="py-2 text-xl">{product.price} $</p>

                    <label htmlFor="size" className="block font-medium mb-2">Select Size:</label>
                    <select id="size" className="border p-2 w-full" value={selectedSize} onChange={handleSizeChange}>
                        <option value="">Select</option>
                        {sizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block font-medium mb-2">Quantity:</label>
                    <input type="number" id="quantity" className="border p-2 w-full" value={quantity} onChange={handleQuantityChange} />
                </div>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600"
                    onClick={handleAddToCart}
                    disabled={!selectedSize || quantity <= 0}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

ProductDetails.propTypes = {
    addToCart: PropTypes.func.isRequired
};


export default ProductDetails;
