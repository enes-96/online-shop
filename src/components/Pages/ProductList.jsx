import React, { useState, useEffect } from "react";
import productsData from "/src/data/products.json"
import ProductItem from "../Product/ProductItem";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await productsData;
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error while loading items: {error.message}</p>;

    return (
        <div className="p-4 h-screen col-start-2 col-span-full">
            <p>products</p>
            <ul className="flex justify-between text-center">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
