import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Products=[
    "Mini 3D Glass","Kotion Headset","Core i7 Laptop","Bluetooth Gamepad","Waterproof Camera","Stereo Headset","Apple iPhone 6s","Moving Camera","Golden Bluetooth","Camera Drone","Mic for Phone","Wireless Speaker"
]
const Images=[
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/40-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/49-300x300-1-1.jpg",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/01-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/45-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/06-300x300-1-1.jpg",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Bluetooth-Headphones-Wireless-Stereo-Headset-1.jpg",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/21-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/07-300x300-1-1.jpg",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/Headphones-Wireless-Stereo-Headsets-earbuds-with-Mic-1.jpg",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/camera-drone-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/Speaker-Cannon-2-Mini-Smart-Bluetooth-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/REMAX-Portable-Wireless-Bluetooth-Speaker-1.jpg"
  ]

  const OldPrice=[
   "","","","","560.00","","","","23.00","720.00"
  ]

  const NewPrice=[
    "220.00","29.00","125.00","199.00","520.00","16.00","299.00","230.00","12.00","540.00","70.00","65.00"
  ]

const Featured = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const products = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    name: Products[i],
    newPrice: ` $${NewPrice[i]}`,
    oldPrice:`$${OldPrice[i]}`,
    img: Images[i],
  }));

  
  const nextSlide = () => setCurrentSlide(1);
  const prevSlide = () => setCurrentSlide(0);

  return ( 
    <div className="flex flex-col md:flex-row w-full bg-white overflow-hidden border border-gray-100 m-10">
      
      
      <div className="w-full md:w-2/3 p-8">
        
      
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold uppercase tracking-widest text-gray-800">
            Featured Products
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className={`p-2 rounded-full border transition-all ${currentSlide === 0 ? 'text-gray-300 border-gray-100' : 'hover:bg-gray-100 border-gray-200 text-gray-600'}`}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={currentSlide === 1}
              className={`p-2 rounded-full border transition-all ${currentSlide === 1 ? 'text-gray-300 border-gray-100' : 'hover:bg-gray-100 border-gray-200 text-gray-600'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
          
            {[0, 3].map((startIndex, pageIdx) => (
              <div key={pageIdx} className="min-w-full grid grid-cols-3 gap-y-10 gap-x-6">
                {products.slice(startIndex, startIndex + 9).map((product) => (
                  <div key={product.id} className="flex items-center gap-4 group">
                    <div className="overflow-hidden bg-gray-50 flex-shrink:0">
                       <img 
                        src={product.img} 
                        alt="" 
                        className="w-16 h-16 object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-bold text-gray-900 truncate uppercase tracking-tight">
                        {product.name}
                      </span>
                      <span className='text-sm text-black-600 font-semibold mt-1 line-through'>{product.oldPrice}</span>
                      <span className="text-sm text-black-600 font-semibold mt-1">
                        {product.newPrice}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="w-full m-10 md:w-1/3 relative group cursor-pointer overflow-hidden ">
        <img 
          src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/card-1.png" 
          alt="Promotion" 
          className="w-full h-full object-cover min-h-[450px] group-hover:scale-105 transition-transform duration-700"
        />
       
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
      </div>
    </div>
  );
};

export default Featured;
