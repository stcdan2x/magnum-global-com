import { tap } from '@/utils/helpers';
import { fontMontserrat } from '@/utils/fonts';

const styles = {
  aboutTitle: tap`
  text-2xl
  text-cyan-300
  border-2
  border-dashed
  mx-auto
  text-center
  ${fontMontserrat}
  `,
};

export default styles;
