import React from "react";

const categories = [
  {
    title: "Women Clothing",
    items: ["Dresses", "Tops", "Jeans", "Kurti", "Skirts", "Jackets"],
    image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/product-block-slider-women-4-1.jpg",
    bgImage: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/product-block-slider-women-4-1.jpg",
    products: [
      { name: "Summer Casual Cotton", price: "$19.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/36-1-1.png" },
      { name: "Black Solid Color Full Sleeve", price: "$29.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/30-1.png" },
      { name: "Women Tops Solid Color", price: "$19.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/34-1-1.png" },
      { name: "Women Tops", price: "$19.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/35-1-1.png" },
      { name: "Men's Solid Color Short Sleeve", price: "$29.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/31-1.png" },
      { name: "Summer Casual Cotton", price: "$19.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/26-1.png" },
      { name: "Women Tops Solid Color", price: "$19.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/39-1-1.png" },
      { name: "Women Tops", price: "$19.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/38-1-1.png" },
    ]
  },
  {
    title: "Men Clothing",
    items: ["Shirts", "T-Shirts", "Jeans", "Hoodies", "Shorts"],
    image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/man_slider_1_406x628-1.png",
    bgImage: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/man_slider_1_406x628-1.png",
    products: [
      { name: "Pioneer Men Casual Short", price: "$29.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/26-1.png" },
      { name: "Pioneer Men Casual Short", price: "$29.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/39-1-1.png" },
      { name: "Pioneer Men Casual Short", price: "$29.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/38-1-1.png" },
      { name: "Pioneer Men Casual Full Sleeve", price: "$29.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/37-1-1.png" },
      { name: "Men's Solid Color Short Sleeve", price: "$29.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/31-1.png" },
      { name: "JBL Evol Type DC Wifi Speaker", price: "$29.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/37-1-1.png" },
      { name: "Black Solid Color Full Sleeve", price: "$29.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/30-1.png" },
      { name: "JBL Evol Type DC Wifi Speaker", price: "$29.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/33-1.png" },
    ]
  },
  {
    title: "Mobile",
    items: ["iPhone", "Samsung", "OnePlus", "Realme", "Accessories"],
    image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/phone_slider_1_406x628-1-1.png",
    bgImage: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/phone_slider_1_406x628-1-1.png",
    products: [
      { name: "Zhundu Mobile", price: "$160.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Zhndu-Mobile-1-1.png" },
      { name: "Apple iPhone 7s", price: "$660.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/24-1.png" },
      { name: "Apple iPhone 6s", price: "$299.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/21-1.png" },
      { name: "Metal Body Mobile", price: "$160.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/22-1.png" },
      { name: "Zhundu Mobile", price: "$160.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Zhndu-Mobile-1-1.png" },
      { name: "3D Glass", price: "$140.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/3D-VR-Glass-Virtual-Reality-1.jpg" },
      { name: "Apple iPhone 6s", price: "$299.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/21-1.png" },
      { name: "Smart TV", price: "$30.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/LED-32-LG-32LJ500U-1-1.jpg" },
    ]
  },
  {
    title: "Computer",
    items: ["Laptop", "Mouse", "Keyboard", "Monitor", "Accessories"],
    image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/laptop_slider_2_406x628-1.jpg",
    bgImage: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/laptop_slider_2_406x628-1.jpg",
    products: [
      { name: "Zhundu Mobile", price: "$160.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Zhndu-Mobile-1-1.png" },
      { name: "Kotion Headset", price: "$29.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/49-300x300-1-1.jpg" },
      { name: "Intel Laptop", price: "$540.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/15-6-Core-i7-3517U-Netbook-with-bluetooth-wifi-HDMI-VGA-Laptop-Computer-4M-Cache-Intel-1.jpg" },
      { name: "Stereo Headset", price: "$16.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-1.jpg" },
      { name: "Zhundu Mobile", price: "$160.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Zhndu-Mobile-1-1.png" },
      { name: "Apple iPhone 7s", price: "$660.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/24-1.png" },
      { name: "3D Glass", price: "$540.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/3D-VR-Glass-Virtual-Reality-1.jpg" },
      { name: "Core i7 Laptop", price: "$125.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/01-1.png" },
    ]
  },
  {
    title: "Watches",
    items: ["Watch", "Light", "Laptop", "Headphone", "Gamepad"],
    image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/watch_slider_1_406x6281-1.jpg",
    bgImage: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/watch_slider_1_406x6281-1.jpg",
    products: [
      { name: "Luxury Watche", price: "$540.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Brand-Luxury-Men-Watches-Men-Quartz-1.jpg" },
      { name: "Diamond Watches", price: "$210.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Watch-Women-Quartz-Watches-1.jpg" },
      { name: "Mens Watches", price: "$240.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Mens-Watches-1.jpg" },
      { name: "Women Gold Watch", price: "$540.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/New-High-Quality-Luxury-Crystal-Diamond-Watches-1.jpg" },
      { name: "Bracelet Watch", price: "$40.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/43-1.png" },
      { name: "Goldenhour Watch", price: "$60.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/42-1.png" },
      { name: "Waterproof Camera", price: "$520.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/06-300x300-1-1.jpg" },
      { name: "Women Gold Watch", price: "$540.00", image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/New-High-Quality-Luxury-Crystal-Diamond-Watches-1.jpg" },
    ]
  },
];

const hotProducts = [
  { id: 1, name: "Intel Laptop", price: "$540.00", oldPrice: "$640.00", img: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/15-6-Core-i7-3517U-Netbook-with-bluetooth-wifi-HDMI-VGA-Laptop-Computer-4M-Cache-Intel-1.jpg" },
  { id: 2, name: "Luxury Watch", price: "$540.00", oldPrice: "$640.00", img: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Brand-Luxury-Men-Watches-Men-Quartz-1.jpg" },
  { id: 3, name: "3D Glass", price: "$540.00", oldPrice: "$640.00", img: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/3D-VR-Glass-Virtual-Reality-1.jpg" },
];

export default function Cloths() {
  return (
    <div className="p-4 m-10">
      <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-100 pb-2">Cloths</h2>

      {categories.map((cat, index) => (
        <div key={index} className="flex border mb-10 border-gray-300 bg-white shadow-sm h-[450px]">
          
          <div className="w-1/5 p-4 flex flex-col justify-center bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${cat.bgImage})` }}>
            <div className="absolute inset-0 bg-white/80"></div>
            <div className="relative z-10">
              <h3 className="font-bold mb-6 text-2xl text-black">{cat.title}</h3>
              <div className="flex flex-col gap-1">
                {cat.items.map((item, i) => (
                  <span key={i} className="text-sm font-bold p-1 hover:text-blue-500 cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/5 h-full flex items-center justify-center border-x border-gray-100 overflow-hidden">
            <img src={cat.image} alt="category" className="object-contain hover:scale-105 transition" />
          </div>

          <div className="w-3/5 grid grid-cols-4 gap-x-4 gap-y-8 p-6 items-center">
            {cat.products.map((prod, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <img src={prod.image} alt="product" className="mx-auto mb-2 h-20 w-20 object-contain group-hover:scale-110 transition" />
                <p className="text-xs font-medium text-gray-700">{prod.name}</p>
                <p className="text-blue-500 text-sm font-bold">{prod.price}</p>
              </div>
            ))}
          </div>

        </div>
      ))}

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-gray-100 pb-2">Hot Sale</h2>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gray-100 p-6 flex flex-col justify-between h-[300px]">
            <div>
              <p className="text-sm text-gray-500">Mini Two Wheel </p>
             <p className="text-black font-bold"> Self Balancing Scooter</p>
              <button className="mt-3 bg-yellow-400 px-4 py-1 text-sm font-medium">Go Shop</button>
            </div>
            <img src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/43-1.png" className="mt-4 object-contain h-32"/>
          </div>

          {hotProducts.map((item) => (
            <div key={item.id} className="bg-white p-4 text-center border relative">
              <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">15% OFF</span>
              <img src={item.img} className="mx-auto h-24 object-contain"/>
              <h3 className="mt-3 font-semibold text-sm">{item.name}</h3>
              <p className="text-gray-400 line-through text-xs">{item.oldPrice}</p>
              <p className="text-blue-600 font-bold text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}