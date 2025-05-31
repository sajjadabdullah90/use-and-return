import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import { useCart } from '../pages/CartContext'; // adjust path

const Navbar = () => {
  const { cartItems } = useCart();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(() => JSON.parse(localStorage.getItem("user")));
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    const handleUserUpdated = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      setUser(updatedUser);
    };

    window.addEventListener("userUpdated", handleUserUpdated);
    return () => window.removeEventListener("userUpdated", handleUserUpdated);
  }, []);

 const handleLogout = () => {
  const confirmed = window.confirm("Are you sure you want to logout?");
  if (!confirmed) return;

  localStorage.removeItem("user");
  setUser(null);
  window.dispatchEvent(new Event("userUpdated"));
  navigate("/");
};


  // Handle search submit (on Enter key or button click)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/products?search=${encodeURIComponent(trimmed)}`);
      setSearchTerm("");
      setOpen(false); // close mobile menu if open
    } else {
      navigate("/products"); // empty search goes to all products
      setOpen(false);
    }
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
      : "text-gray-700";

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to={"/"}>
        <img className="h-14" src={logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to={"/"} className={linkClass}>Home</NavLink>
        <NavLink to={"/products"} className={linkClass}>All Products</NavLink>
        <NavLink to={"/contactus"} className={linkClass}>Contact Us</NavLink>

        {/* Search bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full"
          role="search"
          aria-label="Product search"
        >
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.836 10.615L15 14.695"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                clipRule="evenodd"
                d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <NavLink to={"/shoppingcart"}>
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
              <path
                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                stroke="#615fff"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
              {cartItems.length}
            </button>
          </NavLink>
        </div>

        {/* Auth Buttons */}
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-700">Welcome, {user.username}</span>
            <button
              onClick={handleLogout}
              className="cursor-pointer px-4 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
              Login
            </button>
          </NavLink>
        )}
      </div>

      {/* Mobile menu toggle */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/products" className={linkClass}>All Products</NavLink>
        <NavLink to="/contactus" className={linkClass}>Contact Us</NavLink>
 <div className="relative cursor-pointer">
          <NavLink to={"/shoppingcart"}>
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
              <path
                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                stroke="#615fff"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
              {cartItems.length}
            </button>
          </NavLink>
        </div>
        {/* Mobile Search */}
        <form onSubmit={handleSearchSubmit} className="w-full mt-2 flex items-center gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.836 10.615L15 14.695"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                clipRule="evenodd"
                d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                stroke="#7A7B7D"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>

        {user ? (
          <div className="flex flex-col items-start gap-2 mt-2">
            <span className="text-gray-700">Welcome, {user.username}</span>
            <button
              onClick={handleLogout}
              className="cursor-pointer px-4 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
