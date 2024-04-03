"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import Favourited from "./Favourited";
import styles from "./officeSearch.css";
import  Map from "./Map.jsx";
export default function Content() {
  const [isClicked, setIsClicked] = useState(false);
 
 
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row  ${isClicked ? "justify-start  " : "justify-center"
          } 'w-full border-b-5 `}
      >
        <div
          className={` w-fit  ${isClicked ? "mx-0" : "mx-auto"
            }  lg:order-1 px-5 font-TitilliumWeb lg:h-[100vh] lg:overflow-y-scroll
      `}
        >
          <div className="flex flex-wrap  justify-center ">
            <div
              className={`grid ${isClicked ? "lg:grid-cols-1 w-full" : "lg:grid-cols-2 w-fit"
                } gap-4`}
            >
              {/* card1 left */}
              <div className=" flex flex-col mt-5 items-center border  rounded-2xl md:flex-row h-fit w-fit px-0 md:px-2 py-2 mx-auto bg-white shadow-sm gap-2">
                <div className=" relative flex items-center w-[96] lg:w-[40%] mt-2 lg:mt-0 h-[14rem]   ">
                  <div className="absolute top-5 md:top-2  left-[3.2rem] lg:left-2 xl:left-2 text-sm rounded-md border-2 py-[1px] px-1 border-lime-500 bg-opacity-80 bg-white">
                    Available
                  </div>
                  <Image
                    src="/assets/images/officeSearch2.png"
                    alt="officeDisplay1"
                    className=" w-full min-h-full mt-5 md:mt-0 px-11 md:px-0"
                    width={1000}
                    height={10}
                  />
                </div>
                <div className="w-[60%]">
                  <div className="flex flex-col justify-start mt-5 md:mt-0">
                    <div className="flex flex-col gap-2 ">
                      <div className="flex-grow relative">
                        <div className="flex items-center">
                          <span className="text-darkGolden text-xl font-semibold">
                            £4,850
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            / month
                          </span>
                        </div>
                        <div className="absolute top-0  right-2">
                         <Favourited/>
                        </div>
                      </div>
                      <div className="flex-grow text-black font-semibold  ">
                        42 Berkeley Square
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <CiLocationOn />
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            1&3 Hill Street
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <div className="flex gap-4">
                              <div>
                                <span className="font-semibold text-sm">
                                  Size:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                              <div>
                                <span className="font-semibold text-sm">
                                  Space:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-start  md:items-center flex-col md:flex-row">
                          <span className="text-lightGrey  text-xs">
                            Bond Street 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1  ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-start  md:items-center flex-col md:flex-row">
                          <span className="text-lightGrey  text-xs">
                            Green Park 0.6 km 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1  ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-start  md:items-center flex-col md:flex-row">
                          <span className="text-lightGrey  text-xs">
                            Oxford Circus
                          </span>
                          <span className="text-yellow-500 text-xs ml-1  ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card2 right */}
              <div className=" flex flex-col mt-5 items-center border  rounded-2xl md:flex-row h-fit w-fit px-0 md:px-2 py-2 mx-auto bg-white shadow-sm gap-2">
                <div className=" relative flex items-center w-[96] lg:w-[40%] mt-2 lg:mt-0 h-[14rem]   ">
                  <div
                    className="absolute top-5 md:top-2 left-[3.2rem] lg:left-2 xl:left-2 text-red-500 text-sm rounded-md border-2 py-[1px] px-1 border-red-500 bg-opacity-80 bg-white
                  "
                  >
                    Let Agreed
                  </div>
                  <Image
                    src="/assets/images/officeSearch3.png"
                    alt="officeDisplay1"
                    className=" w-full min-h-full mt-5 md:mt-0  px-11 md:px-0"
                    width={1000}
                    height={10}
                  />
                </div>
                <div className="w-[60%]">
                  <div className="flex flex-col justify-start mt-5 md:mt-0">
                    <div className="flex flex-col gap-2 ">
                      <div className="flex-grow relative">
                        <div className="flex items-center">
                          <span className="text-darkGolden text-xl font-semibold">
                            £4,850
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            / month
                          </span>
                        </div>
                        <div className="absolute top-0  right-2">
                            <Favourited/>
                        </div>
                      </div>
                      <div className="flex-grow text-black font-semibold  ">
                        42 Berkeley Square
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <CiLocationOn />
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            1&3 Hill Street
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <div className="flex gap-4">
                              <div>
                                <span className="font-semibold text-sm">
                                  Size:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                              <div>
                                <span className="font-semibold text-sm">
                                  Space:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-xs">
                            Bond Street 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1 text-center ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-xs">
                            Green Park 0.6 km 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1 text-center ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-xs">
                            Oxxford Circus{" "}
                          </span>
                          <span className="text-yellow-500 text-xs ml-1 text-center ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card1 left */}
              <div className=" flex flex-col mt-5 items-center border  rounded-2xl md:flex-row h-fit w-fit px-0 md:px-2 py-2 mx-auto bg-white shadow-sm gap-2">
                <div className=" relative flex items-center w-[96] lg:w-[40%] mt-2 lg:mt-0 h-[14rem]   ">
                  <div className="absolute top-5 md:top-2  left-[3.2rem] lg:left-2 xl:left-2 text-sm rounded-md border-2 py-[1px] px-1 border-lime-500 bg-opacity-80 bg-white">
                    Available
                  </div>
                  <Image
                    src="/assets/images/officeSearch2.png"
                    alt="officeDisplay1"
                    className=" w-full min-h-full mt-5 md:mt-0 px-11 md:px-0"
                    width={1000}
                    height={10}
                  />
                </div>
                <div className="w-[60%]">
                  <div className="flex flex-col justify-start mt-5 md:mt-0">
                    <div className="flex flex-col gap-2 ">
                      <div className="flex-grow relative">
                        <div className="flex items-center">
                          <span className="text-darkGolden text-xl font-semibold">
                            £4,850
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            / month
                          </span>
                        </div>
                        <div className="absolute top-0  right-2">
                       <Favourited/>
                        </div>
                      </div>
                      <div className="flex-grow text-black font-semibold  ">
                        42 Berkeley Square
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <CiLocationOn />
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            1&3 Hill Street
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <div className="flex gap-4">
                              <div>
                                <span className="font-semibold text-sm">
                                  Size:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                              <div>
                                <span className="font-semibold text-sm">
                                  Space:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-start  md:items-center flex-col md:flex-row">
                          <span className="text-lightGrey  text-xs">
                            Bond Street 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1  ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-start  md:items-center flex-col md:flex-row">
                          <span className="text-lightGrey  text-xs">
                            Green Park 0.6 km 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1  ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-start  md:items-center flex-col md:flex-row">
                          <span className="text-lightGrey  text-xs">
                            Oxford Circus
                          </span>
                          <span className="text-yellow-500 text-xs ml-1  ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card2 right */}
              <div className=" flex flex-col mt-5 items-center border  rounded-2xl md:flex-row h-fit w-fit px-0 md:px-2 py-2 mx-auto bg-white shadow-sm gap-2">
                <div className=" relative flex items-center w-[96] lg:w-[40%] mt-2 lg:mt-0 h-[14rem]   ">
                  <div
                    className="absolute top-5 md:top-2 left-[3.2rem] lg:left-2 xl:left-2 text-red-500 text-sm rounded-md border-2 py-[1px] px-1 border-red-500 bg-opacity-80 bg-white
                  "
                  >
                    Let Agreed
                  </div>
                  <Image
                    src="/assets/images/officeSearch3.png"
                    alt="officeDisplay1"
                    className=" w-full min-h-full mt-5 md:mt-0  px-11 md:px-0"
                    width={1000}
                    height={10}
                  />
                </div>
                <div className="w-[60%]">
                  <div className="flex flex-col justify-start mt-5 md:mt-0">
                    <div className="flex flex-col gap-2 ">
                      <div className="flex-grow relative">
                        <div className="flex items-center">
                          <span className="text-darkGolden text-xl font-semibold">
                            £4,850
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            / month
                          </span>
                        </div>
                        <div className="absolute top-0  right-2">
                            <Favourited/>
                        </div>
                      </div>
                      <div className="flex-grow text-black font-semibold  ">
                        42 Berkeley Square
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <CiLocationOn />
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            1&3 Hill Street
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <div className="flex gap-4">
                              <div>
                                <span className="font-semibold text-sm">
                                  Size:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                              <div>
                                <span className="font-semibold text-sm">
                                  Space:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-xs">
                            Bond Street 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1 text-center ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-xs">
                            Green Park 0.6 km 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1 text-center ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-xs">
                            Oxxford Circus{" "}
                          </span>
                          <span className="text-yellow-500 text-xs ml-1 text-center ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card1 left */}
              <div className=" flex flex-col mt-5 items-center border  rounded-2xl md:flex-row h-fit w-fit px-0 md:px-2 py-2 mx-auto bg-white shadow-sm gap-2">
                <div className=" relative flex items-center w-[96] lg:w-[40%] mt-2 lg:mt-0 h-[14rem]   ">
                  <div className="absolute top-5 md:top-2  left-[3.2rem] lg:left-2 xl:left-2 text-sm rounded-md border-2 py-[1px] px-1 border-lime-500 bg-opacity-80 bg-white">
                    Available
                  </div>
                  <Image
                    src="/assets/images/officeSearch2.png"
                    alt="officeDisplay1"
                    className=" w-full min-h-full mt-5 md:mt-0 px-11 md:px-0"
                    width={1000}
                    height={10}
                  />
                </div>
                <div className="w-[60%]">
                  <div className="flex flex-col justify-start mt-5 md:mt-0">
                    <div className="flex flex-col gap-2 ">
                      <div className="flex-grow relative">
                        <div className="flex items-center">
                          <span className="text-darkGolden text-xl font-semibold">
                            £4,850
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            / month
                          </span>
                        </div>
                        <div className="absolute top-0  right-2">
                       <Favourited/>     

                        </div>
                      </div>
                      <div className="flex-grow text-black font-semibold  ">
                        42 Berkeley Square
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <CiLocationOn />
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            1&3 Hill Street
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <div className="flex gap-4">
                              <div>
                                <span className="font-semibold text-sm">
                                  Size:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                              <div>
                                <span className="font-semibold text-sm">
                                  Space:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-start  md:items-center flex-col md:flex-row">
                          <span className="text-lightGrey  text-xs">
                            Bond Street 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1  ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-start  md:items-center flex-col md:flex-row">
                          <span className="text-lightGrey  text-xs">
                            Green Park 0.6 km 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1  ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-start  md:items-center flex-col md:flex-row">
                          <span className="text-lightGrey  text-xs">
                            Oxford Circus
                          </span>
                          <span className="text-yellow-500 text-xs ml-1  ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card2 right */}
              <div className=" flex flex-col mt-5 items-center border  rounded-2xl md:flex-row h-fit w-fit px-0 md:px-2 py-2 mx-auto bg-white shadow-sm gap-2">
                <div className=" relative flex items-center w-[96] lg:w-[40%] mt-2 lg:mt-0 h-[14rem]   ">
                  <div
                    className="absolute top-5 md:top-2 left-[3.2rem] lg:left-2 xl:left-2 text-red-500 text-sm rounded-md border-2 py-[1px] px-1 border-red-500 bg-opacity-80 bg-white
                  "
                  >
                    Let Agreed
                  </div>
                  <Image
                    src="/assets/images/officeSearch3.png"
                    alt="officeDisplay1"
                    className=" w-full min-h-full mt-5 md:mt-0  px-11 md:px-0"
                    width={1000}
                    height={10}
                  />
                </div>
                <div className="w-[60%]">
                  <div className="flex flex-col justify-start mt-5 md:mt-0">
                    <div className="flex flex-col gap-2 ">
                      <div className="flex-grow relative">
                        <div className="flex items-center">
                          <span className="text-darkGolden text-xl font-semibold">
                            £4,850
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            / month
                          </span>
                        </div>
                        <div className="absolute top-0  right-2">
                            <Favourited/>
                        </div>
                      </div>
                      <div className="flex-grow text-black font-semibold  ">
                        42 Berkeley Square
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <CiLocationOn />
                          </span>
                          <span className="text-stone-500 text-sm ml-1">
                            1&3 Hill Street
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-md">
                            <div className="flex gap-4">
                              <div>
                                <span className="font-semibold text-sm">
                                  Size:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                              <div>
                                <span className="font-semibold text-sm">
                                  Space:
                                </span>
                                <span className="text-sm">1200 Sqft</span>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow ">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-xs">
                            Bond Street 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1 text-center ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-xs">
                            Green Park 0.6 km 0.5 km
                          </span>
                          <span className="text-yellow-500 text-xs ml-1 text-center ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <span className="text-lightGrey  text-xs">
                            Oxxford Circus{" "}
                          </span>
                          <span className="text-yellow-500 text-xs ml-1 text-center ">
                            (7 mins walk)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:w-[0.5%] text-white  bg-black w-full h-auto cursor-w-resize lg:order-2 "
          onClick={handleClick}
        >
          H I D E
        </div>
        <div
          className={` ${isClicked ? "lg:w-[80.5%] mx-2 " : "lg:w-[31.5%]  "
            } w-fit  bg-stone-600  lg:order-3`}
        >
          <Map className="w-fit" />
        </div>
      </div>
    </>
  );
}
