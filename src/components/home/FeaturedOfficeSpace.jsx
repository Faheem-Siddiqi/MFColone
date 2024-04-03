import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
export default function FeaturedOfficeSpace() {
  return (
    <>
      <div className=" py-5  bg-stone-200 h-fit  container-fluid relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -start">
          <div className="relative flex flex-col items-center justify-center lg:flex-row  md:flex-row lg:justify-center">
            <h2
              className="text-3xl lg:text-3xl xl:text-4xl  text-center lg:text-center mr-4  lg:mb-0 tracking-widest font-Syncopate-Bold font-bold "
              style={{
                background: "linear-gradient(to right, #C89F37, #F0DC73)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              FEATURED
            </h2>
            <h2 className="text-3xl lg:text-3xl xl:text-4xl  text-center lg:text-center whitespace-nowrap  tracking-widest font-Syncopate-Bold font-bold ">
              OFFICE SPACES
            </h2>
          </div>
        </div>
        <div className="py-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto  gap-8  w-fit h-fit ">
          <div className="flex flex-col gap-y-8 ">
            <div
              className="relative group card w-[17.5rem] h-[350px]  md:w-80 md:h-[500px] mx-auto bg-cover bg-center shadow-xl  transition-all duration-100 hover:border-2 border-yellow-500"
              style={{ backgroundImage: "url(/assets/images/mansory1.png)" }}
            >
              <div className="z-10 absolute  px-5 text-xl  h-full w-full  bg-transparent text-center bg-opacity-65 bottom-0 py-2  group-hover:h-full group-hover:w-full group-hover:rounded-xl group-hover:bg-black group-hover:bg-opacity-60 transition-height transition-width duration-300">
                <p className="bottom-4 w-full my-2 opacity-1 font-bold left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:h-fit group-hover:bottom-[50%] px-5 absolute text-white text-xl text-center transition-all duration-300 font-Syncopate-Bold uppercase tracking-wider">
                  50 Liverpool Street, London EC2M 7PY, UK
                </p>
              </div>
              <button className="mt-10 z-40 outline-none rounded-full my-auto w-8/12 py-2  px-4  items-center justify-center text-center block mx-auto opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-0 group-hover:bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-3/4">
                <span className="font-bold text-md md:text-xl font-s mx-auto">
                  View Property
                </span>
                <MdOutlineArrowOutward className="inline text-yellow-600 font-bold text-xl" />
              </button>
            </div>
            {/* card-4 */}
            <div
              className="relative group card w-[17.5rem]   h-[350px]  md:w-80  mx-auto  rounded-xl bg-cover bg-center shadow-xl   transition-all duration-100 hover:border-2 border-yellow-500"
              style={{ backgroundImage: "url(/assets/images/mansory4.png)" }}
            >
              <div className="z-10 absolute  px-5 text-xl  h-full w-full  bg-transparent text-center bg-opacity-65 bottom-0 py-2  group-hover:h-full group-hover:w-full group-hover:rounded-xl group-hover:bg-black group-hover:bg-opacity-60 transition-height transition-width duration-300">
                <p className="bottom-4 w-full my-2 opacity-1 font-bold left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:h-fit group-hover:bottom-[50%] px-5 absolute text-white text-xl text-center transition-all duration-300 font-Syncopate-Bold uppercase tracking-wider">
                  50 Liverpool Street, London EC2M 7PY, UK
                </p>
              </div>
              <button className="mt-10 z-40 outline-none rounded-full my-auto w-8/12 py-2  px-4  items-center justify-center text-center block mx-auto opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-0 group-hover:bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-3/4">
                <span className="font-bold text-md md:text-xl  mx-auto font-Syncopate-Bold">
                  View Property
                </span>
                <MdOutlineArrowOutward className="inline text-yellow-600 font-bold text-xl" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            {/* card2 */}
            <div
              className="relative group card w-[17.5rem] h-[350px]  md:w-80  mx-auto  bg-cover bg-center shadow-xl  rounded-xl transition-all duration-100 hover:border-2 border-yellow-500"
              style={{ backgroundImage: "url(/assets/images/mansory2.png)" }}
            >
              <div className="z-10 absolute   px-5 text-xl  h-full w-full  bg-transparent text-center bg-opacity-65 bottom-0 py-2  group-hover:h-full group-hover:w-full group-hover:rounded-xl group-hover:bg-black group-hover:bg-opacity-60 transition-height transition-width duration-300">
                <p className="bottom-4 w-full my-2 opacity-1 font-bold left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:h-fit group-hover:bottom-[50%] px-5 absolute text-white text-xl text-center transition-all duration-300 font-Syncopate-Bold uppercase tracking-wider">
                  14 New Street, London EC2M 4HE, UK
                </p>
              </div>
              <button className="mt-10 z-40 outline-none rounded-full my-auto w-8/12 py-2  px-4  items-center justify-center text-center block mx-auto opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-0 group-hover:bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-3/4">
                <span className="font-bold text-md md:text-xl  mx-auto font-Syncopate-Bold">
                  View Property
                </span>
                <MdOutlineArrowOutward className="inline text-yellow-600 font-bold text-xl" />
              </button>
            </div>
            <div
              className="relative group card w-[17.5rem] h-[350px]  md:w-80 md:h-[500px] mx-auto bg-cover bg-center shadow-xl   transition-all duration-100 hover:border-2 border-yellow-500"
              style={{ backgroundImage: "url(/assets/images/mansory5.png)" }}
            >
              <div className="z-10 absolute  px-5 text-xl  h-full w-full  bg-transparent text-center bg-opacity-65 bottom-0 py-2  group-hover:h-full group-hover:w-full group-hover:rounded-xl group-hover:bg-black group-hover:bg-opacity-60 transition-height transition-width duration-300">
                <p className="bottom-4 w-full my-2 opacity-1 font-bold left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:h-fit group-hover:bottom-[50%] px-5 absolute text-white text-xl text-center transition-all duration-300 font-Syncopate-Bold uppercase tracking-wider">
                  65 Curzon Street, London W1J 8PE, UK
                </p>
              </div>
              <button className="mt-10 z-40 outline-none rounded-full my-auto w-8/12 py-2  px-4  items-center justify-center text-center block mx-auto opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-0 group-hover:bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-3/4">
                <span className="font-bold text-md md:text-xl  mx-auto font-Syncopate-Bold">
                  View Property
                </span>
                <MdOutlineArrowOutward className="inline text-yellow-600 font-bold text-xl" />
              </button>
            </div>
          </div>
          <div className="flex flex-col  sm:flex md:hidden lg:flex gap-y-5">
            <div
              className="relative group card w-[17.5rem] h-[350px]  md:w-80 md:h-[500px] mx-auto bg-cover bg-center shadow-xl   transition-all duration-100 hover:border-2 border-yellow-500"
              style={{ backgroundImage: "url(/assets/images/mansory3.png)" }}
            >
              <div className="z-10 absolute  px-5 text-xl  h-full w-full  bg-transparent text-center bg-opacity-65 bottom-0 py-2  group-hover:h-full group-hover:w-full group-hover:rounded-xl group-hover:bg-black group-hover:bg-opacity-60 transition-height transition-width duration-300">
                <p className="bottom-4 w-full my-2 opacity-1 font-bold left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:h-fit group-hover:bottom-[50%] px-5 absolute text-white text-xl text-center transition-all duration-300 font-Syncopate-Bold uppercase tracking-wider">
                  100 Liverpool Street, London EC2M 7PY, UK
                </p>
              </div>
              <button className="mt-10 z-40 outline-none rounded-full my-auto w-8/12 py-2  px-4 flex items-center justify-center text-center  mx-auto opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-0 group-hover:bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-3/4">
                <span className="font-bold text-md md:text-xl  mx-auto font-Syncopate-Bold">
                  View Property
                </span>
                <MdOutlineArrowOutward className="inline text-yellow-600 font-bold text-xl" />
              </button>
            </div>
            <div
              className="relative group card w-[17.5rem] h-[350px]  md:w-80  mx-auto  bg-cover bg-center shadow-xl mt-2 rounded-xl transition-all duration-100 hover:border-2 border-yellow-500"
              style={{ backgroundImage: "url(/assets/images/mansory2.png)" }}
            >
              {" "}
              <div className="z-10 absolute  px-5 text-xl  rounded-xl h-full w-full  bg-transparent text-center bg-opacity-65 bottom-0 py-2  group-hover:h-full group-hover:w-full group-hover:rounded-xl group-hover:bg-black group-hover:bg-opacity-60 transition-height transition-width duration-300">
                <p className="bottom-4 w-full my-2 opacity-1 font-bold left-1/2 transform -translate-x-1/2 group-hover:opacity-100 group-hover:h-fit group-hover:bottom-[50%] px-5 absolute text-white text-xl text-center transition-all duration-300 font-Syncopate-Bold uppercase tracking-wider">
                  76 New Bond Street W1, Mayfair, London
                </p>
              </div>
              <button className="mt-10 z-40 outline-none rounded-full my-auto w-8/12 py-2  px-4  items-center justify-center text-center block mx-auto opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-0 group-hover:bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-3/4">
                <span className="font-bold text-md md:text-xl  mx-auto font-Syncopate-Bold">
                  View Property
                </span>
                <MdOutlineArrowOutward className="inline text-yellow-600 font-bold text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 transform  translate-y-2/4 ">
          <button className="flex items-center justify-center lg:justify-center px-5 group">
            <p className="text-xl font-bold   group-hover:border-b-2 border-gray-500 duration-100">
              Visit More
            </p>
            <FaArrowRight className=" group-hover:translate-x-[5px] duration-500 mx-2 text-xl text-yellow-600" />
          </button>
        </div>
      </div>
    </>
  );
}
