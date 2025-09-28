import { Link } from "react-router";
function NavBar() {
  return (
    <header className="sticky top-0 flex gap-3 py-4 px-7 bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] font-semibold text-xl">
      <div className="flex-1 text-white font-bold font-style: italic">
        FakeStore
      </div>
      <Link
        to="./"
        className="border rounded-lg py-1 bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] text-white px-3 font-style: italic cursor-pointer hover:bg-gradient-to-r hover:from-[#9800ec] hover:via-[#a451f6] hover:to-[#a933d8] cursor-pointer"
      >
        Home
      </Link>
      <Link
        to="./Products"
        className="border rounded-lg py-1 bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] text-white px-3 font-style: italic cursor-pointer hover:bg-gradient-to-r hover:from-[#9800ec] hover:via-[#a451f6] hover:to-[#a933d8] cursor-pointer"
      >
        Products
      </Link>
      <Link
        to="./MyCart"
        className="border rounded-lg py-1 bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] text-white px-3 font-style: italic cursor-pointer hover:bg-gradient-to-r hover:from-[#9800ec] hover:via-[#a451f6] hover:to-[#a933d8] cursor-pointer"
      >
        My Cart
      </Link>
    </header>
  );
}
export default NavBar;
