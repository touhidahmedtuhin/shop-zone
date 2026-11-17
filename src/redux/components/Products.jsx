import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "../features/productSlice";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 p-4">
      {products.map((item) => (
        <div key={item.id} className=" bg-amber-50 p-4 rounded-lg ">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-40 object-contain"
          />

          <h2 className="line-clamp-1 mb-2">{item.title}</h2>
          <p className="mb-2 font-bold">${item.price}</p>
          <p className="mt-1 text-sm mb-1 text-green-600">in stock {item.stock}</p>

          <button
            onClick={() => dispatch(addToCart(item))}
            className="bg-yellow-300  px-4 py-2 rounded cursor-pointer mt-auto w-full text-black"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
