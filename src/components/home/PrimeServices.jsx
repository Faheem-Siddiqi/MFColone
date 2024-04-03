import * as React from "react";
import PrimeServicesBg from "../../../public/assets/svgs/PrimeServices.svg";
import SvgPrimeServices from "../../../public/assets/svgs/SvgPrimeServices";
import styles from "./home.css";
import daisyui from "daisyui";
import Home from "./../../app/page";
export default function PrimeServices() {
  return (
    <>
      <div className="pt-5 pb-5 mx-auto px-11 ">
        <div className="md:mx-[4rem] lg:mx-[5rem] flex items-center justify-start lg:justify-start my-8 ">
          <h2
            className="mr-4 text-3xl font-bold tracking-wider text-center uppercase lg:text-3xl xl:text-4xl lg:text-center font-Syncopate-Bold"
            style={{
              background: "linear-gradient(to right, #C89F37, #F0DC73)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Prime
          </h2>
          <h2 className="text-2xl font-bold tracking-wider text-center uppercase lg:text-3xl xl:text-4xl lg:text-center whitespace-nowrap font-Syncopate-Bold ">
            Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[11rem]  lg:gap-[10rem] xl:gap-[10rem]  justify-items-center px-11 pb-[10rem]  ">
          {/* Repeat x times */}
          <div
            className="flex primeServieGroup group max-w-[320px]    relative flex-col  text-black 
          "
          >
            <svg
              className="absolute  rounded-bl-[1.2rem] rounded-r-[1.2rem] rounded-tl-[5rem] PrimeServicesSvg  "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 320"
            >
              <path
                className="PrimeServicesPath"
                fill="#fff"
                d="M299.5 300c0 10.77-8.73 19.5-19.5 19.5H20C9.23 319.5.5 310.77.5 300V77.88c0-8.158 6.613-14.771 14.771-14.771h11.632a27.43 27.43 0 0 0 25.544-17.433l2.353-6.013a44.2 44.2 0 0 0 3.04-16.108V16.36C57.84 7.601 64.943.5 73.703.5H280c10.77 0 19.5 8.73 19.5 19.5z"
              />
            </svg>
            <div className="  flex flex-col relative ">
              <div
                className=" border-transparent group-hover:border group-hover:border-yellow-600 justify-center items-center self-start whitespace-nowrap rounded-full bg-[linear-gradient(133deg,#C89F37_0%,#F0DC73_40.69%,#C89F37_81.81%)] h-[50px] leading-[143%] w-[50px] relative transition-border group-hover:duration-500 duration -left-2 
"
              >
                <span className=" absolute top-[25%] font-bold left-[45%]">
                  1
                </span>
              </div>
              <div>
                <div className="flex-auto text-lg  primeServieGroup -mt-9 font-bold text-center pl-10  ">
                  Faheem Workspaces{" "}
                </div>
                <p className="font-bold  text-center primeServieGroup">
                  Notification
                </p>
              </div>
              <div className=" Cardtext  mt-3 text-center px-2 w-[300px]    leading-2">
                Indulge in productivity surrounded by our fully-furnished
                workspaces. Every detail, from ergonomic furniture to
                cutting-edge technology, is crafted to elevate your working
                experience.
              </div>
            </div>
          </div>

          <div className="flex primeServieGroup group max-w-[320px]  relative flex-col  text-black ">
            <svg
              className="absolute  rounded-bl-[1.2rem] rounded-r-[1.2rem] rounded-tl-[5rem] PrimeServicesSvg  "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 320"
            >
              <path
                className="PrimeServicesPath"
                fill="#fff"
                d="M299.5 300c0 10.77-8.73 19.5-19.5 19.5H20C9.23 319.5.5 310.77.5 300V77.88c0-8.158 6.613-14.771 14.771-14.771h11.632a27.43 27.43 0 0 0 25.544-17.433l2.353-6.013a44.2 44.2 0 0 0 3.04-16.108V16.36C57.84 7.601 64.943.5 73.703.5H280c10.77 0 19.5 8.73 19.5 19.5z"
              />
            </svg>
            <div className="  flex flex-col relative ">
              <div
                className=" border-transparent group-hover:border group-hover:border-yellow-600 justify-center items-center self-start whitespace-nowrap rounded-full bg-[linear-gradient(133deg,#C89F37_0%,#F0DC73_40.69%,#C89F37_81.81%)] h-[50px] leading-[143%] w-[50px] relative transition-border group-hover:duration-500 duration -left-2 
"
              >
                <span className=" absolute top-[25%] font-bold left-[45%]">
                  1
                </span>
              </div>
              <div>
                <div className="flex-auto text-lg  primeServieGroup -mt-9 font-bold text-center pl-10  ">
                  Faheem Workspaces{" "}
                </div>
                <p className="font-bold  text-center primeServieGroup">
                  Notification
                </p>
              </div>
              <div className=" Cardtext  mt-3 text-center px-2 w-[300px]    leading-2">
                Indulge in productivity surrounded by our fully-furnished
                workspaces. Every detail, from ergonomic furniture to
                cutting-edge technology, is crafted to elevate your working
                experience.
              </div>
            </div>
          </div>

          <div
            className="flex primeServieGroup group max-w-[320px] relative flex-col  text-black">
            <svg
              className="absolute  rounded-bl-[1.2rem] rounded-r-[1.2rem] rounded-tl-[5rem] PrimeServicesSvg  "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 320"
            >
              <path
                className="PrimeServicesPath"
                fill="#fff"
                d="M299.5 300c0 10.77-8.73 19.5-19.5 19.5H20C9.23 319.5.5 310.77.5 300V77.88c0-8.158 6.613-14.771 14.771-14.771h11.632a27.43 27.43 0 0 0 25.544-17.433l2.353-6.013a44.2 44.2 0 0 0 3.04-16.108V16.36C57.84 7.601 64.943.5 73.703.5H280c10.77 0 19.5 8.73 19.5 19.5z"
              />
            </svg>
            <div className="  flex flex-col relative ">
              <div
                className=" border-transparent group-hover:border group-hover:border-yellow-600 justify-center items-center self-start whitespace-nowrap rounded-full bg-[linear-gradient(133deg,#C89F37_0%,#F0DC73_40.69%,#C89F37_81.81%)] h-[50px] leading-[143%] w-[50px] relative transition-border group-hover:duration-500 duration -left-2 
"
              >
                <span className=" absolute top-[25%] font-bold left-[45%]">
                  1
                </span>
              </div>
              <div>
                <div className="flex-auto text-lg  primeServieGroup -mt-9 font-bold text-center pl-10  ">
                  Faheem Workspaces{" "}
                </div>
                <p className="font-bold  text-center primeServieGroup">
                  Notification
                </p>
              </div>
              <div className=" Cardtext  mt-3 text-center px-2 w-[300px]    leading-2">
                Indulge in productivity surrounded by our fully-furnished
                workspaces. Every detail, from ergonomic furniture to
                cutting-edge technology, is crafted to elevate your working
                experience.
              </div>
            </div>
          </div>

          <div
            className="flex primeServieGroup group max-w-[320px]    relative flex-col  text-black 
          "
          >
            <svg
              className="absolute  rounded-bl-[1.2rem] rounded-r-[1.2rem] rounded-tl-[5rem] PrimeServicesSvg  "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 320"
            >
              <path
                className="PrimeServicesPath"
                fill="#fff"
             
                d="M299.5 300c0 10.77-8.73 19.5-19.5 19.5H20C9.23 319.5.5 310.77.5 300V77.88c0-8.158 6.613-14.771 14.771-14.771h11.632a27.43 27.43 0 0 0 25.544-17.433l2.353-6.013a44.2 44.2 0 0 0 3.04-16.108V16.36C57.84 7.601 64.943.5 73.703.5H280c10.77 0 19.5 8.73 19.5 19.5z"
              />
            </svg>
            <div className="  flex flex-col relative ">
              <div
                className=" border-transparent group-hover:border group-hover:border-yellow-600 justify-center items-center self-start whitespace-nowrap rounded-full bg-[linear-gradient(133deg,#C89F37_0%,#F0DC73_40.69%,#C89F37_81.81%)] h-[50px] leading-[143%] w-[50px] relative transition-border group-hover:duration-500 duration -left-2 
"
              >
                <span className=" absolute top-[25%] font-bold left-[45%]">
                  1
                </span>
  
              </div>
              <div>
                <div className="flex-auto text-lg  primeServieGroup -mt-9 font-bold text-center pl-10  ">
                  Faheem Workspaces{" "}
                </div>
                <p className="font-bold  text-center primeServieGroup">
                  Notification
                </p>
              </div>
              <div className=" Cardtext  mt-3 text-center px-2 w-[300px]    leading-2">
                Indulge in productivity surrounded by our fully-furnished
                workspaces. Every detail, from ergonomic furniture to
                cutting-edge technology, is crafted to elevate your working
                experience.
              </div>
            </div>
          </div>

          <div
            className="flex primeServieGroup group max-w-[320px]    relative flex-col  text-black 
          "
          >
            <svg
              className="absolute  rounded-bl-[1.2rem] rounded-r-[1.2rem] rounded-tl-[5rem] PrimeServicesSvg  "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 320"
            >
              <path
                className="PrimeServicesPath"
                fill="#fff"
             
                d="M299.5 300c0 10.77-8.73 19.5-19.5 19.5H20C9.23 319.5.5 310.77.5 300V77.88c0-8.158 6.613-14.771 14.771-14.771h11.632a27.43 27.43 0 0 0 25.544-17.433l2.353-6.013a44.2 44.2 0 0 0 3.04-16.108V16.36C57.84 7.601 64.943.5 73.703.5H280c10.77 0 19.5 8.73 19.5 19.5z"
              />
            </svg>
            <div className="  flex flex-col relative ">
              <div
                className=" border-transparent group-hover:border group-hover:border-yellow-600 justify-center items-center self-start whitespace-nowrap rounded-full bg-[linear-gradient(133deg,#C89F37_0%,#F0DC73_40.69%,#C89F37_81.81%)] h-[50px] leading-[143%] w-[50px] relative transition-border group-hover:duration-500 duration -left-2 
"
              >
                <span className=" absolute top-[25%] font-bold left-[45%]">
                  1
                </span>
  
              </div>
              <div>
                <div className="flex-auto text-lg  primeServieGroup -mt-9 font-bold text-center pl-10  ">
                  Faheem Workspaces{" "}
                </div>
                <p className="font-bold  text-center primeServieGroup">
                  Notification
                </p>
              </div>
              <div className=" Cardtext  mt-3 text-center px-2 w-[300px]    leading-2">
                Indulge in productivity surrounded by our fully-furnished
                workspaces. Every detail, from ergonomic furniture to
                cutting-edge technology, is crafted to elevate your working
                experience.
              </div>
            </div>
          </div>

          <div
            className="flex primeServieGroup group max-w-[320px]    relative flex-col  text-black 
          "
          >
            <svg
              className="absolute  rounded-bl-[1.2rem] rounded-r-[1.2rem] rounded-tl-[5rem] PrimeServicesSvg  "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 320"
            >
              <path
                className="PrimeServicesPath"
                fill="#fff"
             
                d="M299.5 300c0 10.77-8.73 19.5-19.5 19.5H20C9.23 319.5.5 310.77.5 300V77.88c0-8.158 6.613-14.771 14.771-14.771h11.632a27.43 27.43 0 0 0 25.544-17.433l2.353-6.013a44.2 44.2 0 0 0 3.04-16.108V16.36C57.84 7.601 64.943.5 73.703.5H280c10.77 0 19.5 8.73 19.5 19.5z"
              />
            </svg>
            <div className="  flex flex-col relative ">
              <div
                className=" border-transparent group-hover:border group-hover:border-yellow-600 justify-center items-center self-start whitespace-nowrap rounded-full bg-[linear-gradient(133deg,#C89F37_0%,#F0DC73_40.69%,#C89F37_81.81%)] h-[50px] leading-[143%] w-[50px] relative transition-border group-hover:duration-500 duration -left-2 
"
              >
                <span className=" absolute top-[25%] font-bold left-[45%]">
                  1
                </span>
  
              </div>
              <div>
                <div className="flex-auto text-lg  primeServieGroup -mt-9 font-bold text-center pl-10  ">
                  Faheem Workspaces{" "}
                </div>
                <p className="font-bold  text-center primeServieGroup">
                  Notification
                </p>
              </div>
              <div className=" Cardtext  mt-3 text-center px-2 w-[300px]    leading-2">
                Indulge in productivity surrounded by our fully-furnished
                workspaces. Every detail, from ergonomic furniture to
                cutting-edge technology, is crafted to elevate your working
                experience.
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}
