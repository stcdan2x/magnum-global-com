import { tap } from '@/utils/helpers';
import { fontMontserrat } from '@/utils/fonts';

const styles = {
  contentContainer: tap`
  mx-auto
  max-w-screen-xl
  px-4
  py-8
  sm:py-12
  sm:px-6
  lg:py-16
  lg:px-8
  `,
  contentGrid: tap`
  grid
  grid-cols-1
  gap-8
  lg:grid-cols-2
  lg:gap-16
  `,
  imageWrapper: tap`
  relative
  h-64
  overflow-hidden
  rounded-lg
  sm:h-80
  lg:order-last
  lg:h-full
  `,
  image: tap`
  absolute
  inset-0
  h-full
  w-full
  object-cover
  `,
  copyWrapper: tap`
  lg:py-24
  `,
  copyHeader: tap`
  text-3xl
  font-bold
  sm:text-4xl
  text-white
  `,
  copyText: tap`
  mt-4
  text-gray-300
  `,
};

export default styles;
