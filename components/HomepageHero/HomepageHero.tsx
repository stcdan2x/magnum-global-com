import Image from 'next/image';
import React from 'react';

const VideoElement = () => (
  <div
    role="presentation"
    className="absolute bg-cover bg-center bg-no-repeat w-full h-full"
  >
    <video
      autoPlay
      playsInline
      loop
      muted
      height={'100%'}
      width={'100%'}
      className="h-full object-cover"
    >
      <source src="/citylights1conv.mp4" type="video/mp4" />
    </video>
  </div>
);

const HomepageHero = () => {
  return (
    <section className="relative">
      <VideoElement />
      <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex h-3/6 lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Unlocking potential to turn
            <strong className="block font-extrabold text-rose-700">
              Ambition into action.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="z-10 absolute bottom-10 left-1/2 h-12 w-12 animate-bounce">
        <Image
        className="z-10 h-12 w-12 animate-ping"
          src="/icons/chevron-down-circle-sharp.svg"
          alt="arrow down"
          width={24}
          height={24}
        />
      </div>
    </section>
  );
};

export default HomepageHero;
