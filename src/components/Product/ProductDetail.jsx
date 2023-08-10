import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types"
import productsData from "/src/data/products.json"


const ProductDetails = ({ addToCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = productsData.find(product => product.id === parseInt(productId));
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [productId]);


    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (selectedSize && quantity > 0) {
            addToCart(product, selectedSize)
            alert("added to cart")
        }
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    const sizes = ["s", "m", "l", "xl"];

    return (
        <div className="p-4 h-screen col-start-2 col-end-13 grid grid-cols-2">
            < div className="flex justify-center items-center" >
                <img className="h-96" src={product.image} alt={product.title} />
            </div >
            <div className="mb-4 col-start-2  border-2">
                <div>
                    <p>{product.title}</p>
                    <p className="py-2 text-xl">{product.price} $</p>
                    <div className="flex justify-between ">
                        {sizes.map((size, index) => (
                            <div onClick={() => handleSizeChange(size)} key={index} className={`h-10 w-10 text-md grid place-items-center ${selectedSize === size ? "bg-gray-50" : ""
                                }`} > {size}</div>
                        ))}
                    </div>
                    <div className="mb-4">
                    </div>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600"
                        onClick={handleAddToCart}
                        disabled={!selectedSize || quantity <= 0}
                    >
                        Add to Cart
                    </button>

                </div >
            </div>
        </div >
    );
};

ProductDetails.propTypes = {
    addToCart: PropTypes.func.isRequired
};


export default ProductDetails;
