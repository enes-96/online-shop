import React, { useState, useEffect } from "react";
import productsData from "/src/data/products.json";
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
            } catch (error) {
                console.error("Error fetching products:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-4 h-screen col-start-2 col-span-full">
            <h2 className="text-2xl font-semibold mb-4">Products</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error while loading items: {error.message}</p>
            ) : (
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
