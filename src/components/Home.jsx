import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="heroBg" className="h-screen grid">
            <h1 className="text-7xl text-center p-12 text-white">Random clothes you need!</h1>
            <div className="flex justify-center p-12">
                <Link className="text-4xl bg-slate-300 py-1 px-4" to="/products">
                    Buy them!
                </Link>
            </div>
        </div>
    );
};

export default Home;
