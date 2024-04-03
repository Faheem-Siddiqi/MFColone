import React from 'react'
import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from "react-icons/bi";
export default function CommonHeroSection({ title }) {
  return (
    <> 
<div className="relative w-full h-96 bg-cover bg-center font-TitilliumWeb" style={{ backgroundImage: "url('/assets/images/HeroSection.png')"  }}>
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="text-black text-center w-11/12">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold opacity-1">
           <BiSolidQuoteAltLeft className='inline-block mb-5 mr-2 text-darkGolden'/>{title} <BiSolidQuoteAltRight className='inline-block mb-5 ml-2 text-darkGolden'/>
 {/* <Image className="rounded-t-lg w-3 h-3 " src={"/assets/images/comaVector.png"} alt="profile picture" width={600} height={10} /> */}
        </h1> 
    </div>
  </div>
</div>
  </>
  )
}
