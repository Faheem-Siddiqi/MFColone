import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
export default function Footer() {
  return (
    <>
      {/* Triangle Div */}
      <div
        className="footer"
        style={{
          height: "60px",
          backgroundImage:
            "linear-gradient(to bottom right, transparent 49.5%, #272727 50%), linear-gradient(to bottom left, transparent 49.5%, #C89F37 50%, #F0DC73 80%, #F0DC73 100%)",
          backgroundPosition: "right, left",
          backgroundSize: "100% 100%, 90% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <footer
        style={{ backgroundColor: "#272727" }}
        className="relative pt-8 pb-6 border-0 "
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center ">
                <Image
                  className="w-6 h-8"
                  src="/assets/images/FooterImg.png "
                  alt="Footer Logo"
                  width={600}
                  height={100}
                />
                {/* <img className="w-5" src="/assets/images/FooterImg.png " alt="" /> */}
                <div className="flex mx-2">
                  <h4 className="py-3 text-xl font-Syncopate-Bold tracking-wider text-white">
                    Mayfair
                  </h4>
                  <h4
                    className="py-3 text-xl font-Syncopate-Bold tracking-wider "
                    style={{
                      color: "#C89F37",
                    }}
                  >
                    Agent
                  </h4>
                </div>
              </div>
              <p className="mt-0 mb-2 text-md text-left text-gray-300 font-TitilliumWeb ">
                Discover the epitome of workspace luxury in Mayfair with
                MayfairAgent. From fully-equipped offices to personalized
                support, we offer tailored solutions to elevate your business.
                Join us and redefine your workspace experience
              </p>
              <div className="mt-6 mb-6 lg:mb-0">
                <div className="flex ">
                  <div
                    className="btn btn-active flex items-center justify-center mr-2 font-normal rounded-full shadow-lg outline-none h-6 w-15 border-none  hover:bg-lightGrey hover:duration-700  bg-neutral-700 text-lightBlue-400 align-center focus:outline-none"
                    type="button"
                  >
                    <FaFacebookF className="text-white text-md" />
                  </div>
                  <div
                    className="btn btn-active flex items-center justify-center mr-2 font-normal rounded-full shadow-lg outline-none h-6 w-15 border-none  hover:bg-lightGrey hover:duration-700  bg-neutral-700 text-lightBlue-400 align-center focus:outline-none"
                    type="button"
                  >
                    <GrInstagram className="text-white text-md" />
                  </div>
                  <div
                    className="btn btn-active flex items-center justify-center mr-2 font-normal rounded-full shadow-lg outline-none h-6 w-15 border-none  hover:bg-lightGrey hover:duration-700  bg-neutral-700 text-lightBlue-400 align-center focus:outline-none"
                    type="button"
                  >
                    <FaLinkedinIn className="text-white text-md" />
                  </div>
                  <div
                    className="btn btn-active flex items-center justify-center mr-2 font-normal rounded-full shadow-lg outline-none h-6 w-15 border-none  hover:bg-lightGrey hover:duration-700  bg-neutral-700 text-lightBlue-400 align-center focus:outline-none"
                    type="button"
                  >
                    <FaXTwitter className="text-white text-md" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-4/12">
                  <span className="block mb-2 text-md font-bold text-white uppercase font-TitilliumWeb">
                    Quick Links
                  </span>
                  <ul className="list-none">
                    <li>
                      <a
                        className="block mb-2 text-md font-medium text-gray-300 font-TitilliumWeb border-b border-transparent w-fit transition-all duration-500  hover:border-yellow-700"
                        href=""
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="block mb-2 text-md font-medium text-gray-300 font-TitilliumWeb border-b border-transparent w-fit transition-all duration-500  hover:border-yellow-700"
                        href=""
                      >
                        Office Search
                      </a>
                    </li>
                    <li>
                      <a
                        className="block mb-2 text-md font-medium text-gray-300 font-TitilliumWeb border-b border-transparent w-fit transition-all duration-500  hover:border-yellow-700"
                        href=""
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        className="block mb-2 text-md font-medium text-gray-300 font-TitilliumWeb border-b border-transparent w-fit transition-all duration-500  hover:border-yellow-700"
                        href=""
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="block mb-2 text-md font-medium text-gray-300 font-TitilliumWeb border-b border-transparent w-fit transition-all duration-500  hover:border-yellow-700"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full ml-auto lg:w-4/12">
                  <span className="block mb-2 text-md font-bold text-white uppercase font-TitilliumWeb">
                    Contact Us
                  </span>
                  <ul className="list-none">
                    <li>
                      <div className="flex justify-start gap-2 align-center">
                        <FaPhone className="text-white " />
                        <p className="block pb-2 text-md text-gray-300 font-TitilliumWeb ">
                          020-7129-8722
                        </p>
                      </div>
                      <div className="flex justify-start gap-1 align-center ">
                        <MdEmail className="text-xl text-white " />
                        <p className="block pb-2 text-md text-gray-300 font-TitilliumWeb ">
                          info@mayfairagent.co.uk
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex items-start w-full px-4 lg:w-4/12 sm:justify-start md:justify-center lg:bg-center ">
                  {/* <ScrollTop/> */}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-700" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-md text-gray-300 font-TitilliumWeb font-small">
                © 2024 MayfairAgent. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
