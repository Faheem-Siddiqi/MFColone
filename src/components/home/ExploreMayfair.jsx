import React from "react";
import Image from "next/image";
export default function ExploreMayfair () {
  return (
    <>
      <div className=" -mb-[5.5rem]">
        <div className="mt-0 lg:-mt-4 relative grid grid-cols-1 mx-auto lg:grid-cols-2 gap-x-11 w-fit justify-items-center">
          <div className="flex flex-col gap-y-8 ">
            <div className="flex items-center justify-center mt-4 sm:lg:justify-start md:mt-8 lg:mt-0">
              <h2
                className="mr-4 text-2xl font-bold tracking-wider text-center uppercase sm:text-3xl lg:text-3xl xl:text-4xl lg:text-center font-Syncopate-Bold"
                style={{
                  background: "linear-gradient(to right, #C89F37, #F0DC73)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                EXPLORE
              </h2>
              <h2 className="text-2xl font-bold tracking-wider text-center uppercase sm:text-3xl lg:text-3xl xl:text-4xl lg:text-center whitespace-nowrap font-Syncopate-Bold">
                MAYFAIR
              </h2>
            </div>
            <div className="px-10 text-xl text-left card w-fit lg:px-0 sm:w-96 h-fit">
            Discover the allure of Mayfair, one of London&apos;s most coveted addresses. Renowned for its sophistication and centrality, Mayfair epitomizes luxury and success. Our prime office locations within this esteemed district provide the ideal setting for your business ventures.
            </div>
            <div className="hidden lg:block">
              <div className=" relative card rounded-xl w-96 h-[300px]" >
                <Image className="absolute top-0 left-0 object-cover w-full h-full rounded-xl"
                 src="/assets/images/exploreMayfair2.jpeg"
                 alt="Image Mayfair-2"
                 width={600} height={10}
                 />
              </div>
            </div>
          </div>
          {/* col-2 */}
          <div className="relative flex flex-col gap-y-8">
            <div className="relative card  w-[16rem] sm:w-[26rem] sm:h-[300px] sm:px-1  mx-auto   lg:block  mt-5 lg:mt-0   ">
            <Image className="absolute top-0 left-0 w-full h-full"
                 src="/assets/images/exploreMayfair1.jpeg"
                 alt="Image Mayfair-1"
                 width={600} height={10}
                 />
            </div>
            <div className="flex items-center justify-center mt-4 lg:justify-start md:mt-8 lg:mt-0 ">
              <h2
                className="px-3 mt-0 mr-4 text-2xl font-bold tracking-wider text-center uppercase sm:text-3xl lg:text-3xl xl:text-4xl sm:text-start lg:mt-4 font-Syncopate-Bold"
                style={{
                  background: "linear-gradient(to right, #C89F37, #F0DC73)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                OFFICE SOLUTIONS
              </h2>
            </div>
            <div className="flex items-center justify-center text-3xl font-bold lg:flex lg:text-3xl xl:text-4xl lg:items-center lg:justify-start">
              <h2 className="px-3 -mt-8 text-2xl font-bold tracking-wider text-center uppercase sm:text-3xl lg:text-3xl xl:text-4xl sm:text-start whitespace-nowrap font-Syncopate-Bold">
                OFFERED
              </h2>
            </div>
            <div className="z-50  lg:-mx-5 mx-auto  bg-white text-md  md:text-xl px-5 sm:px-10 pb-5 lg:pb-0 card mb-10 text-left md: w-11/12 lg:w-[30rem] h-fit p lg:py-0">
              At MayfairAgent, we offer a curated selection of office spaces in
              various prime locations throughout Mayfair. Whether you desire a
              chic coworking space, a fully-equipped serviced office, or a
              virtual office solution, we have the perfect workspace to
              accommodate your needs. Experience the epitome of professionalism
              and convenience with our tailored office solutions.
            </div>
          </div>
        </div>
        <div className=" mx-auto z-10 overflow-hidden lg:mt-5 relative bottom-[150px]  2xl:w-[60%] xl:w-[64%]  lg:w-[73.5%] h-80  rounded-xl">
          <Image
          className="absolute z-40 hidden lg:block lg:-top-7 xl:left-[44%] lg:left-[41%] h-1/2 drop-shadow-2xl w-full"
            src="/assets/images/Rectangle 76.png"
            alt="curve rectangle"
            width={600}
            height={100}
          />
       <div className="relative w-full h-full">
  <Image
    className="w-full h-full object-cover rounded-xl"
    src="/assets/images/exploreMayfair3.jpeg"
    alt="mayfair-Bottom"
    width={600}
    height={100}
  />
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-stone-100 opacity-10 rounded-xl"></div>
</div>
        </div>
      </div>
    </>
  );
}
