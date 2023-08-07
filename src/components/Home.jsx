import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1 className="text-9xl">Random clothes you need!</h1>
            <Link className="text-4xl bg-slate-300 py-1 px-4" to="/products">Buy them!  </Link>
        </div>
    )
}

export default Home