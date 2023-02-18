'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const navigation = ['Product', 'Features', 'Pricing', 'Company', 'Blog'];
  // const rootRef = document.documentElement;

  // const handleClick = () => {
  //   rootRef?.classList.contains('dark')
  //     ? rootRef?.classList.remove('dark')
  //     : rootRef?.classList.add('dark');
  // };

  return (
    <header
      aria-label="Site Header"
      className="dark:bg-charcoal bg-red fixed top-0 left-0 w-full z-10"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
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
                  className="h-14 md:w-72 w-40"
                  src={'/images/magnumglobal1.svg'}
                  alt={'magnum global brand'}
                  width={64}
                  height={24}
                />
              </div>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-black-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Login
                </a>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
