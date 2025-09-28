import React, { useState, useEffect } from "react";
function ProductCart({ addToCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch {
        console.log("error while fetching the data");
      }
    };
    fetchdata();
  }, []);
  return (
    <div>
      <h1 className="sticky top-17 bg-gradient-to-r from-[#f5f7fa] via-[#c3cfe2] to-[#e2ebf0] rounded-lg flex items-center justify-center gap-1 text-3xl font-extrabold text-gray-800 italic ">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent p-3">
          welcome to our store
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7 text-blue-500 mt-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
        </span>
      </h1>
      <main className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3  max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col rounded-lg p-3 gap-3 shadow-xl border bg-white-100/70"
          >
            <img
              src={product.image}
              alt="Product"
              className="h-[230px] mx-auto"
            />
            <div className="flex justify-between items-center gap-3 ">
              <p className="flex text-xs h-16 items-center font-medium">
                {product.title}
              </p>
              <p className="text-sm font-bold text-green-500 pr-3">
                ${product.price}
              </p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="rounded-lg flex justify-center items-center w-full py-1 bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] text-white w-[150px] font-style: italic cursor-pointer hover:bg-gradient-to-r hover:from-[#9800ec] hover:via-[#a451f6] hover:to-[#a933d8] cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
export default ProductCart;
