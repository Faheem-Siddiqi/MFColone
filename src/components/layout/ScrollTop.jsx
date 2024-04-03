"use client"
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100); // 
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-[4.9rem] right-8
        border-none shadow-xl outline-none rounded-full
        w-[3.5rem] h-[3.5rem] hover:bg-transparent
        transition: transform 0.3s ease-in-out
        ${isVisible ? '' : 'opacity-0 invisible'} 
      `}
      type="button"
      style={{
        background: "linear-gradient(to bottom, #C89F37, #F0DC73)",
        zIndex: "10000",
      }}
    >
      <MdOutlineKeyboardArrowUp className="text-3xl mx-auto shadow-sm text-lightGrey" />
    </button>
  );
}