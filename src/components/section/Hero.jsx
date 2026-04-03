import {useState,useEffect} from "react";

const slides=[
    {
        id:1,
        img:"https://i.pinimg.com/736x/f9/40/2c/f9402cae307202e67894410f989b6b21.jpg",
        title:"Get 50% off",
        desc:"SHOP WISE WITH PRICE COMPARISONS",
    },
    {
        id:2,
        img:"https://img.freepik.com/premium-photo/cheerful-beautiful-asian-woman-holding-multi-coloured-shopping-bags-credit-card_2034-1850.jpg",
        title:"Get 50% off",
        desc:"SHOP WISE WITH PRICE COMPARISONS",
    },
    {
        id:3,
        img:"https://media.istockphoto.com/id/1254984880/photo/cheerful-beautiful-asian-woman-holding-multi-coloured-shopping-bags-and-credit-card-on-light.jpg?s=170667a&w=0&k=20&c=iqDX9QqmBOu4zmgN4D0nkP5DDrh4cs5QYgaMFBLxvJ0=",
        title:"Get 50% off",
        desc:"SHOP WISE WITH PRICE COMPARISONS",
    },
];

function Hero(){
    const [current,setCurrent]=useState(0);

    useEffect(()=>{
        const interval = setInterval (()=>{
            setCurrent((prev)=>(prev+1) % slides.length);
        },4000);
        return ()=>clearInterval(interval);
    },[]);

   return (
    <>
    <div className="w-full h-120 flex flex-col md:flex-row m-10">
    <div className="w-full md:w-2/3  h-2/3 md:h-full overflow-hidden relative m-10 bg-blue-300">
        <div className="flex h-full transition-transform duration-700"
        style={{transform: `translateX(-${current * 100}%)`}}
        >
            {slides.map((slide)=>
            
            (
                <div
                                    key={slide.id}
                    className="min-w-full  h-full relative"
                >

                    <img
                    src={slide.img}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                    />

                    <div className="absolute top-0 left-0 w-full h-32 "></div>
                    <div className="absolute bottom-0 left-0 w-full h-40  "></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-8 text-white ">

                    <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-slideLeft text-black">
                        {slide.title}
                    </h1>

                    <p className="mb-6 text-sm md:text-lg animate-slideLeft delay-200 tex-black" >
                        {slide.desc}
                        </p>

                        <div className="flex gap-4 items-center">
                            <button className="text-500 border-2 border-blue-500 text-blue-500 px-6 py-2 rounded animate-slideLeft delay-300">
                                VIEW COLLECTION
                            </button>

                            <button className="bg-yellow-300 text-black px-6 py-2 rounded animate-slideRight delay-500"> 
                                CATEGORIES
                            </button>

                        </div>
        
                    </div>

                    </div>
            ))}

        </div>

        <div
        className="absolute bottom-5 w-full flex justify-center gap-3">
            {slides.map((_,index)=>(
                  <div
                  key={index}
                  onClick={()=>setCurrent(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    current===index?"bg-white" :"bg-gray-400"
                  }`}
                  
                  ></div>
            ))}


        </div>

    </div>

    <div className="w-full md:w-1/3 h-1/3 md:h-full flex md:flex-col ml-5 m-10  ">

    <div className="w-1/2  md:w-100 h-80 relative">
    <img 
    src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/banner-campaign-51-1-1.png"
    className="w-full h-full object-cover"
    alt=""
    />

    </div>

<div className="w-1/2 md:w-100 mt-5 h-80 relative">
<img src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/banner-campaign-61-1.jpg"
className="w-full h-full object-cover"
alt=""/>

</div>
    </div>
    </div>
    </>
   );
}

export default Hero;
