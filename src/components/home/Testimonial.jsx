"use client";
import React from "react";
import Image from "next/image";
export default function Testimonial() {
  const scrollToSlide = (slideId) => {
    const slide = document.getElementById(slideId);
    if (slide) {
      slide.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };
  return (
    <>
      <div className="mx-auto mt-11 container">
        <div className="flex flex-col tracking-widest items-center justify-center lg:flex-row lg:justify-center">
          <h2
            className="text-3xl lg:text-3xl xl:text-4xl  text-center lg:text-center tracking-widest font-Syncopate-Bold font-bold"
            style={{
              background: "linear-gradient(to right, #C89F37, #F0DC73)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CLIENT TESTIMONIALS
          </h2>
          <h2 className=" text-2xl sm:text-3xl lg:text-3xl xl:text-4xl tracking-widest font-Syncopate-Bold font-bold text-center lg:text-center mt-4 lg:mt-0 lg:ml-4 text-lightGrey">
            THAT SPEAK VOLUME
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <hr className="w-full my-3 bg-gray-100" />
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
        <p className="text-[22px]  text-lightGrey  text-center mt-2 mb-8 text-justify-between">
          Dive into the Tapestry of Experiences shared by those who walked the
          journey with us - Where satisfaction finds its voice.
        </p>
      </div>
      <div className="container mx-auto  bg-stone-200 rounded-lg py-11 ">
        <div className="carousel w-full overflow-hidden  ">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-wrap mx-auto justify-center items-center gap-8">
              <div
                className="relative card w-80 h-96  bg-cover bg-center"
                style={{ backgroundImage: "url(/assets/images/AlexTuner.png)" }}
              >
                <div className="">
                  <div className="absolute  bottom-4  left-4  px-3 py-1  flex bg-white rounded-full items-center">
                    <div>
                      <button className="pt-1">
                        <Image
                          src="/assets/images/PlayVideo.png"
                          alt="Image"
                          width={30}
                          height={30}
                        />
                      </button>
                    </div>
                    <div className="flex flex-col ml-4 pr-4">
                      <h2 className="text-grey-900 font-semibold text-md">
                        Alex Tuner
                      </h2>
                      <p className="text-gray-600 text-xs whitespace-nowrap">
                        Innovate Hub
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-80  h-96 rounded-xl bg-stone-700 shadow-xl">
                <div className="card-body pt-11">
                  <p className=" text-sm tracking-tight text-white pt-11">
                    MayfairAgent truly understands the needs of modern
                    businesses. Their flexible office solutions and top-notch
                    amenities have significantly contributed to our productivity
                    and efficiency.
                  </p>
                  <div className="flex items-center px-2 mt-11">
                    <div className="">
                      <Image
                        src="/assets/images/EmilyJohnson.png"
                        alt="Image"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex flex-col ml-4 ">
                      <h2 className="text-amber-300 text-left text-md font-semibold">
                        Emily Johnson
                      </h2>
                      <p className="text-white text-left text-xs whitespace-nowrap">
                        Founder of Johnson Marketing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-80 h-96 shadow-xl bg-yellow-200">
                <Image
                  className="rounded-t-lg w-full h-full "
                  src={"/assets/images/Micheael.png"}
                  alt="profile picture"
                  width={600}
                  height={10}
                />
                <div className="card-body">
                  <p className="  font-normal text-sm text-neutral-700">
                    MayfairAgent creates a collaborative and professional
                    environment. Their commitment to client satisfaction is
                    commendable.
                  </p>
                  <p className="text-md text-grey-900 font-bold">
                    Michael Williams
                  </p>
                  <p className=" whitespace-norap text-neutral-700 text-sm">
                    CFO of Williams & Associates
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide3"
                onClick={function (event) {
                  event.preventDefault();
                  scrollToSlide("slide3");
                }}
                className="btn btn-circle hover:bg-state-400 bg-transparent border-none text-amber-600 text-2xl"
              >
                ❮
              </a>
              <a
                onClick={function (event) {
                  event.preventDefault();
                  scrollToSlide("slide2");
                }}
                href="#slide2"
                className="btn btn-circle hover:bg-state-400 bg-transparent border-none text-amber-600 text-2xl"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-wrap mx-auto justify-center items-center gap-8">
              <div
                className="relative card w-80 h-96  bg-cover bg-center"
                style={{ backgroundImage: "url(/assets/images/AlexTuner.png)" }}
              >
                <div className="">
                  <div className="absolute   bottom-4  left-4  px-3 py-1  flex bg-white rounded-full items-center">
                    <div>
                      <button className="pt-1">
                        <Image
                          src="/assets/images/PlayVideo.png"
                          alt="Image"
                          width={30}
                          height={30}
                        />
                      </button>
                    </div>
                    <div className="flex flex-col ml-4 pr-4">
                      <h2 className="text-grey-900 font-semibold text-md">
                        Alex Tuner
                      </h2>
                      <p className="text-gray-600 text-xs whitespace-nowrap">
                        Innovate Hub
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-80  h-96 rounded-xl bg-stone-700 shadow-xl">
                <div className="card-body pt-11">
                  <p className="text-2xl text-sm tracking-tight text-white pt-11">
                    MayfairAgent truly understands the needs of modern
                    businesses. Their flexible office solutions and top-notch
                    amenities have significantly contributed to our productivity
                    and efficiency.
                  </p>
                  <div className="flex items-center px-2 mt-11">
                    <div className="">
                      <Image
                        src="/assets/images/EmilyJohnson.png"
                        alt="Image"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex flex-col ml-4 ">
                      <h2 className="text-amber-300 text-left text-md font-semibold">
                        Emily Johnson
                      </h2>
                      <p className="text-white text-left text-xs whitespace-nowrap">
                        Founder of Johnson Marketing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-80 h-96  shadow-xl bg-yellow-200">
                <Image
                  className="rounded-t-lg w-full h-full "
                  src={"/assets/images/Micheael.png"}
                  alt="profile picture"
                  width={600}
                  height={10}
                />
                <div className="card-body">
                  <p className="  font-normal text-sm text-neutral-700">
                    MayfairAgent creates a collaborative and professional
                    environment. Their commitment to client satisfaction is
                    commendable.
                  </p>
                  <p className="text-md text-grey-900 font-bold">
                    Michael Williams
                  </p>
                  <p className=" whitespace-norap text-neutral-700 text-sm">
                    CFO of Williams & Associates
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide1"
                onClick={function (event) {
                  event.preventDefault();
                  scrollToSlide("slide1");
                }}
                className="btn btn-circle hover:bg-state-400 bg-transparent border-none text-amber-600 text-2xl"
              >
                ❮
              </a>
              <a
                href="#slide3"
                onClick={function (event) {
                  event.preventDefault();
                  scrollToSlide("slide3");
                }}
                className="btn btn-circle hover:bg-state-400 bg-transparent border-none text-amber-600 text-2xl"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-wrap mx-auto justify-center items-center gap-8">
              <div
                className="relative card w-80 h-96  bg-cover bg-center"
                style={{ backgroundImage: "url(/assets/images/AlexTuner.png)" }}
              >
                <div className="">
                  <div className="absolute   bottom-4  left-4  px-3 py-1  flex bg-white rounded-full items-center">
                    <div>
                      <button className="pt-1">
                        <Image
                          src="/assets/images/PlayVideo.png"
                          alt="Image"
                          width={30}
                          height={30}
                        />
                      </button>
                    </div>
                    <div className="flex flex-col ml-4 pr-4">
                      <h2 className="text-grey-900 font-semibold text-md">
                        Alex Tuner
                      </h2>
                      <p className="text-gray-600 text-xs whitespace-nowrap">
                        Innovate Hub
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-80  h-96 rounded-xl bg-stone-700 shadow-xl">
                <div className="card-body pt-11">
                  <p className="text-2xl text-sm tracking-tight text-white pt-11">
                    MayfairAgent truly understands the needs of modern
                    businesses. Their flexible office solutions and top-notch
                    amenities have significantly contributed to our productivity
                    and efficiency.
                  </p>
                  <div className="flex items-center px-2 mt-11">
                    <div className="">
                      <Image
                        src="/assets/images/EmilyJohnson.png"
                        alt="Image"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="flex flex-col ml-4 ">
                      <h2 className="text-amber-300 text-left text-md font-semibold">
                        Emily Johnson
                      </h2>
                      <p className="text-white text-left text-xs whitespace-nowrap">
                        Founder of Johnson Marketing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-80 h-96 shadow-xl bg-yellow-200">
                <Image
                  className="rounded-t-lg w-full h-full "
                  src={"/assets/images/Micheael.png"}
                  alt="profile picture"
                  width={600}
                  height={10}
                />
                <div className="card-body">
                  <p className="  font-normal text-sm text-neutral-700">
                    MayfairAgent creates a collaborative and professional
                    environment. Their commitment to client satisfaction is
                    commendable.
                  </p>
                  <p className="text-md text-grey-900 font-bold">
                    Michael Williams
                  </p>
                  <p className=" whitespace-norap text-neutral-700 text-sm">
                    CFO of Williams & Associates
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide2"
                onClick={function (event) {
                  event.preventDefault();
                  scrollToSlide("slide2");
                }}
                className="btn btn-circle hover:bg-state-400 bg-transparent border-none text-amber-600 text-2xl"
              >
                ❮
              </a>
              <a
                href="#slide1"
                onClick={function (event) {
                  event.preventDefault();
                  scrollToSlide("slide1");
                }}
                className="btn btn-circle hover:bg-state-400 bg-transparent border-none text-amber-600 text-2xl"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
