import React from "react";
import Image from "next/image";
export default function Form() {
  return (
    <>
      <div className="w-full  relative font-TitilliumWeb">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded">
          <div className="flex flex-col items-center justify-center lg:flex-row  md:flex-row lg:justify-center">
            <h2 className="md:mr-4 m-0 text-3xl lg:text-3xl xl:text-4xl font-bold text-center lg:text-center whitespace-nowrap font-Syncopate-Bold uppercase tracking-wider">
              LET&#39;S GET
            </h2>
            <h2
              className="text-3xl lg:text-3xl xl:text-4xl font-bold text-center lg:text-center   lg:mb-0 font-Syncopate-Bold uppercase tracking-wider"
              style={{
                background: "linear-gradient(to right, #C89F37, #F0DC73)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              IN TOUCH
            </h2>
          </div>
        </div>
        <div className="py-10 px-5 font-TitilliumWeb">
          <div className="flex items-center">
            <hr className="w-14 mr-2 border-darkGolden inline " />
            <p className="font-bold text-darkGolden"> Contact Us</p>
          </div>
          <div className="lg:flex lg:flex-row lg:justify-end  items-center px-5 ">
            <div className="lg:w-1/2 mb-4 lg:mb-0 ">
              <form className="mt-4  mx-auto lg:mx-0   w-10/12 lg:w-full">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className=" text-sm font-semibold text-gray-700 inline-block"
                  >
                    Name
                  </label>{" "}
                  <span className="text-[0.75rem] text-red-500">*</span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-3 block w-full border border-gray-300 rounded-md outline-darkGolden shadow-md"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className=" text-sm font-semibold text-gray-700 inline-block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-3 block w-full border border-gray-300 rounded-md outline-darkGolden shadow-md"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className=" text-sm font-semibold text-gray-700 inline-block"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 p-3 block w-full border border-gray-300 rounded-md outline-darkGolden shadow-md"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className=" text-sm font-semibold text-gray-700 inline-block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 p-3 block w-full border border-gray-300 rounded-md outline-darkGolden shadow-md resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" px-8 w-fit mt-4 py-3 font-semibold text-black  rounded-full outline-none cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(123.8deg, #C89F37 10.98%, #E0C45B 30.53%, #F0DC73 44.52%, #E0C45B 62.59%, #C89F37 82.14%)",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 lg:block ml-52 hidden">
              <Image
                className="h-96 w-96"
                src="/assets/images/contactForm.png"
                alt="contactForm"
                width={600}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
