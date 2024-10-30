import React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
    return(
        <>
        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </nav>
        </div>
        </>
    )
}

export default Navbar