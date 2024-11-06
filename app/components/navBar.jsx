// "use client"; // Mark the component as a Client Component

// import React, { useState, useEffect } from 'react';
// import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
// import { IoCartOutline } from "react-icons/io5";
// import Link from 'next/link';
// import { useSelector } from 'react-redux'; // Import useSelector to access cart state
// import logo from "@/assets/file.png"
// import Image from 'next/image';


// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // State to track if menu is open
//   const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted

//   // Ensure the component is mounted before accessing client-side state
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Get total quantity from Redux state

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggle the menu state
//   };

//   return (
//     <div className="relative font-playfair">
//       {/* Main Navbar */}
//       <div className='flex justify-between items-center mx-4'>
//         <div className='flex justify-center items-center'>
//           {/* Toggle between hamburger and close icon */}
//           {menuOpen ? (
           
//             <RxCross1
//               className='h-5 w-5  md:hidden cursor-pointer text-white'
//               onClick={toggleMenu}
//             />
//           ) : (
//             <RxHamburgerMenu
//               className='h-5 w-5 md:h-7 md:w-7 md:hidden cursor-pointer'
//               onClick={toggleMenu}
//             />
//           )}
//           <Link href="/">
//           <div className='m-2 mx-3 p-0'>
//             <p className=' ml-1 md:ml-0 text-xl font-bold md:text-2xl lg:text-3xl'>Aura</p>
//             <p className='lg:ml-0.5 text-[5px] -mt-1 font-tenorSans '>TIMELESS ELEGANCE</p>

//             </div>
//             {/* <Image src={logo} className='w-40 h-40'/> */}
//           </Link>
//         </div>

//         {/* Links for large screens */}
//         <div className='md:flex hidden md:justify-center md:items-center'>
//           <Link href={"/"}>
//           <div className='mx-4 md:mx-6 lg:mx-8 font-bold hover:underline'>Home</div> </Link>
//           <Link href={"products"}>
//           <div className='mx-4 md:mx-6 lg:mx-8 font-bold hover:underline'>Shop</div></Link>
//           <Link href={"products"}>
//           <div className='mx-4 md:mx-6 lg:mx-8 font-bold hover:underline'>New Arrivals</div></Link>
//           <Link href={"products"}>
//           <div className='mx-4 md:mx-6 lg:mx-8 font-bold hover:underline'>Sale</div></Link>
//         </div>

//         {/* Cart icon with quantity badge */}
//         <div className="relative">
//           <Link href={"/cart"}>
          
//             <IoCartOutline className='h-6 w-6 md:h-8 md:w-8' />
//             {isMounted && totalQuantity > 0 && ( // Only render quantity badge after mounting
//               <span className="absolute -top-1 -right-1 bg-black bg-opacity-70 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
//                 {totalQuantity}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu (70% width and remaining 30% blurred background) */}
//       <div
//         className={`fixed inset-0 z-10 flex transition-transform duration-700 ease-in-out transform ${
//           menuOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         {/* Side menu (70% of the screen) */}
//         <div className="w-[70%] h-full md:hidden bg-white p-6">
//           <ul className="flex flex-col space-y-4 font-tenorSans">
//             <li className='border-b border-b-gray-300'>
//             <div className='flex justify-between items-center mb-2'>
//             <div className='m-2 mx-3 p-0 '>
//             <p className=' ml-1 md:ml-0 text-xl font-playfair font-bold md:text-2xl lg:text-3xl'>Aura</p>
//             <p className='lg:ml-1.5 text-[5px] -mt-1 '>TIMELESS ELEGANCE</p>

//             </div>
//             <div>
//               <RxCross1
//                 className='h-5 w-5 md:hidden cursor-pointer '
//                 onClick={toggleMenu}
//               /></div>
//               </div>
//             </li>
//             <Link href={"/"}>
//             <li onClick={toggleMenu} className="hover:underline cursor-pointer ">Home</li></Link>
//             <Link href={"products"}>
//             <li onClick={toggleMenu} className="hover:underline cursor-pointer">Shop</li></Link>
//             <Link href={"products"}>
//             <li onClick={toggleMenu} className="hover:underline cursor-pointer">New Arrivals</li></Link>
//             <Link href={"products"}>
//             <li onClick={toggleMenu} className="hover:underline cursor-pointer">Sale</li></Link>
//           </ul>
//         </div>

//         {/* Remaining 30% blurred background */}
//         <div
//           className="w-[30%] h-full  bg-opacity-50  md:hidden"
//           onClick={toggleMenu} // Clicking outside will close the menu
//         />
//       </div>
//     </div>
//   );
// };

// export default NavBar;


"use client"; // Mark the component as a Client Component

import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import { useSelector } from 'react-redux'; // Import useSelector to access cart state

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track if menu is open
  const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted

  // Ensure the component is mounted before accessing client-side state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Get total quantity from Redux state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <div className="relative font-playfair">
      {/* Main Navbar */}
      <div className='flex justify-between items-center mx-4'>
        <div className='flex justify-center items-center'>
          {/* Toggle between hamburger and close icon */}
          {menuOpen ? (
            <RxCross1
              className='h-5 w-5 md:hidden cursor-pointer text-white'
              onClick={toggleMenu}
            />
          ) : (
            <RxHamburgerMenu
              className='h-5 w-5 md:h-7 md:w-7 md:hidden cursor-pointer'
              onClick={toggleMenu}
            />
          )}
          <Link href="/">
            <div className='m-2 mx-3 p-0'>
              <p className='ml-1 md:ml-0 text-xl font-bold md:text-2xl lg:text-3xl'>Aura</p>
              <p className='lg:ml-0.5 text-[5px] -mt-1 font-tenorSans '>TIMELESS ELEGANCE</p>
            </div>
          </Link>
        </div>

        {/* Links for large screens */}
        <div className='md:flex hidden md:justify-center md:items-center'>
          <Link href={"/"}><div className='mx-4 md:mx-6 lg:mx-8 font-bold hover:underline'>Home</div></Link>
          <Link href={"/products"}><div className='mx-4 md:mx-6 lg:mx-8 font-bold hover:underline'>Shop</div></Link>
          <Link href={"/products"}><div className='mx-4 md:mx-6 lg:mx-8 font-bold hover:underline'>New Arrivals</div></Link>
          <Link href={"/products"}><div className='mx-4 md:mx-6 lg:mx-8 font-bold hover:underline'>Sale</div></Link>
        </div>

        {/* Cart icon with quantity badge */}
        <div className="relative">
          <Link href={"/cart"}>
            <IoCartOutline className='h-6 w-6 md:h-8 md:w-8' />
            {isMounted && totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-black bg-opacity-70 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu (70% width and remaining 30% blurred background) */}
      <div
        className={`fixed inset-0 z-10 flex transition-transform duration-700 ease-in-out transform ${
          menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        {/* Side menu (70% of the screen) */}
        <div
          className={`w-[70%] h-full md:hidden bg-white p-6 `}
        >
          {/* ease-[cubic-bezier(0.25, 1, 0.5, 1)] */}
          <ul
  className={`flex flex-col space-y-4 font-tenorSans transform transition-transform  duration-1000 ease-in-out  ${
    menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-72 opacity-0'
  }`}
>
  <li className='border-b border-b-gray-300'>
    <div className='flex justify-between items-center mb-2'>
      <div className='m-2 mx-3 p-0'>
        <p className='ml-1 md:ml-0 text-xl font-playfair font-bold md:text-2xl lg:text-3xl'>Aura</p>
        <p className='lg:ml-1.5 text-[5px] -mt-1'>TIMELESS ELEGANCE</p>
      </div>
      <div>
        <RxCross1 className='h-5 w-5 md:hidden cursor-pointer' onClick={toggleMenu} />
      </div>
    </div>
  </li>
  <Link href={"/"}><li onClick={toggleMenu} className="hover:underline cursor-pointer">Home</li></Link>
  <Link href={"products"}><li onClick={toggleMenu} className="hover:underline cursor-pointer">Shop</li></Link>
  <Link href={"products"}><li onClick={toggleMenu} className="hover:underline cursor-pointer">New Arrivals</li></Link>
  <Link href={"products"}><li onClick={toggleMenu} className="hover:underline cursor-pointer">Sale</li></Link>
</ul>

        </div>

        {/* Remaining 30% blurred background */}
        <div
          className="w-[30%] h-full bg-opacity-50 md:hidden transition-opacity duration-700 ease-in-out"
          onClick={toggleMenu} // Clicking outside will close the menu
        />
      </div>
    </div>
  );
};

export default NavBar;
