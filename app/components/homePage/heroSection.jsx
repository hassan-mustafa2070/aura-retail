// import Link from 'next/link';
// import React from 'react';


// const HeroSection = () => {
//   return (
//     <div
//       className="h-[55vh] sm:h-[65vh] lg:h-[75vh] w-full bg-cover bg-center items-center flex flex-col justify-start"
//       style={{
//         backgroundImage: `url('https://img.freepik.com/free-photo/view-women-s-bag-with-mediterranean-tiles-aesthetics_23-2150916695.jpg?w=740&t=st=1728594672~exp=1728595272~hmac=19e4a9da2e4257acb0fd715eb9e647b867017c0c2eec4fc3bb2aa31c9d8678dc')`,
//         backgroundSize: 'cover', // Ensures the image covers the entire container
//         backgroundPosition: 'center', // Centers the image properly
//         backgroundRepeat: 'no-repeat', // Avoids image repetition
//       }}
//     >
//       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center pt-[15%] ">
//         Welcome to Aura
//       </h1>
//       <Link href="/products">
//       <button className="bg-oliveGreen mt-2 py-2 px-6 border-2 rounded-md border-oliveGreen text-white hover:bg-opacity-80 transition-all duration-300">
//         Buy Now
//       </button>
//       </Link>
//     </div>
//   );
// };

// export default HeroSection;
// updated version 

import Link from 'next/link';
import React from 'react';
import gg from '@/assets/heroPhoto.jpg'

const HeroSection = () => {
  return (
    <section className="relative w-full h-[75vh] sm:h-[85vh] lg:h-[95vh] overflow-hidden font-playfair ">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${gg.src})`,
          // backgroundImage: `url(https://images.pexels.com/photos/6650008/pexels-photo-6650008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        
      </div>

      {/* Hero Content */}
      <div className="relative  flex flex-col items-center justify-end gap-6 pt-12 h-full px-6 text-center text-white ">
        {/* Headline */}
        <h1 className=" text-4xl    sm:text-4xl lg:text-5xl font-extrabold mb-4 font-playfair">
        Discover Luxury at <span className="inline-block animate-aura-fade">Aura</span>
        </h1>

        {/* Subheading */}
        <div className='pb-12 md:pb-6'>
        {/* <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-xl text-gray-400">
          Elevate your style with our curated selection of high-quality products. Shop now for exclusivity and elegance.
        </p> */}

        {/* CTA Button */}
        <Link href="/products">
          <p className="inline-block bg-black bg-opacity-50 text-white text-lg font-semibold py-2 px-6 mb-4 md:mb-10 rounded-lg shadow-lg hover:bg-opacity-70 transition-all duration-300">
            Shop Now
          </p>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



