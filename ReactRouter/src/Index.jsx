import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

const Index = () =>{
    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Navbar /><Home /></>
        },
        {
            path: "/about",
            element: <><Navbar /><About /></>
        },
        {
            path: "/contact",
            element: <><Navbar /><Contact /></>
        },
        {
            path: "/profile/:username",
            element: <><Navbar /><Profile /></>
        }

    ])
    return (
        <>
        <RouterProvider router = {router} />
        </>
    )
}

export default Index