import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types"
import productsData from "/src/data/products.json"
import { Link } from "react-router-dom";

const ProductDetails = ({ addToCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState("s");
    const [showMassage, setShowMassage] = useState(false)

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
        addToCart(product, selectedSize)
        setShowMassage(true)
        setTimeout(() => {
            setShowMassage(false)
        }, 2000);


    };

    if (!product) {
        return <p>Loading...</p>;
    }

    const sizes = ["s", "m", "l", "xl"];

    return (
        <div className="p-4  col-start-2 col-end-13 grid grid-cols-2">
            < div className="flex justify-center items-center" >
                <img className="h-96" src={product.image} alt={product.title} />
            </div >
            <div className="mb-4 col-start-2">
                <div className="">
                    <div className="border-b my-10 flex flex-col gap-4 py-10">
                        <p className="">{product.title}</p>
                        <p className="py-2  text-xl">{product.price} $</p>
                    </div>
                    <div className="flex justify-between my-10">
                        {sizes.map((size, index) => (
                            <div onClick={() => handleSizeChange(size)} key={index} className={`h-10 w-10 text-md grid place-items-center ${selectedSize === size ? "bg-gray-50" : ""
                                }`} > {size}</div>
                        ))}
                    </div>
                    <button
                        className="border border-black hover:bg-black hover:text-white transition-all  py-2 px-12 my-4"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                    {showMassage && <p className="text-green-400 absolute ">added</p>}
                    <ul className="text-sm flex flex-col gap-4 mt-10 border-y py-10">
                        {product.details.map((point, key) => (
                            <li className="" key={key}>{point}</li>
                        ))}
                    </ul>
                    <ul className="text-sm flex flex-col gap-4 border-b  py-10">
                        <li>
                            <p className=" font-bold" >Fit</p>
                            <p>This is a regular fit T-shirt. So you can stick to your regular size.</p>
                        </li>
                        <li>
                            <p className="font-bold">  Quality</p>
                            <p>100% Organic cotton in a midweight quality equals a soft and <br /> comfortable feel. Weight: 230 gsm Cotton.</p>
                        </li>
                        <li>
                            <p className=" font-bold" >How to wear</p>
                            <p>This Tee goes perfectly on its own or <br /> together with a jacket or (denim) shirt. Mix <br /> it up with any type of trouser and you’re good to go.</p>
                        </li>
                    </ul>
                </div >
            </div>
        </div >
    );
};

ProductDetails.propTypes = {
    addToCart: PropTypes.func.isRequired
};


export default ProductDetails;
