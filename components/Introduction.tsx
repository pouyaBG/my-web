"use client"
import Image from "next/image";
import React from "react";

const Introduction = () => {
  const handlTopScrool = () => {
    window.scrollTo({ top: 760, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="introduction z-0" data-aos="zoom-out" data-aos-duration="1500">
        <div data-aos="fade-up" data-aos-duration="3000">
          <svg className="absolute  right-10 opacity-10   md:right-[-12%] top-[-1vh] md:top-[6vh]   w-[100px] sm:w-[538px]" width="161" height="168" viewBox="0 0 261 168" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M194.962 4.25C194.962 4.41666 194.795 4.83333 194.462 5.5C191.462 8.66666 187.212 13.3333 181.712 19.5C176.378 25.5 170.295 32.5833 163.462 40.75C156.795 48.9167 149.795 57.5833 142.462 66.75C135.295 75.75 128.295 84.9167 121.462 94.25C114.795 103.417 108.712 112.167 103.212 120.5C97.7115 128.667 93.2949 136 89.9615 142.5C86.7949 148.833 85.2115 153.75 85.2115 157.25C85.2115 158.417 85.5449 159.75 86.2115 161.25C87.0449 162.75 87.4615 164.25 87.4615 165.75C87.4615 167.083 87.0449 167.75 86.2115 167.75C84.0449 167.75 82.2115 166.417 80.7115 163.75C79.3782 161.25 78.7115 159.083 78.7115 157.25C78.7115 153.417 80.2115 148.167 83.2115 141.5C86.2115 134.667 90.2949 126.917 95.4615 118.25C100.628 109.417 106.378 100.25 112.712 90.75C119.212 81.25 125.878 71.8333 132.712 62.5C139.712 53 146.462 44.0833 152.962 35.75C159.462 27.4167 165.378 20.25 170.712 14.25C176.045 8.08332 180.295 3.58332 183.462 0.749997C183.795 0.416658 184.212 0.249988 184.712 0.249988C185.378 0.0833239 185.962 -8.34465e-06 186.462 -8.34465e-06C187.462 -8.34465e-06 189.128 0.416658 191.462 1.24999C193.795 1.91666 194.962 2.91666 194.962 4.25ZM54.5 22.9451C56.5 21.9451 59.5 22.2785 63.5 23.9451C67.5 25.6118 69.5 27.6118 69.5 29.9451C69.5 30.9451 68.1667 32.7785 65.5 35.4451C62.8333 38.1118 61.1667 39.9451 60.5 40.9451C56.8333 45.9451 50.8333 53.1118 42.5 62.4451C34.5 71.7785 26.6667 79.7785 19 86.4451C24.6667 96.4451 30.3333 105.278 36 112.945C41.6667 120.278 48.3333 127.778 56 135.445C57 136.445 59.3333 138.112 63 140.445C66.6667 142.445 68.5 144.778 68.5 147.445C68.5 149.112 66.5 150.945 62.5 152.945C62.1667 153.278 60.6667 153.445 58 153.445H53.5C52.1667 153.445 50.8333 153.112 49.5 152.445C46.8333 150.778 42.8333 147.278 37.5 141.945C32.1667 136.278 26.6667 129.778 21 122.445C15.3333 115.112 10.3333 108.278 6 101.945C2 95.2785 0 90.1118 0 86.4451C0 83.7785 0.833334 81.7785 2.5 80.4451C11.1667 71.7785 18.5 63.9451 24.5 56.9451C30.8333 49.6118 38.3333 40.9451 47 30.9451C47.6667 30.6118 48.8333 29.2785 50.5 26.9451C52.5 24.2785 53.8333 22.9451 54.5 22.9451ZM196.688 151.945C200.688 153.612 203.688 153.945 205.688 152.945C206.354 152.945 207.688 151.778 209.688 149.445C211.688 146.778 212.854 145.278 213.188 144.945C221.854 134.945 229.188 126.278 235.188 118.945C241.521 111.612 249.021 103.778 257.688 95.4451C259.354 94.1118 260.188 92.1118 260.188 89.4451C260.188 85.7785 258.021 80.7785 253.688 74.4451C249.688 67.7785 244.854 60.7785 239.188 53.4451C233.521 46.1118 228.021 39.7785 222.688 34.4451C217.354 28.7785 213.354 25.1118 210.688 23.4451C209.354 22.7785 208.021 22.4451 206.688 22.4451H202.188C199.521 22.4451 198.021 22.6118 197.688 22.9451C193.688 24.9451 191.688 26.7785 191.688 28.4451C191.688 30.7785 193.521 33.1118 197.188 35.4451C200.854 37.7785 203.188 39.4451 204.188 40.4451C211.854 47.7785 218.521 55.2785 224.188 62.9451C229.854 70.6118 235.521 79.4451 241.188 89.4451C233.854 96.1118 226.021 104.112 217.688 113.445C209.354 122.778 203.354 129.945 199.688 134.945C199.021 135.945 197.354 137.778 194.688 140.445C192.021 143.112 190.688 144.945 190.688 145.945C190.688 148.278 192.688 150.278 196.688 151.945Z" fill="#0A88CE" fillOpacity="0.8" />
          </svg>
        </div>
        <div className="flex-1 pt-20 xl:pt-48 padding-x">
          <h1 className="introduction__title">
            سلام من <strong className="text__primary"> پویا براری گلیرد</strong>
            هستم.
          </h1>
          <p className="introduction__subtitle">
            یک توسعه دهنده وب سایت که در حال حاضر تمرکزم روی طراحی رابط کاربری یا
            همون <strong className="text__primary">Front-End</strong> است.
          </p>
          <h2 className=" z-10 md:text-[20px] text-[14px] hidden md:flex -mt-[4%] md:mt-5 md:mb-3">میتونید در ادامه  رزومه  و نمونه کار های من رو مشاهده کنید &#128515;</h2>
          <div onClick={handlTopScrool} className="w-full cursor-pointer ">
            <button onClick={handlTopScrool} className="cursor-pointer xl:text-[19px] xl:px-10 text-[16px] xl:py-2 py-[8px] px-5 bg-[#0A88CE] text-white rounded-[19px] mt-5 hover:shadow-xl bordr-1 hover:scale-105 border-[#0A88CE] transition-all ">مشاهده</button>
          </div>
        </div>
        <div className="introduction__image-container">
          <div className="introduction__image">
            <Image
              src={"/my1.png"}
              alt="introduction"
              fill
              className="object-contain"
            />
          </div>

          <div className="introduction__image-overlay" />
        </div>
      </div>
      <div className="w-screen h-8` bg-[#0A88CE] mt-10">
        <div className="w-screen h-8 bg-black text-white flex justify-between px-10 -rotate-2 items-center">
        </div>
      </div>
    </>

  );
};

export default Introduction;
