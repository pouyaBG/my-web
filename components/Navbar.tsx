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
    <header className="w-full z-50" data-aos="fade-down">
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
            className={`z-50 ${iSopneModal ? "" : "hidden"
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
                  onClick={() => setIsOpenModal(false)}
                  href="/RadarSkill"
                  className={`${currentRoute === "/RadarSkill"
                    ? "text-blue-600 block py-2 pl-3 pr-4 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    : "block py-2 pl-3 pr-4 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }block py-2 pl-3 pr-4 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
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
                  className={` z-50 ${iSopne ? "" : "hidden"
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
                        href={"https://t.me/pouya90bg"}
                        target="_blank"
                        className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Telegram
                        <div>
                          <svg width="30" height="30" viewBox="0 0 460 460" fill="#41B4E6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M230 0C103.093 0 0 103.093 0 230C0 356.907 103.093 460 230 460C356.907 460 460 356.907 460 230C460 103.093 356.907 0 230 0ZM230 20C346.098 20 440 113.902 440 230C440 346.098 346.098 440 230 440C113.902 440 20 346.098 20 230C20 113.902 113.902 20 230 20ZM320.879 120.352C314.039 120.352 306.353 121.936 297.363 125.176C283.403 130.206 119.207 199.922 100.527 207.852C89.8473 212.392 69.9609 220.837 69.9609 240.977C69.9609 254.327 77.7836 263.875 93.1836 269.375C101.464 272.325 121.129 278.286 132.539 281.426C137.379 282.756 142.523 283.438 147.812 283.438C158.162 283.438 168.578 280.859 176.738 276.309C176.668 277.989 176.714 279.687 176.914 281.387C178.144 291.887 184.619 301.762 194.219 307.812C200.499 311.772 251.793 346.142 259.453 351.602C270.213 359.292 282.108 363.359 293.828 363.359C316.228 363.359 323.743 340.231 327.363 329.121C332.613 312.991 352.272 181.821 354.492 158.691C356.002 142.841 349.396 129.79 336.816 123.77C332.106 121.5 326.729 120.352 320.879 120.352ZM320.879 140.352C323.629 140.352 326.084 140.806 328.164 141.816C332.894 144.086 335.3 149.147 334.57 156.797C332.15 182.027 312.539 310.09 308.359 322.93C304.779 333.91 301.008 343.359 293.828 343.359C286.648 343.359 278.804 340.842 271.074 335.312C263.344 329.793 212.013 295.369 204.883 290.879C198.633 286.939 192.018 277.117 201.328 267.617C208.998 259.797 267.178 203.329 272.148 198.359C275.848 194.649 274.118 190.176 270.488 190.176C269.238 190.176 267.741 190.703 266.191 191.973C260.111 196.943 175.348 253.663 168.008 258.223C163.148 261.243 155.623 263.418 147.812 263.418C144.482 263.418 141.111 263.019 137.871 262.129C126.591 259.019 107.502 253.227 99.9219 250.527C92.6319 247.927 89.9805 245.437 89.9805 240.977C89.9805 234.637 98.9294 230.26 108.359 226.25C118.319 222.02 290.661 148.834 304.141 143.984C310.381 141.724 316.089 140.352 320.879 140.352Z" fill="#41B4E6" />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        href={"https://github.com/pouyaBG"}
                        target="_blank"
                        className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Git Hub
                        <div>
                          <svg width="30" height="30" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M250 20C123.113 20 20 123.113 20 250C20 376.887 123.113 480 250 480C376.887 480 480 376.887 480 250C480 123.113 376.887 20 250 20ZM250 40C366.073 40 460 133.927 460 250C460 250.714 459.948 251.417 459.941 252.129C453.545 251.539 446.155 250.978 436.758 250.645C423.471 250.173 406.723 250.31 387.734 251.25C388.439 246.347 388.932 241.374 388.945 236.27C389.914 217.543 383.625 200.025 373.398 184.551C375.869 176.014 378.767 165.152 379.492 152.832C380.318 138.789 379.106 123.218 367.832 112.695L364.941 110H360.996C334.165 110 315.8 121.232 304.57 130.137C288.355 123.86 270.122 120 250 120C229.764 120 211.355 123.914 194.473 130.176C183.249 121.267 164.868 110 138.008 110H134.082L131.191 112.676C120.21 122.873 119.198 138.018 119.883 151.992C120.487 164.315 123.217 175.521 125.645 184.473C115.245 200.249 109.004 218.22 109.004 235.996C109.004 241.112 109.48 246.101 110.176 251.016C92.1182 250.178 76.021 250.017 63.2422 250.469C53.8451 250.801 46.4544 251.357 40.0586 251.953C40.0526 251.3 40 250.655 40 250C40 133.927 133.927 40 250 40ZM143.965 131.309C164.141 133.22 179.32 142.23 186.348 148.477L191.035 152.617L196.816 150.254C212.631 143.742 230.27 140 250 140C269.73 140 287.374 143.761 301.992 150.156L307.852 152.734L312.637 148.477C319.667 142.228 334.872 133.216 355.059 131.309C357.743 135.758 360.075 142.087 359.512 151.66C358.838 163.117 355.773 175.597 353.457 183.008L351.953 187.832L354.941 191.914C364.836 205.407 369.881 220.009 369.023 235.449L369.004 235.723V235.996C369.004 260.951 360.018 280.923 340.879 295.723C321.74 310.522 291.527 320 249.004 320C206.481 320 176.248 310.522 157.109 295.723C137.97 280.923 129.004 260.951 129.004 235.996C129.004 221.349 134.293 205.236 144.062 191.914L146.992 187.93L145.586 183.184C143.269 175.305 140.428 162.541 139.863 151.016C139.393 141.429 141.662 135.37 143.965 131.309ZM88.8477 260.215C95.9146 260.305 104.015 260.687 112.129 261.094C112.904 264.212 113.788 267.279 114.863 270.273C81.7897 270.971 57.0473 274.297 41.7969 277.148C41.1521 272.145 40.6385 267.1 40.3516 261.992C51.6221 260.923 67.51 259.942 88.8477 260.215ZM411.152 260.371C432.475 260.1 448.357 261.082 459.629 262.148C459.342 267.183 458.837 272.157 458.203 277.09C442.408 274.192 416.997 270.867 383.066 270.332C384.119 267.397 384.996 264.382 385.762 261.328C394.713 260.848 403.446 260.469 411.152 260.371ZM119.121 280.195C125.088 292.153 133.615 302.83 144.883 311.543C160.288 323.455 180.316 331.778 204.766 336.23C201.567 339.517 198.658 343.126 196.074 346.934L195.469 346.406C195.524 346.343 190.498 348.859 182.988 349.531C175.479 350.204 166.216 350 158.008 350C145.758 350 140.362 344.212 131.738 333.672C126.963 327.236 121.141 322.023 115.488 318.066C109.7 314.015 104.763 311.155 98.6523 310.137L97.832 310H96.9922C92.3255 310 87.8098 310.338 83.5938 315.156C81.4857 317.565 80.0328 322.026 80.9766 325.801C81.9204 329.576 84.3086 331.896 86.4453 333.32C100.113 342.432 102.528 360.465 111.094 376.504C119.093 392.443 136.357 400 154.004 400H180V448.027C109.678 423.205 56.6468 362.046 43.3203 287.031C58.6293 284.148 84.2654 280.681 119.121 280.195ZM378.828 280.273C414.455 280.578 440.81 284.041 456.699 286.973C443.39 362.015 390.341 423.199 320 448.027V395.996C320 380.15 314.796 362.677 305.742 348.105C302.993 343.681 299.759 339.497 296.152 335.742C319.305 331.168 338.324 322.988 353.125 311.543C364.368 302.849 372.876 292.204 378.828 280.273ZM236.992 340.996H265C273.128 340.996 281.804 347.474 288.75 358.652C295.696 369.831 300 384.842 300 395.996V453.984C283.974 457.892 267.238 460 250 460C232.762 460 216.026 457.892 200 453.984V395.996C200 385.089 204.678 370.113 212.09 358.887C219.501 347.66 228.864 340.996 236.992 340.996ZM123.086 352.812C131.744 361.793 142.225 370 158.008 370C165.799 370 175.525 370.281 184.766 369.453C184.798 369.45 184.83 369.437 184.863 369.434C183.646 372.934 182.737 376.455 181.973 380H154.004C141.671 380 132.958 375.544 128.945 367.52L128.867 367.383L128.809 367.266C127.165 364.212 125.006 358.106 123.086 352.812Z" fill="black" />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        href={"https://www.linkedin.com/in/pouya-barari-gelyard-03856822b/"}
                        target="_blank"
                        className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Linkedin
                        <div>
                          <svg width="30" height="30" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 0C22.5048 0 0 22.5048 0 50V370C0 397.495 22.5048 420 50 420H370C397.495 420 420 397.495 420 370V50C420 22.5048 397.495 0 370 0H50ZM50 20H370C386.685 20 400 33.3152 400 50V370C400 386.685 386.685 400 370 400H50C33.3152 400 20 386.685 20 370V50C20 33.3152 33.3152 20 50 20ZM100 70.1172C89.0478 70.1172 79.1922 73.3908 71.8945 79.5312C64.5969 85.6717 60.1172 94.8451 60.1172 104.668C60.1172 123.34 76.3129 137.896 96.9141 139.336L96.9531 139.355C97.9348 139.69 98.963 139.868 100 139.883C122.73 139.883 139.883 123.961 139.883 104.668C139.881 104.492 139.874 104.316 139.863 104.141C138.846 85.1383 121.904 70.1172 100 70.1172ZM100 89.8828C113.922 89.8828 119.42 96.1004 120.02 104.922C119.898 113.484 114.601 120.117 100 120.117C86.1459 120.117 79.8828 113.022 79.8828 104.668C79.8828 100.491 81.407 97.343 84.6094 94.6484C87.8117 91.9539 92.9522 89.8828 100 89.8828ZM70 150C67.3479 150 64.8045 151.054 62.9292 152.929C61.0539 154.805 60.0003 157.348 60 160V350C60.0003 352.652 61.0539 355.195 62.9292 357.071C64.8045 358.946 67.3479 360 70 360H130C132.652 360 135.195 358.946 137.071 357.071C138.946 355.195 140 352.652 140 350V291.348V160C140 157.348 138.946 154.805 137.071 152.929C135.195 151.054 132.652 150 130 150H70ZM160 150C157.348 150 154.805 151.054 152.929 152.929C151.054 154.805 150 157.348 150 160V350C150 352.652 151.054 355.195 152.929 357.071C154.805 358.946 157.348 360 160 360H220C222.652 360 225.195 358.946 227.071 357.071C228.946 355.195 230 352.652 230 350V250C230 241.703 232.264 233.45 236.25 228.047C240.236 222.643 245.265 219.401 254.824 219.57C264.682 219.74 269.9 223.117 273.848 228.418C277.795 233.719 280 241.667 280 250V350C280 352.652 281.054 355.195 282.929 357.071C284.805 358.946 287.348 360 290 360H350C352.652 360 355.195 358.946 357.071 357.071C358.946 355.195 360 352.652 360 350V242.617C360 213.002 351.228 189.543 336.191 173.672C321.155 157.8 300.242 150 278.125 150C257.105 150 241.109 157.049 230 164.238V160C230 157.348 228.946 154.805 227.071 152.929C225.195 151.054 222.652 150 220 150H160ZM80 170H120V291.348V340H80V170ZM170 170H210V185.605C210.001 187.702 210.66 189.746 211.886 191.447C213.111 193.149 214.841 194.422 216.829 195.087C218.818 195.752 220.965 195.775 222.968 195.153C224.97 194.531 226.726 193.296 227.988 191.621C227.988 191.621 243.692 170 278.125 170C295.658 170 310.694 175.826 321.68 187.422C332.666 199.018 340 216.883 340 242.617V340H300V250C300 238.333 297.205 226.271 289.902 216.465C282.6 206.659 270.318 199.831 255.176 199.57C239.955 199.3 227.475 206.27 220.156 216.191C212.837 226.113 210 238.297 210 250V340H170V170Z" fill="#0288D1" />
                          </svg>
                        </div>
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
            <img
              src={"/img/logo.png"}
              alt="logo"
              className="object-contain mr-3 w-[50px] h-[40px]"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
