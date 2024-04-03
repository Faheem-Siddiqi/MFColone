'use client'
import React from "react";
import { VscClose } from "react-icons/vsc";
import Image from "next/image";
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const path = usePathname();
  return (
    <>
      <div className={`relative z-50 px-5 navbar ${path==="/"?("border-none"):("border-b border-lightGrey border-opacity-40")} `}>
        <div className="navbar-start">
          <div tabIndex={0} className="drawer w-fit  block  xl:hidden">
            <input
              id="my-drawer-nav"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-nav"
                className="btn hover:bg-transparent text-darkGolden p-0 ml-3 mr-4 bg-transparent border-none drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-nav "
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu   min-h-full bg-lightGolden bg-opacity-70 backdrop-blur-sm text-base-content w-full  justify-center fixed items-center" >
                <div className="absolute btn bg-transparent p-0 border-none top-5 right-5" >
                  <input
                    type="checkbox"
                    id="my-drawer-nav"
                    className="hidden"
                  />
                  <label
                    htmlFor="my-drawer-nav"
                    aria-label="close sidebar"
                    className="absolute rounded-full bg-lightGrey py-2 px-2 right-2 cursor-pointer"
                  >
                    <VscClose className="text-white font-bold text-2xl" />
                  </label>
                </div>
             {/* mobile view */}
             <li className="px-0 transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600 ">
              <a
                href="/officeSearch"
                className="duration-700  text-md  font-semibold  hover:text-yellow-600 hover:bg-transparent outline-none "
              >
                Home
              </a>
            </li>
            <li className="px-0 transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600 ">
              <a
                href="/officeSearch"
                className="duration-700  text-md  font-semibold  hover:text-yellow-600 hover:bg-transparent outline-none "
              >
                Office Search
              </a>
            </li>
            <li className="px-0 transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600">
              <a className="duration-700text-md  font-semibold  hover:text-yellow-600 hover:bg-transparent outline-none">
                Service
              </a>
            </li>
            <li className="px-0 transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600">
              <a className="duration-700  text-md font-semibold  hover:text-yellow-600 hover:bg-transparent outline-none">
                Our Story
              </a>
            </li>
            <li className="px-0 transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600">
              <a
                href="/contact"
                className="duration-700 text-mdfont-semibold hover:text-yellow-600 hover:bg-transparent outline-none "
              >
                Contact Us
              </a>
            </li>
              <li className="transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600 focus:text-yellow-600">
                <a className="duration-70 text-md font-semibold hover:text-yellow-600 hover:bg-transparent outline-none ">
                  About Mayfair
                </a>
              </li>
                <div className=" absolute bottom-5  gap-4 left-50 flex" >
                  <button className="px-8 text-white transition-all duration-500 bg-transparent border-2 border-white rounded-full btn w-30 text-md hover:bg-white hover:border-white hover:text-black">
                    Sign Up
                  </button>
                  <button className="px-10 py-0 font-semibold transition-all duration-500 ease-in-out border-2 border-white rounded-full btn w-30 text-md hover:bg-transparent hover:text-white hover:border-white">
                    Login
                  </button>
                </div>
              </ul>
            </div>
          </div>
          <div className={`flex items-center -mx:1 lg:mx-3  ${path === '/' ? ("mt-5"):("mt-0")}`}>
            <Image
              className="w-6 h-8 "
              src={`${path==="/"?("/assets/images/FooterImg.png"):( "/assets/images/NavLogo.png")}`}          
              width={600}
              height={10}
              alt="NavLogo"
            />
            <div className="flex mx-2">
              <h4 className={`font-medium  text-[1.2rem] font-Poppins-Regular  ${path === '/' ? ("text-white "):("text-lightGrey")}`}>Mayfair</h4>
              <h4
                className="font-medium text-[1.2rem] font-Poppins-Regular"
                style={{
                  color: "#C89F37",
                }}
              >
                Agent
              </h4>
            </div>
          </div>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="hidden xl:flex relative py-4 m-0 text-lg select-none menu group menu-horizontal  ">
    {/* video  skew corners */}
       <div className="absolute -top-[1.65rem] rounded-xl  z-40 h-10 w-10 bg-white ">
       </div>
       <div className="absolute -top-[1.65rem] rounded-xl   z-40 h-10 w-10 bg-white right-2">
       </div>
        <Image
              className="absolute h-full -top-5 left-0 w-full shadow-none"
              src="/assets/images/NavSkew2.png"
              alt="white background"
              width={600}
              height={10}
            />
            <div className="pl-8">
              <li className={`transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600 ${path === '/' ?("-top-3 "):("top-0 ")}`} >
                <a
                  href="/"
                  className="duration-700 text-md font-semibold  hover:text-yellow-600 hover:bg-transparent outline-none focus:text-yellow-600"
                >
                  Home
                </a>
              </li>
            </div>
            <li className={`transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600 ${path === '/' ?("-top-3 "):("top-0 ")}`} >
              <a
                href="/officeSearch"
                className="duration-700 text-md font-semibold  hover:text-yellow-600 hover:bg-transparent outline-none focus:text-yellow-600"
              >
                Office Search
              </a>
            </li>
            <li className={`transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600 ${path === '/' ?("-top-3 "):("top-0 ")}`} >
              <a className="duration-700text-md font-semibold  hover:text-yellow-600 hover:bg-transparent outline-none focus:text-yellow-600">
                Service
              </a>
            </li>
            <li className={`transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600 ${path === '/' ?("-top-3 "):("top-0 ")}`} >
              <a className="duration-700text-md font-semibold  hover:text-yellow-600 hover:bg-transparent outline-none focus:text-yellow-600">
                Our Story
              </a>
            </li>
            <li className={`transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600 ${path === '/' ?("-top-3 "):("top-0 ")}`} >
              <a
                href="/contact"
                className="duration-700text-md font-semibold hover:text-yellow-600 hover:bg-transparent outline-none focus:text-yellow-600"
              >
                Contact Us
              </a>
            </li>
            <div className="pr-8  ">
            <li className={`transition-all duration-700 border-b-2 border-transparent hover:border-b-2 hover:border-yellow-600 ${path === '/' ?("-top-3 "):("top-0 ")}`} >
                <a className="duration-70 text-md font-semibold hover:text-yellow-600 hover:bg-transparent outline-none ">
                  About Mayfair
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className={`pr-3  overflow-hidden navbar-end  ${path === '/' ?(" mt-5 "):("mt-0 ")}`}>
          <div className="hidden gap-4 xl:flex">
            <button className={`px-8  rounded-full  font-semibold py-2 h-fit w-30 text-md transition-all duration-700 ${path === '/' ? ("text-white  bg-transparent border-2 border-white  hover:bg-white hover:border-white hover:text-black"):("text-lightGrey border-2 border-lightGrey bg-transparent hover:bg-lightGrey hover:text-white")}
            `}>
              Sign Up
            </button>
            <button className= {`px-8  py-2 h-fit w-30  font-semibold  transition-all duration-500 ease-in-out rounded-full  text-md
            ${path === '/' ?("border-2 border-white bg-white text-lightGrey hover:bg-transparent hover:text-white hover:border-white"):("bg-lightGrey text-white border-2 border-transparent hover:bg-white hover:border-2 hover:border-lightGrey hover:text-lightGrey ")}
            `}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
