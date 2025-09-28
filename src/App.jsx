import NavBar from "./NavBar";
import HomePage from "./HomePage";
import ProductCart from "./ProductCart";
import MyCart from "./MyCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      alert("Product is already in the cart");
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, price: Number(product.price) },
      ]);
    }
  };
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };
  return (
    <div className="bg-gradient-to-r from-[#f5f7fa] via-[#c3cfe2] to-[#e2ebf0] min-h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={<ProductCart addToCart={addToCart} />}
          />
          <Route
            path="/mycart"
            element={
              <MyCart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                setCartItems={setCartItems}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
