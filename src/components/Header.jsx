import React from "react"
import { Link, } from "react-router-dom"

const Header = () => {
    return (
        <div className="p-4 bg-slate-200">
            <nav className="flex items-center justify-between p-4">
                <img src="/src/images/veloIcon.png" className="h-12 w-12" alt="website-logo" />
                <ul className="flex items-center gap-12">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>

                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header