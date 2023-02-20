import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@/utils/hooks/custom';

export default function Navbar() {
  const navigation = ['Product', 'Features', 'Pricing', 'Company', 'Blog'];
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isWide, setIsWide] = useState(false);
  const mql = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    setIsWide(mql);
  }, [mql]);

  /*****
  TO DO: Dark mode switcher
  const rootRef = document.documentElement;
  const handleClick = () => {
    rootRef?.classList.contains('dark')
      ? rootRef?.classList.remove('dark')
      : rootRef?.classList.add('dark');
  };
  *****/

  const handleNavToggle = () => {
    setIsHidden((current) => !current);
  };

  const BrandLogo = (
    <div className="flex items-center text-teal-600">
      <Image
        className="h-8 w-12"
        src={'/images/magnumGlobalLogo1.svg'}
        alt={'magnum global logo'}
        width={64}
        height={24}
      />
      <Image
        className="h-14 md:w-72 w-40 pb-2"
        src={'/images/magnumglobal1.svg'}
        alt={'magnum global brand'}
        width={64}
        height={24}
      />
    </div>
  );

  return (
    <header
      aria-label="Site Header"
      className="dark:bg-charcoal bg-charcoal fixed top-0 left-0 w-full z-10"
    >
      <nav className="max-w-screen-xl mx-auto relative w-full flex flex-wrap items-center justify-between bg-charcoal text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="w-full flex flex-wrap items-center justify-start px-6">
          <div className="flex-1 flex md:items-center md:gap-1 dt:gap-12  bg-charcoal z-10">
            <button
              className="block dt:hidden text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline z-20"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleNavToggle}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                className="w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <div className="flex items-center text-teal-600">
                <Image
                  className="h-8 w-12"
                  src={'/images/magnumGlobalLogo1.svg'}
                  alt={'magnum global logo'}
                  width={64}
                  height={24}
                />
                <Image
                  className="h-14 md:w-72 w-40 pb-2 -ml-2 md:-ml-5"
                  src={'/images/magnumglobal1.svg'}
                  alt={'magnum global brand'}
                  width={64}
                  height={24}
                />
              </div>
            </a>
          </div>

          {!isWide && (
            <div className="flex flex-1 items-center justify-end dt:justify-end relative bg-charcoal z-10">
              {isLoggedIn && (
                <div className="dropdown relative">
                  <a
                    className="hidden md:flex text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow items-center"
                    href="#"
                    id="dropdownMenuButton1"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="bell"
                      className="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                      ></path>
                    </svg>
                    <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                      1
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <div
                className={`dropdown relative flex justify-center ${
                  isLoggedIn ? 'transparent px-0' : 'bg-rose-700 px-2'
                } rounded`}
              >
                <button
                  className="dropdown-toggle flex items-center justify-center hidden-arrow h-8 w-12"
                  id="dropdownMenuButton2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {isLoggedIn ? (
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                      className="rounded-full h-8 w-8"
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    'Sign in'
                  )}
                </button>
                {isLoggedIn && (
                  <ul
                    className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          )}

          <div
            className={`transition-transform duration-1000 flex-grow items-center absolute dt:relative bg-charcoal pt-5 dt:pt-0 pl-6 dt:pl-0 -ml-6 z-0 w-full md:w-1/2 dt:translate-y-0 ${
              isHidden ? '-translate-y-20' : 'translate-y-28'
            }`}
            id="navbarSupportedContent1"
          >
            <ul className="flex flex-1 flex-col dt:flex-row justify-center pl-0 list-style-none mr-auto">
              <li className="nav-item py-2 px-2 dt:px-4">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item py-2 px-2 dt:px-4">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item py-2 px-2 dt:px-4">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item py-2 px-2 dt:px-4">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {isWide && (
            <div className="flex flex-1 items-center justify-end dt:justify-end relative">
              {isLoggedIn && (
                <div className="dropdown relative">
                  <a
                    className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
                    href="#"
                    id="dropdownMenuButton1"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="bell"
                      className="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                      ></path>
                    </svg>
                    <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                      1
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <div
                className={`dropdown relative flex justify-center  ${
                  isLoggedIn ? 'transparent px-0' : 'bg-rose-700 px-2'
                } rounded-md`}
              >
                <button
                  className="dropdown-toggle flex items-center justify-center hidden-arrow h-8 w-12"
                  id="dropdownMenuButton2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {isLoggedIn ? (
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                      className="rounded-full h-8 w-8"
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    'Sign in'
                  )}
                </button>
                {isLoggedIn && (
                  <ul
                    className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
