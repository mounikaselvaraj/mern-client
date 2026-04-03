import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { MdPublic } from "react-icons/md";
import { Menu, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

import Login from "../register/Login";
import Register from "../register/Register";

function Navbar() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = () => {
      const data = JSON.parse(localStorage.getItem("user"));
      setUser(data);
    };
    updateUser();
    window.addEventListener("userChanged", updateUser);
    return () => window.removeEventListener("userChanged", updateUser);
  }, []);

  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };
  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <>
      
      <div className="bg-gray-100 text-sm flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-2 gap-2 sm:gap-0">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <FiTruck /> Free Delivery <span>|</span>
          <MdPublic /> Returns Policy <span>|</span>
          Follow Us
          <FaFacebook className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaPinterest className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>

        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <span
                className="cursor-pointer hover:text-blue-600"
                onClick={openLogin}
              >
                Login
              </span>
              <span
                className="cursor-pointer hover:text-blue-600"
                onClick={openRegister}
              >
                Register
              </span>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  className="w-6 h-6 rounded-full"
                  alt="avatar"
                />
                <span className="font-semibold">{user.username}</span>
              </div>
              <button
                className="text-red-500"
                onClick={() => {
                  localStorage.clear();
                  window.dispatchEvent(new Event("userChanged"));
                  navigate("/");
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b">
     
        <h1 className="text-2xl font-bold">
          <Link to="/">Marketo<span className="text-yellow-500">.</span></Link>
        </h1>

      
        <div className="hidden md:flex gap-6 font-medium">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Pages</span>
          <span className="cursor-pointer relative">
            Shop
            <span className="absolute -top-3 left-8 text-xs bg-green-500 text-white px-1 rounded">
              New
            </span>
          </span>
          <span className="cursor-pointer">Blogs</span>
          <span className="cursor-pointer relative">
            Gallery
            <span className="absolute -top-3 left-10 text-xs bg-yellow-400 px-1 rounded">
              Hot
            </span>
          </span>
        </div>

       
        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

       
        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <FaHeart size={20} />
            <span className="absolute -top-2 -right-2 text-xs bg-gray-200 px-1 rounded">
              0
            </span>
          </div>
          <div className="relative">
            <FaShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 text-xs bg-yellow-400 px-1 rounded">
              0
            </span>
          </div>
        </div>
      </div>

     
      {mobileMenu && (
        <div className="md:hidden bg-gray-50 px-4 py-4 flex flex-col gap-3">
          <span className="cursor-pointer" onClick={() => setMobileMenu(false)}>
            Home
          </span>
          <span className="cursor-pointer" onClick={() => setMobileMenu(false)}>
            Pages
          </span>
          <span className="cursor-pointer" onClick={() => setMobileMenu(false)}>
            Shop
          </span>
          <span className="cursor-pointer" onClick={() => setMobileMenu(false)}>
            Blogs
          </span>
          <span className="cursor-pointer" onClick={() => setMobileMenu(false)}>
            Gallery
          </span>
         
          <div className="flex gap-4 mt-2">
            <FaHeart size={20} />
            <FaShoppingBag size={20} />
          </div>
        </div>
      )}

       <div className="flex flex-col sm:flex-row items-center gap-4 px-4 sm:px-6 py-4 bg-gray-50">
        <div className="bg-yellow-400 w-full sm:w-1/3 text-white px-6 py-3 flex items-center gap-2 font-semibold cursor-pointer justify-center sm:justify-start">
          ☰ All Categories ▼
        </div>

        <div className="w-full sm:w-1/3 flex flex-1 border border-gray-200 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Find your product"
            className="flex-1 px-4 py-2 outline-none"
          />
          <select className="px-3 border-l outline-none">
            <option>All Categories</option>
          </select>
          <button className="bg-yellow-400 px-4 flex items-center justify-center">🔍</button>
        </div>

        <div className="w-full sm:w-1/3 hidden sm:flex border px-6 py-2 text-center justify-center">
          <div>
            <p className="text-blue-600 font-bold">BLACK FRIDAY</p>
            <p className="text-sm">Get 45% Off!</p>
          </div>
        </div>
      </div>

      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} switchToRegister={openRegister} />
      <Register isOpen={showRegister} onClose={() => setShowRegister(false)} switchToLogin={openLogin} />
    </>
  );
}

export default Navbar;