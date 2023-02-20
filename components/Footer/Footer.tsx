import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Container from '../Container/Container';

export default function Footer() {
  const navigation = ['Product', 'Features', 'Pricing', 'Company', 'Blog'];
  const legal = ['Terms', 'Privacy', 'Legal'];

  return (
    <footer aria-label="Site Footer" className="footer bg-charcoal">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 dt:px-8">
        <div className="dt:grid dt:grid-cols-2 w-full">
          <div className="py-8 border-b border-gray-800 dt:order-last dt:border-b-0 dt:border-l dt:py-16 dt:pl-16">
            <div className="flex items-center text-teal-600 dt:hidden">
              <Image
                className="h-8 w-12"
                src={'/images/magnumGlobalLogo1.svg'}
                alt={'magnum global logo'}
                width={64}
                height={24}
              />
              <Image
                className="h-14 w-72"
                src={'/images/magnumglobal1.svg'}
                alt={'magnum global brand'}
                width={64}
                height={24}
              />
            </div>

            <div className="mt-8 space-y-4 dt:mt-0">
              <span className="hidden w-10 h-1 bg-rose-500 rounded dt:block"></span>

              <div>
                <h2 className="text-2xl font-medium text-gray-300">
                  Reuqest for a sign-up form
                </h2>

                <p className="max-w-lg mt-4 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, harum deserunt nesciunt praesentium, repellendus
                  eum perspiciatis ratione pariatur a aperiam eius numquam
                  doloribus asperiores sunt.
                </p>
              </div>

              <form className="w-full mt-6">
                <label htmlFor="UserEmail" className="sr-only">
                  {' '}
                  Email{' '}
                </label>

                <div className="p-2 border border-gray-800 rounded-md focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="text-white bg-charcoal w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button className="w-full px-6 py-3 mt-1 text-sm font-bold tracking-wide text-white transition-none bg-rose-700 rounded hover:bg-rose-800 sm:mt-0 sm:w-auto sm:flex-shrink-0">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-8 dt:py-16 dt:pr-16">
            <div className="hidden text-teal-600 dt:flex dt:items-center">
              <Image
                className="h-8 w-12"
                src={'/images/magnumGlobalLogo1.svg'}
                alt={'magnum global logo'}
                width={64}
                height={24}
              />
              <Image
                className="h-14 w-72"
                src={'/images/magnumglobal1.svg'}
                alt={'magnum global brand'}
                width={64}
                height={24}
              />
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-3">
              <div>
                <p className="font-medium text-gray-300">Services</p>

                <nav aria-label="Footer Navigation - Services" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 transition hover:opacity-75"
                      >
                        1on1 Coaching
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-400 transition hover:opacity-75"
                      >
                        Company Review
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-400 transition hover:opacity-75"
                      >
                        Accounts Review
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-400 transition hover:opacity-75"
                      >
                        HR Consulting
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-400 transition hover:opacity-75"
                      >
                        SEO Optimisation
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-medium text-gray-300">Company</p>

                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 transition hover:opacity-75"
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-400 transition hover:opacity-75"
                      >
                        Meet the Team
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-400 transition hover:opacity-75"
                      >
                        Accounts Review
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-medium text-gray-300">Helpful Links</p>

                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 transition hover:opacity-75"
                      >
                        Contact
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-400 transition hover:opacity-75"
                      >
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-400 transition hover:opacity-75"
                      >
                        Live Chat
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-800">
              <nav aria-label="Footer Navigation - Support">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:opacity-75"
                    >
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:opacity-75"
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:opacity-75"
                    >
                      Cookies
                    </a>
                  </li>
                </ul>
              </nav>

              <p className="mt-8 text-xs text-gray-400">
                &copy; 2022. Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
