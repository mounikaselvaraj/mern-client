import React from 'react';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaMapMarkerAlt, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const logos = [
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/sponsors_white_1-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/sponsors_white_1-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/sponsors_white_2-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/sponsors_white_3-1.png",
    "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/07/sponsors_white_5-1.png",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-gray-400 mt-auto">
      <div className="w-full h-full px-6 py-12 border-b border-gray-100 bg-gray-900">
        <div className="w-full h-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="Brand" className="h-10 object-contain grayscale" />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h4 className="font-extrabold text-lg mb-6">Marketo</h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Got Question? Call us 24/7<br /> [80] 1017 197
            </p>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            <br/>
            <button className="flex items-center gap-2 bg-yellow-300 text-black px-5 py-2.5 rounded text-sm font-bold hover:bg-green-400 transition">
              <FaMapMarkerAlt /> View on Map
            </button>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Shopping</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>We Using</li>
              <li>Safe Payments</li>
              <li><img src='https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/american_express-1-1.png'/></li>
              <li>Secured by:</li>
              <li><img src='https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/mcAfee_logo1-1.png'/></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Customer Service</h4>
            <ul className='text-gray-700 space-y-1'>
              <li>New York</li>
              <li>London SF</li>
              <li>Cockfosters BP</li>
              <li>Los Angeles</li>
              <li>Chicago</li>
              <li>Las Vegas</li>
              <li>Albarto</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-black text-lg mb-6">Quick Links</h4>
              <h5 className='text-gray-700'>Support Center</h5>
              <h5 className='text-gray-700'>Term & Conditions</h5>
              <h5 className='text-gray-700'>Shipping</h5>
              <h5 className='text-gray-700'>Privacy Policy</h5>
              <h5 className='text-gray-700'>Help</h5>
              <h5 className='text-gray-700'>Products Return</h5>
              <h5 className='text-gray-700'>FAQS</h5>
            </div>
            <button 
              onClick={scrollToTop}
              className="mt-8 flex justify-center gap-2 rounded py-2 bg-yellow-300 font-bold uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all w-32"
            >
              Back Top <FaChevronUp />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-yellow-300 border-t border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            © 2021 XpeedStudio <span className="text-gray-500">All Rights Reserved</span>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 hover:text-blue-600 cursor-pointer transition-transform duration-300 hover:scale-110">
              <FaFacebook size={18} /> <span className="text-[10px] font-bold">FACEBOOK</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 hover:text-sky-400 cursor-pointer transition-transform duration-300 hover:scale-110">
              <FaTwitter size={18} /> <span className="text-[10px] font-bold">TWITTER</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 hover:text-red-600 cursor-pointer transition-transform duration-300 hover:scale-110">
              <FaPinterest size={18} /> <span className="text-[10px] font-bold">PINTEREST</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 hover:text-pink-600 cursor-pointer transition-transform duration-300 hover:scale-110">
              <FaInstagram size={18} /> <span className="text-[10px] font-bold">INSTAGRAM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;