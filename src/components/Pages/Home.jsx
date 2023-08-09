import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="heroBg" className="h-screen flex flex-col justify-center items-center p-8 text-white">
            <h1 className="text-3xl mb-4">Men Clothing Essentials!</h1>
            <div className="mt-4">
                <Link className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg" to="/products">
                    Buy Them!
                </Link>
            </div>
        </div>
    );
};

export default Home;
