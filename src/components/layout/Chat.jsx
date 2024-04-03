import React from "react";
import Image from "next/image";
export default function Chat() {
  return (
    <>
      <div
        className="fixed right-8 bottom-3 "
        type="button"
        style={{ zIndex: "100" }}
      >
        <div className="flex  gap-2  items-center "   style={{ zIndex: "100" }}>
          <div
            className="bg-white py-3 px-6 rounded-xl font-TitilliumWeb "
            style={{ boxShadow: "-4px 3px 28px 3px rgba(0,0,0,0.22)" }}
          >
            Can we help?
          </div>
          <div className="bg-black border-white rounded-full p-4  hover:bg-black btn w-[3.5rem] h-[3.5rem]">
            <Image
              src="/assets/images/chat.png"
              className="h-fit  "
              width={600}
              height={100}
              alt="chat bubble"
            />
          </div>
        </div>
      </div>
    </>
  );
}
