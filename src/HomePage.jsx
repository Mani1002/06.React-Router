function HomePage() {
  return (
    <main className="grid lg:grid-cols-2 md:grid-cols-2 p-5 gap-5 max-w-6xl mx-auto mt-10">
      <div className="flex-1 justify-center flex flex-col  gap-7 p-10">
        <h1 className="text-6xl font-bold text-orange-400 gap-5 flex flex-col font-style: italic">
          <div>ONLINE</div>
          <div>SHOPPING</div>
        </h1>
        <p className="font-style: italic text-gray-600">
          Welcome to your FakeStore online shopping destination! Explore the
          latest fashion, electronics, home essentials, and more all at
          unbeatable prices. Enjoy secure payments, fast delivery, and easy
          returns for a smooth and reliable shopping experience.
        </p>
        <button className="py-2 rounded-lg bg-gradient-to-r from-[#a933d8] via-[#a451f6] to-[#9800ec] text-white w-[150px] font-style: italic cursor-pointer hover:bg-gradient-to-r hover:from-[#9800ec] hover:via-[#a451f6] hover:to-[#a933d8]">
          Read More
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src="./pngtree-female-customers-shopping-online-vector-png-image_5347770-removebg-preview.png"
          alt="background"
        />
      </div>
    </main>
  );
}
export default HomePage;
