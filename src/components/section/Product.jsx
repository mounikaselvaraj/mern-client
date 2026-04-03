
import {Heart} from "lucide-react";
import React from "react";


const featuresImages=[
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/offer_banner_21-1-1-1.jpg",
   "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/offer_banner_31-1-1-1.png",
   "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/offer_banner_41-1-1-1.jpg",

];

const productImages=[
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/36-2.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/24-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/21-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/Cannon-2-Mini-Smart-Bluetooth-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/08-2.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/07-300x300-1-1.jpg",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/01-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/iphone7-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-1.jpg",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/camera-drone-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/WIFI-FPV-With-720P-Camera-High-Hold-Foldable-Drones-1.jpg",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Bluetooth-Smart-Projector-1.jpg",


]

const productTitle=[
 "Xpeed Projector","Apple iPhone 7s","Apple iPhone 6s","Wireless Microphone","CC Camera","Moving Camera","Core i7 Laptop",
 "Unlocked Mobile Phone","Stereo Headset","Camera Drone","Holy Stone Drone","LED Projector"
];

const newPrice=[
   "$499.00","$660.00"
,"$299.00","$70.00","$210.00","$230.00",
"$125.00","$125.00","$16.00","$540.00","$540.00","$20.00"
];
const oldPrice=[
  "$520.00","$690.00","","","$240.00","","","","","$720.00","$720.00",""
];
const products=Array.from({length:12},(_,i)=>(
    {
        id:i+1,
        title:productTitle[i],
       
        newPrice:newPrice[i],
        oldPrice:oldPrice[i],
        img:productImages[i] || "https://placeholder.com"
    }
));

const Product =()=>{
    return (
        <div className="max-w-8xl mx-10 p-4 md:p-8 space-y-12 "  >

            <section className="flex flex-col md:flex-row gap-4 h-auto">
                {featuresImages.map((src,index)=>(
                    <div key={index} className="w-full md:w-1/3 h-64 lg:h-80 rounded-2xl overflow-hidden shadow-sm">
                        <img
                        src={src}
                        alt={`Featured ${index}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />

                    </div>
                ))}
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-8">Top Categories this week</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                   {products.map((product)=>(
                    <div key={product.id} className="relative flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                        <button className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition-colors">
                            <Heart size={18}/>

                        </button>

                        <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 bg-gray-50 rounded-xl overflow-hidden">
                            <img 
                            src={product.img}
                            alt={product.title}
                            className="w-full h-full object-cover"
                            />

                        </div>
                        <div
                        className="ml-4 flex flex-col justify-center">
                            <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-tight">
                                {product.title}
                            </h3>
                            <p
                            className="text-xs text-gray-500 mb-1"
                            >{product.brand}</p>

                            <div className="flex items-center gap-2">
                               
                                {product.oldPrice && (
                                    <span className="text-sm text-gray-400 line-through">
                                        {product.oldPrice}
                                    </span>
                                    
                                )}
                                 <span className="text-lg font-bold text-black">{product.newPrice}</span>
                            </div>
                        </div>
                        </div>
                   ))}
                </div>
            </section>

        </div>
    );
};

export default Product;