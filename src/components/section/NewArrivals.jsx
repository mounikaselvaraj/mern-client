import { FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Mini 3D Glass",
    category: "3d Glass Gamepad Google Glass",
    price: "$220.00",
    img: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/40-1.png",
  },
  {
    id: 2,
    name: "Bluetooth Gamepad",
    category: "Drone Gamepad Laptop Mobile",
    price: "$199.00",
    img: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/45-1.png",
  },
  {
    id: 3,
    name: "Apple iPhone 6s",
    category: "Mobile",
    price: "$299.00",
    img: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/21-1.png",
  },
  {
    id: 4,
    name: "Kotion Headset",
    category: "Headphone Laptop Mobile",
    price: "$29.00",
    img: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/49-300x300-1-1.jpg",
  },
];

 function NewArrivals() {
  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>

      
      <div className="flex gap-6 text-sm mb-6 border-b pb-2">
        <span className="font-semibold border-b-2 border-blue-500 pb-1">
          On Sell
        </span>
        <span className="text-gray-500 cursor-pointer">Hot Sell</span>
        <span className="text-gray-500 cursor-pointer">Trend</span>
        <span className="text-gray-500 cursor-pointer">Best Sell</span>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border p-4 text-center relative hover:shadow-lg transition"
          >
         
            <FaHeart className="absolute top-3 right-3 text-gray-300 hover:text-green-500 cursor-pointer" />

            <img
              src={item.img}
              alt={item.name}
              className="mx-auto h-32 object-contain"
            />

            <p className="text-xs text-gray-400 mt-3">
              {item.category}
            </p>

            <h3 className="font-semibold">{item.name}</h3>

            <p className="text-green-600 font-bold mt-1">
              {item.price}
            </p>
          </div>
        ))}
      </div>

     
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="bg-gray-100 p-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Shop Now To Find Savings On Everything
            </p>
            <h2 className="text-2xl font-bold">
              You Need For The <br />
              <span className="text-blue-600">Big Game</span>
            </h2>
          </div>
          <img
            src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/01-1.png"
            alt="speaker"
            className="h-28"
          />
        </div>

        <div className="bg-gray-100 p-8 flex items-center justify-between">
          <div>
            <p className="text-blue-500">Wireless Speaker</p>
            <h2 className="text-2xl font-bold">Speaker</h2>
            <p className="text-gray-400 line-through">$80.00</p>
            <p className="text-green-600 text-xl font-bold">$60.00</p>
          </div>
          <img
            src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/New-2nd-generation-Smart-Air-1.png"
            alt="speaker"
            className="h-28"
          />
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;