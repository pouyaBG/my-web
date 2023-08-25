"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [iSopne, setIsOpen] = useState(false);
  const [iSopneModal, setIsOpenModal] = useState(false);
  const currentRoute = usePathname();
  console.log(currentRoute);

  return (
    <header className="w-full" data-aos="fade-down">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-[1440px] flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            onClick={() => setIsOpenModal(!iSopneModal)}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className={`${iSopneModal ? "-order-1" : ""
              } inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={` ${iSopneModal ? "" : "hidden"
              } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  onClick={() => setIsOpenModal(false)}
                  href="/"
                  className={`${currentRoute === "/"
                      ? "text-blue-600 py-2 ml-6 pl-3 pr-4 font-bold  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      : " py-2 ml-6 pl-3 pr-4 font-bold  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    } py-2 ml-6 pl-3 pr-4 font-bold  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  صفحه اصلی
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => setIsOpenModal(false)}
                  href="/aboutme"
                  className={`${currentRoute === "/aboutme"
                      ? "text-blue-600 block py-2 pl-3 pr-4 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      : "block py-2 pl-3 pr-4 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }block py-2 pl-3 pr-4 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  درباره من
                </Link>
              </li>
              <li>
                <Link
                  href="/RadarSkill"
                  className="block py-2 pl-3 pr-4 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  مهارت ها
                </Link>
              </li>

              <li>
                <button
                  onClick={() => {
                    setIsOpen(!iSopne);
                  }}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center font-bold  justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  ارتباط با من
                  <svg
                    className="w-2.5 mt-1.5 h-2.5 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className={`z-10 ${iSopne ? "" : "hidden"
                    } absolute shadow-xl border-blue-700 font-normal bg-white divide-y divide-gray-100 rounded-lg  w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Telegram
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Whatsup
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <Link
            href={"/"}
            className={`flex items-center ${iSopneModal ? "-order-1" : ""}`}
          >
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Pouya B.G
            </span>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={39}
              height={19}
              className="object-contain mr-3"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
