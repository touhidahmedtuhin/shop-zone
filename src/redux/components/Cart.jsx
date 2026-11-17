import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/productSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.product.cart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
            <p className="text-sm text-gray-500">
              {cart.length} items in your cart
            </p>
          </div>

          {cart.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="text-sm text-red-500 hover:text-red-700 cursor-pointer"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">
              Your Cart is Empty!
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-3">
              {cart.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />

                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-sm text-gray-800 line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-blue-600 font-bold mt-2">
                      ${item.price}
                    </p>
                  </div>
                  <span className="w-8 text-center font-semibold text-gray-800">
                    {item.quantity}
                  </span>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-green-500 text-white font-bold shadow-md hover:bg-green-600 hover:scale-105 transition duration-200 cursor-pointer"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                    <button
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-500 text-white font-bold shadow-md hover:bg-red-600 hover:scale-105 transition duration-200 cursor-pointer"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      −
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="px-3 py-1.5 bg-red-500 text-white text-xs font-medium rounded-lg shadow hover:bg-red-600 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl p-5 shadow-sm h-fit">
              <h2 className="font-bold text-lg mb-4">Order Summary</h2>

              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between font-bold text-gray-800">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg mt-5 hover:bg-blue-700 transition cursor-pointer">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
