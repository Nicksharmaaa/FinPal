import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from "react";
import { FiLogIn, FiLogOut } from "react-icons/fi"; // Import login/logout icons

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("isAuthenticated");
    setIsLoggedIn(user === "true");
  }, []);

  const handleAuth = () => {
    if (isLoggedIn) {
      localStorage.removeItem("isAuthenticated");
      setIsLoggedIn(false);
    } else {
      window.location.href = "/login"; // Redirect to login page
    }
  };

  return (
    <div>
       <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">FinPal</h1>
        <nav>
          <ul className="flex space-x-4">
            <NavLink
              to="/"
              className={({isActive})=>{
                return `${isActive ? 'text-emerald-500' : 'text-white'} text-md font-bold`
              }}
            >
              Home
            </NavLink>
            
            <NavLink
             to= "/about"
             className={({isActive})=>{
              return `${isActive ? 'text-emerald-500' : 'text-white'} text-md font-bold`
            }}
            >
              About Us
            </NavLink>

            <NavLink
            to= "/features"
            className={({isActive})=>{
              return `${isActive ? 'text-emerald-500' : 'text-white'} text-md font-bold`
            }}
            >
              Blog
            </NavLink> 

            <NavLink
            to= "/contact"
            className = {({isActive})=>{
              return `${isActive ? 'text-emerald-500' : 'text-white'} text-md font-bold`
            }}
            >
              Contact Us
            </NavLink>

            <button onClick={handleAuth} className="ml-4">
          {isLoggedIn ? <FiLogOut size={24} /> : <FiLogIn size={24} />}
        </button>
    
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar