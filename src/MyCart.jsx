import { useNavigate } from "react-router";
function MyCart({ cartItems, removeFromCart, setCartItems }) {
  const navigate = useNavigate();
  const increaseQuantity = (itemId) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (itemId) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const itemsCount = cartItems.reduce(
    (update, old) => update + old.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (update, old) => update + old.price * old.quantity,
    0
  );
  const discount = totalPrice >= 500 ? (totalPrice * 0.1).toFixed(2) : 0;
  const finalPrice = (totalPrice - discount).toFixed(2);
  return (
    <div className="bg-gradient-to-r from-[#f5f7fa] via-[#c3cfe2] to-[#e2ebf0]  rounded-lg ">
      <div className="sticky top-17 bg-gradient-to-r from-[#f5f7fa] via-[#c3cfe2] to-[#e2ebf0]">
        <div className="py-1 flex justify-center font-bold text-xl rounded-lg  text-gray-800 italic ">
          Your Cart Items
        </div>
        <div className="flex justify-between items-center  lg:px-55 sticky top-0 text-gray-800 font-bold py-2">
          <span>
            Items : <b className="text-green-500">{itemsCount}</b>{" "}
          </span>
          <span>
            Total : <b className="text-green-500">${finalPrice}</b>
          </span>
          <span>
            Discount (10%) Above $500 :
            <b className="text-green-500">${discount}</b>
          </span>
          <button
            onClick={() => navigate("/Products")}
            className="rounded-lg py-1 bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] text-white w-[150px] font-style: italic cursor-pointer hover:bg-gradient-to-r hover:from-[#9800ec] hover:via-[#a451f6] hover:to-[#a933d8] cursor-pointer"
          >
            Checkout
          </button>
        </div>
      </div>
      <main className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 max-w-6xl  mx-auto ">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 font-style: italic font-semibold ml-4">
            Your cart is empty!
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col border rounded-lg shadow-lg transition p-3 gap-3"
            >
              <img
                src={item.image}
                alt="Product"
                className="h-[230px] object-contain mx-auto"
              />

              <div className="flex justify-between items-center gap-3 px-1">
                <p className="text-sm font-medium line-clamp-2">{item.title}</p>

                <p className="text-sm font-bold text-green-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-3 justify-center ">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="p-1 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <span className="w-8 text-center">{item.quantity} </span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="p-1 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item)}
                className="mt-auto rounded-lg w-full py-2  bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] text-white w-[150px] font-style: italic cursor-pointer hover:bg-gradient-to-r hover:from-[#9800ec] hover:via-[#a451f6] hover:to-[#a933d8] cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
export default MyCart;
