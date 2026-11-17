import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const cart = useSelector((state) => state.product.cart);
  const navigate = useNavigate()

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm ">
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="text-lg font-bold text-blue-600 cursor-pointer" onClick={() => navigate("/")}>
          ShopZone
        </h1>

        <div className="flex items-center gap-5 text-sm">
          <span>Home</span>
          <span>Products</span>

          <span className="relative cursor-pointer" onClick={() => navigate("/cart")}>
            Cart
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          </span>

          <span>Login</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;