"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const handlTopScrool = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <footer className="w-full flex flex-col text-black-100 mt-5 bg-white">
      <div className="flex max-md:flex-col-reverse flex-wrap justify-between gap-4 items-center sm:px-16 px-6 py-5">
        <button
          onClick={handlTopScrool}
          className="flex justify-between items-center border rounded-md p-2"
        >
          <>بازگشت به بالا</>
          <Image
            src={"/arrow-down.svg"}
            width={15}
            height={10}
            priority
            alt="arrow"
            className="object-contain rotate-180 mr-1"
          />
        </button>
        <p className="text-base whitespace-nowrap text-gray-700">
          تمام حقوق اين وب‌سايت متعلق به پویا براری گلیرد است. &copy;
        </p>

        <Link href={"/"} className="flex items-center">
          <span className="self-center text-[15px] font-semibold whitespace-nowrap dark:text-white">
            Pouya B.G
          </span>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={26}
            height={19}
            className="object-contain mr-3"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
