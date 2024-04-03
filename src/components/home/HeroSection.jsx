import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
export default function HeroSection() {
  return (
    <>
      <div className=" mx-4 mt-4 rounded-md relative z-10 -top-[5.6rem]  h-[27rem]  mb-11 ">
        <video
          className="absolute object-cover w-full h-full mx-auto -z-100 rounded-xl "
          loop
          autoPlay
          muted
        >
          <source
            // src="https://cdn.pixabay.com/vimeo/424911925/forest-40034.mp4?width=640&hash=e991729029f362b1a774fde00de5251a2eefcc30"
           src="https://cdn.pixabay.com/vimeo/219710504/thunderstorm-9451.mp4?width=1280&hash=71c0223661c63c127ffc7e7af72669b7641473ee"
            type="video/mp4"
          />
        </video>
        <div className="absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <h2
            className="mb-5 text-xl font-bold text-center sm:text-2xl lg:text-4xl xl:text-5xl font-Syncopate-Bold "
            style={{
              background: "linear-gradient(to right, #C89F37, #F0DC73)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
           
           Mayfair&apos;s Finest Office Spaces Await You
          </h2>
          <p className="px-5 mb-8 text-center text-white text-md lg:text-xl xl:text-2xl font-Syncopate-Bold w-full lg:mx-auto lg:w-11/12">
            Where every detail exudes professionalism – our serviced and managed
            offices redefine your workspace experience.
          </p>
          <button className="relative block px-10 py-4 mx-auto mb-5 transition duration-300 border rounded-full button-standard outline-0 group hover:bg-white border-lightGolden group-hover:border-darkGolden">
            <span className="transition-transform group-hover:translate-x-[-15px] inline-block  font-semibold duration-300 font-Syncopate-Bold text-xl text-lightGolden group-hover:text-darkGolden ">
              Explore Office
            </span>
            <FaArrowRight className="absolute inline-block font-semibold transition-opacity duration-300 transform translate-x-1/2 -translate-y-1/2 opacity-0  group-hover:opacity-100 top-1/2 text-lightGolden group-hover:text-darkGolden" />
          </button>
          <div className="absolute w-64 px-8 py-4 transform -translate-x-1/2 translate-y-[56%] rounded-md shadow-md sm:min-w-fit lg:rounded-full -bottom-24 left-1/2 bg-base-100">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="pr-0  lg:pr-3 border:none lg:border-r border-r-yellow-600">
                <select className="w-full max-w-xs px-4 py-2 border-b outline-none text-neutral-700 border-b-yellow-600">
                  <option disabled value="">
                    Desk
                  </option>
                  <option defaultValue>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </div>
              <div className="pr-0  lg:pr-3 border:none lg:border-r border-r-yellow-600">
                <select className="w-full max-w-xs px-4 py-2 border-b outline-none text-neutral-700 border-b-yellow-600">
                  <option disabled value="">
                    Desk
                  </option>
                  <option defaultValue>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
              </div>
              <form className="flex items-center justify-center rounded-full ">
                <input
                  type="text"
                  placeholder="Location"
                  required
                  className="w-full max-w-xs px-4 py-2 border-b outline-none placeholder-neutral-700 border-b-yellow-600"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center w-10 h-10 px-3 ml-2 font-semibold uppercase rounded-full outline-none cursor-pointer bg-zinc-800"
                >
                  <IoIosSearch className="text-xl font-semibold text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
