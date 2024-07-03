import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Catagory from './pages/Catagory'
import Login from './components/Login'
import NotFound from './pages/NotFound'
import Recipes from './pages/Recipes'
import Footer from './components/Footer'
import SingleCategory from './pages/SingleCategory'
import SingleRecipe from './pages/SingleRecipe'
import Signup from './components/Signup'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/category",
    element: <Catagory />
  },
  {
    path: "/category/:categories",
    element: <SingleCategory />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/recipes",
    element: <Recipes />
  },
  {
    path: "/recipes/:recipe",
    element: <SingleRecipe />
  },
  {
    path: "/*",
    element: <NotFound />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex flex-col'>
      <div className='md:w-[80%] mx-auto'> 
        <RouterProvider router = {router} />
      </div>
    <Footer />
    </div>
  </React.StrictMode>,
)
