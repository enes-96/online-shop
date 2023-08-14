import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="col-start-1 col-end-2 row-start-1 row-end-3">
            <nav className="flex flex-col p-4 h-full gap-12 items-center">
                <Link to="/">
                    <img
                        src="/src/images/logo.png"
                        className=""
                        alt="Website Logo"
                    />
                </Link>
                <ul className="flex flex-col gap-12 items-center">
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
