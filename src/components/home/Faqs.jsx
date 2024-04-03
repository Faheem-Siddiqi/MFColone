import React from "react";
export default function Faqs() {
  return (
    <>
      <div className="w-full bg-stone-200  relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded">
          <div className="flex flex-col items-center justify-center lg:flex-row  md:flex-row lg:justify-center">
            <h2
              className="text-3xl lg:text-3xl xl:text-4xl font-bold text-center lg:text-center mr-4  lg:mb-0 font-Syncopate-Bold uppercase tracking-wider"
              style={{
                background: "linear-gradient(to right, #C89F37, #F0DC73)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FREQUENTLY
            </h2>
            <h2 className="text-3xl lg:text-3xl xl:text-4xl font-bold text-center lg:text-center whitespace-nowrap font-Syncopate-Bold uppercase tracking-wider">
              ASKED QUESTIONS
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 align-center items-center pb-10 ">
          <div className="p-6 mt-4  md:mt-6">
            <div className="container mx-auto">
              <div id="accordian-1">
                <div className="collapse collapse-plus mt-1 mb-4 outline-none">
                  <input type="checkbox" id="my-accordion-3" />
                  <div className="collapse-title text-xl text-neutral-700 font-md font-semibold">
                    <label htmlFor="my-accordion-3" className="cursor-pointer">
                      1. What types of office spaces do you offer in Mayfair?
                    </label>
                  </div>
                  <div className="collapse-content">
                    <p>We offer a variety of office solutions, including fully-furnished serviced offices, managed offices, coworking spaces, and virtual offices.</p>
                  </div>
                </div>
                <div className="flex items-center justify-center -mt-4">
                  <div className="w-2 h-2 bg-gray-400 opacity-25 rounded-full"></div>
                  <p className="w-full border border-gray-400 border-opacity-25" />
                  <div className="w-2 h-2 bg-gray-400  rounded-full"></div>
                </div>
              </div>
              <div id="accordian-2">
                <div className="collapse collapse-plus mt-1 mb-4 outline-none">
                  <input type="checkbox" id="my-accordion-3" />
                  <div className="collapse-title text-xl text-neutral-700 font-md font-semibold">
                    <label htmlFor="my-accordion-3" className="cursor-pointer">
                      2. Can I customize my office to suit my business needs?
                    </label>
                  </div>
                  <div className="collapse-content">
                    <p>add content</p>
                  </div>
                </div>
                <div className="flex items-center justify-center -mt-4">
                  <div className="w-2 h-2 bg-gray-400 opacity-25 rounded-full"></div>
                  <p className="w-full border border-gray-400 border-opacity-25" />
                  <div className="w-2 h-2 bg-gray-400  rounded-full"></div>
                </div>
              </div>
              <div id="accordian-3">
                <div className="collapse collapse-plus mt-1 mb-4 outline-none">
                  <input type="checkbox" id="my-accordion-3" />
                  <div className="collapse-title text-xl text-neutral-700 font-md font-semibold">
                    <label htmlFor="my-accordion-3" className="cursor-pointer">
                      3. Are meeting rooms available for use?
                    </label>
                  </div>
                  <div className="collapse-content">
                    <p>add content</p>
                  </div>
                </div>
                <div className="flex items-center justify-center -mt-4">
                  <div className="w-2 h-2 bg-gray-400 opacity-25 rounded-full"></div>
                  <p className="w-full border border-gray-400 border-opacity-25" />
                  <div className="w-2 h-2 bg-gray-400  rounded-full"></div>
                </div>
              </div>
              <div id="accordian-4">
                <div className="collapse collapse-plus mt-1 mb-4 outline-none">
                  <input type="checkbox" id="my-accordion-3" />
                  <div className="collapse-title text-xl text-neutral-700 font-md font-semibold">
                    <label htmlFor="my-accordion-3" className="cursor-pointer">
                      4. What amenities are included with the office space?
                    </label>
                  </div>
                  <div className="collapse-content">
                    <p>add content</p>
                  </div>
                </div>
                <div className="flex items-center justify-center -mt-4">
                  <div className="w-2 h-2 bg-gray-400 opacity-25 rounded-full"></div>
                  <p className="w-full border border-gray-400 border-opacity-25" />
                  <div className="w-2 h-2 bg-gray-400  rounded-full"></div>
                </div>
              </div>
              <div id="accordian-5">
                <div className="collapse collapse-plus mt-1 mb-4 outline-none">
                  <input type="checkbox" id="my-accordion-3" />
                  <div className="collapse-title text-xl text-neutral-700 font-md font-semibold">
                    <label htmlFor="my-accordion-3" className="cursor-pointer">
                      5. How can I schedule a tour of Mayfair office spaces?
                    </label>
                  </div>
                  <div className="collapse-content">
                    <p>add content</p>
                  </div>
                </div>
                <div className="flex items-center justify-center -mt-4">
                  <div className="w-2 h-2 bg-gray-400 opacity-25 rounded-full"></div>
                  <p className="w-full border border-gray-400 border-opacity-25" />
                  <div className="w-2 h-2 bg-gray-400  rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-6 px-6 w-10/12 mx-auto mt-2 md:mt-11 h-fit shadow-lg bg-white rounded-xl">
            <h2 className="mt-4 font-bold text-2xl my-5">Ask your question</h2>
            <form className="grid grid-cols-1 gap-4">
              <input
                className="p-4 w-full rounded-xl outline-none  border border-gray-600 border-opacity-25"
                type="text"
                placeholder="Name"
              />
              <input
                className="p-4 w-full rounded-xl outline-none  border border-gray-600 border-opacity-25"
                type="text"
                placeholder="Name"
              />
              <textarea
                className="p-4 w-full rounded-xl outline-none  border border-gray-600 border-opacity-25"
                rows={4}
                placeholder="Write something..."
              ></textarea>
              <button
                type="submit"
                className="ml-2 px-6 w-fit py-3 font-semibold text-black uppercase rounded-full outline-none cursor-pointer"
                style={{
                  background:
                    "linear-gradient(123.8deg, #C89F37 10.98%, #E0C45B 30.53%, #F0DC73 44.52%, #E0C45B 62.59%, #C89F37 82.14%)",
                }}
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
