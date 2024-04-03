"use client";
import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import Image from "next/image";
import { VscClose } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
export default function Filters() {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <>
      <div className="flex border-b px-5  my-5 w-full h-[5rem] gap-4">
        <label
          htmlFor="my-drawer"
          className=" p-5 bg-lightGrey h-fit rounded-xl hover:shadow-xl btn hover:bg-lightGrey select-none group-hover:shadow-2xl"
        >
          <Image
            className="group w-4 h-4"
            src="/assets/images/menu.png"
            alt="menuSidebar"
            width={1000}
            height={1000}
          />
        </label>
        <div className=" md:w-6/12 lg:w-1/4">
          <form className="flex justify-between px-2 bg-white  w-full border rounded-xl py-2 items-center">
            <input
              type="text"
              name="Location"
              id="Location"
              placeholder="Share Location"
              required
              className="w-full h-10 pl-2 bg-transparent rounded-full outline-none  shadow-none placeholder-black"
            />
            <button
              type="submit"
              className="w-30 pr-2  font-semibold text-black uppercase rounded-full outline-none cursor-pointer"
            >
              <CiSearch className="text-2xl" />
            </button>
          </form>
        </div>
      </div>
      <div className="drawer" style={{ zIndex: "1000" }}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay cursor-none "
          >
            <div className="cursor-none"></div>
          </label>
          {/* Sidebar content here */}
          <ul className="menu py-4 px-auto shadow-md rounded-r-2xl  w-[18rem] md:w-80 min-h-full bg-white ">
            <div className="relative">
              <input type="checkbox" id="my-drawer" className="hidden" />
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="absolute rounded-full bg-lightGrey py-2 px-2 right-2 cursor-pointer"
              >
                <VscClose className="text-white font-bold text-2xl" />
              </label>
              <div className="drawer-overlay cursor-none">
                <div className="cursor-none"></div>
              </div>
            </div>
            <h2 className="text-2xl font-bold font-TitilliumWeb tracking-wide mx-auto w-11/12 mt-10   text-black ">
              Filters
            </h2>
            <div className="mx-auto w-11/12 mt-5 relative">
              <Image
                className="absolute w-7 left-[0.5rem] top-[2.9rem] opacity-75 "
                src="/assets/images/officeType.png"
                width={600}
                height={10}
                alt="office"
              />
              <p className="text-black text-base  font-semibold">
                Office Type{" "}
              </p>
              <select
                id="mySelect1"
                className="mt-3 rounded-xl border outline-none px-9 py-3 w-full max-w-xs"
                defaultValue="Services"
              >
                <option className="text-sm" disabled>Services</option>
                <option className="text-sm" value="">
                  Select a service 2
                </option>
                <option className="text-sm" value="3">
                  Select a service 3
                </option>
              </select>
            </div>
            <div className=" mx-auto w-11/12 mt-5 relative">
              <Image
                className="absolute w-7 left-[0.5rem] top-[2.9rem] opacity-75 "
                src="/assets/images/sizeSq..png"
                width={600}
                height={10}
                alt="officePic-2"
              />
              <p className="text-black text-base font-semibold">
                Size Sq. ft.{" "}
              </p>
              <select
  id="mySelect2"
  className="mt-3 rounded-xl border px-9 py-3 outline-none w-full max-w-xs"
  defaultValue="Size Sq. ft." 
>
  <option className="text-sm" value="val"  disabled>
    Size Sq. ft. 
  </option>
  <option className="text-sm" value="val" >
    Size Sq. ft. 2
  </option>
  <option className="text-sm" value="val">
    Size Sq. ft. 3
  </option>
</select>
            </div>
            <div className="mx-auto w-11/12 mt-5 relative">
              <Image
                className="absolute w-7  left-[0.5rem] top-[3.1rem] opacity-75 "
                src="/assets/images/desk.png"
                width={600}
                height={10}
                alt="officePic-3"
              />
              <p className="text-black text-base font-semibold ">Desks </p>
              <select
              id="mySelect3"
  className="mt-3 rounded-xl border px-9 py-3 outline-none w-full max-w-xs"
  defaultValue="Desks" // Set default value here
>
  <option  value="Desks" disabled >
    Desks 
  </option>
  <option className="text-sm" value="val">
    Desks 
  </option>
  <option className="text-sm" value="val">
    Desks 
  </option>
</select>
            </div>
            <div className="mx-auto w-11/12 mt-5">
              <p className="text-black text-base font-semibold ">
                Price Range{" "}
              </p>
              <div className="flex items-center justify-center mt-3 ">
                <div className="w-96">
                  <MultiRangeSlider
                    className=""
                    min={0}
                    max={100}
                    step={5}
                    label="false"
                    ruler="false"
                    barInnerColor="#C89F37"
                    thumbLeftColor="#C89F37"
                    thumbRightColor="#C89F37"
                    barRightColor="#C8C8C8"
                    barLeftColor="#C8C8C8"
                    minValue={minValue}
                    maxValue={maxValue}
                    onInput={(e) => {
                      handleInput(e);
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center mt-3">
                <div className="py-4  px-8 rounded-2xl border mx-2  text-lightGrey">
                  £ {minValue}
                </div>
                <hr className="w-8" />
                <div className="py-4 px-8  rounded-2xl border mx-2 text-lightGrey">
                  £ {maxValue}
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <div className="  px-6  mx-2  text-lightGrey">min</div>
                <hr className="w-11 opacity-0" />
                <div className=" px-6  mx-2 text-lightGrey">max</div>
              </div>
            </div>
            <div className="mx-auto w-11/12 mt-5">
              <p className="text-black text-base font-semibold ">
                Additional Conviences{" "}
              </p>
              <div className="flex flex-col mt-2">
                <label
                  htmlFor="checkbox1"
                  className="flex items-center justify-start my-1 text-base"
                >
                  <input
                    type="checkbox"
                    defaultChecked
                    id="checkbox1"
                    name="checkbox1"
                    className="checkbox border-gray-600 checked:border-white [--chkbg:theme(colors.darkGolden)] [--chkfg:white] mr-2 rounded-md p-[7.5px] h-4 w-3"
                  />
                  Wi-Fi
                </label>
                <label
                  htmlFor="checkbox2"
                  className="flex items-center justify-start my-1 text-base"
                >
                  <input
                    type="checkbox"
                    id="checkbox2"
                    name="checkbox2"
                    className="checkbox border-gray-600 checked:border-white [--chkbg:theme(colors.darkGolden)] [--chkfg:white] mr-2 rounded-md p-[7.5px] h-4 w-3"
                  />
                  Meeting Rooms
                </label>
                <label
                  htmlFor="checkbox3"
                  className="flex items-center justify-start my-1 text-base"
                >
                  <input
                    type="checkbox"
                    id="checkbox3"
                    name="checkbox3"
                    className="checkbox border-gray-600 checked:border-white [--chkbg:theme(colors.darkGolden)] [--chkfg:white] mr-2 rounded-md p-[7.5px] h-4 w-3"
                  />
                  Kitchenette
                </label>
                <label
                  htmlFor="checkbox4"
                  className="flex items-center justify-start my-1 text-base"
                >
                  <input
                    type="checkbox"
                    id="checkbox4"
                    name="checkbox4"
                    className="checkbox border-gray-600 checked:border-white [--chkbg:theme(colors.darkGolden)] [--chkfg:white] mr-2 rounded-md p-[7.5px] h-4 w-3"
                  />
                  Parking
                </label>
                <label
                  htmlFor="checkbox5"
                  className="flex items-center justify-start my-1 text-base"
                >
                  <input
                    type="checkbox"
                    id="checkbox5"
                    name="checkbox5"
                    className="checkbox border-gray-600 checked:border-white [--chkbg:theme(colors.darkGolden)] [--chkfg:white] mr-2 rounded-md p-[7.5px] h-4 w-3"
                  />
                  Reception Services
                </label>
              </div>
            </div>
            <div className="mx-4 -mt-3">
              <a
                href="#"
                className="text-darkGolden border-b w-fit border-white inline-block mt-5 hover:border-darkGolden transition-all duration-700"
              >
                See More
              </a>
              <button></button>
            </div>
            <div className="mx-auto w-8/12 h-14 mt-5 text-center">
              <button
                className="primaryButton   bg-lightGolden  w-full rounded-full text-base font-TitilliumWeb tracking-wide font-bold h-full"
                style={{
                  background:
                    "linear-gradient(123.8deg, #C89F37 10.98%, #E0C45B 30.53%, #F0DC73 44.52%, #E0C45B 62.59%, #C89F37 82.14%)",
                }}
              >
                Apply
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
