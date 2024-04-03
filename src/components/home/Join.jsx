import React from "react";
export default function Join() {
  return (
    <>
      <div className="container flex justify-between items-center flex-col lg:flex-row mx-auto py-8">
        <div className="text-2xl  lg:px-0 px-5 text-center lg:text-left w-full lg:w-[40%] mt-5">
          Join Mayfair email list to stay up to date about luxury workspace in
          your area.
        </div>
        <div className="w-11/12 md:w-[60%]   mt-5 flex justify-end">
          <form className="flex justify-between px-2 bg-white shadow-xl border-opacity-50 border border-yellow-600 w-full lg:w-9/12 rounded-full py-2 items-center">
            <input
              type="text"
              placeholder="Enter your email"
              required
              name=""
              id=""
              className="w-full h-10 pl-4 bg-transparent rounded-full outline-none  shadow-none placeholder-black"
            />
            <button
              type="submit"
              className="w-30 px-4 py-2 font-semibold text-black uppercase rounded-full outline-none cursor-pointer"
              style={{
                background:
                  "linear-gradient(123.8deg, #C89F37 10.98%, #E0C45B 30.53%, #F0DC73 44.52%, #E0C45B 62.59%, #C89F37 82.14%)",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
