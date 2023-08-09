import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../utils/api";
import ProductItem from "../Product/ProductItem";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
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
        <div className="p-4 bg-gray-100">
            <h2 className="text-2xl ">Products</h2>
            <ul className="flex justify-between text-center">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
