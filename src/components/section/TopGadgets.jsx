import React from "react";
import { Heart } from "lucide-react";

const gadgets = [
  {
    id: 1,
    name: "Xpeed Laptop",
    oldPrice: 640.00,
    price: 540.00,
    rating: 4,
    img: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/laptop_features_1-1.jpg",
    btnText: "Read more",
  },
  {
    id: 2,
    name: "Intel Laptop",
    oldPrice: 640.00,
    price: 540.00,
    rating: 0,
    img: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/15-6-Core-i7-3517U-Netbook-with-bluetooth-wifi-HDMI-VGA-Laptop-Computer-4M-Cache-Intel-1.jpg",
    btnText: "Read more",
  },
  {
    id: 3,
    name: "Core i7 Laptop",
    oldPrice: null,
    price: 125.00,
    rating: 5,
    img: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/01-1.png",
    btnText: "Add to cart",
  },
  {
    id: 4,
    name: "Xpeed Laptop V2",
    oldPrice: null,
    price: 699.00,
    rating: 4,
    img: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Licence-Windows10-13-3-VOYO-VBOOK-V3Pro-Celeron-N3450-Tablet-PC-Laptop-with-8G-RAM-128G-1-1.jpg",
    btnText: "Add to cart",
  },
];

const TopGadgets = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
        Gadget Makes Your Life Easy
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {gadgets.map((gadget) => (
          <div
            key={gadget.id}
            className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col sm:flex-row items-center hover:shadow-xl transition-shadow"
          >
           
            <img
              src={gadget.img}
              alt={gadget.name}
              className="w-36 h-36 sm:w-40 sm:h-40 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6 flex-shrink-0"
            />

            <div className="flex-1 flex flex-col justify-between h-full w-full">
             
              {gadget.rating > 0 && (
                <div className="flex items-center mb-2">{renderStars(gadget.rating)}</div>
              )}

              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left">
                {gadget.name}
              </h3>

              <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                {gadget.oldPrice && (
                  <span className="line-through text-gray-400">${gadget.oldPrice}</span>
                )}
                <span className="text-blue-600 font-bold text-lg">${gadget.price}</span>
              </div>

             
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between gap-3 sm:gap-0">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
                  {gadget.btnText}
                </button>
                <Heart
                  size={20}
                  className="text-yellow-400 cursor-pointer hover:text-red-500 mt-2 sm:mt-0"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopGadgets;