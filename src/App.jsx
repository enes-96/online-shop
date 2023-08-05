import React, { useState, useEffect } from "react";
import { fetchProducts } from "./utils/api";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProductData = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      <header>
        <h1 className="text-3xl">Product List</h1>
      </header>
      <main>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <p>{product.title}</p>
                <img src={product.image} alt={product.title} />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
