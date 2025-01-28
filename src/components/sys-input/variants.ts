import { tv } from 'tailwind-variants';

const primaryInputVariants = tv({
  base: 'outline-none rounded-sm w-full',
  variants: {
    variant: {
      default:
        'border border-neutral-300 bg-white hover:border-blue-400 focus:border-blue-700',
      danger:
        'border border-red-600 bg-white hover:border-red-600 focus:border-red-600',
      disabled:
        'border border-red-600 bg-white hover:border-red-600 focus:border-red-600',
    },
    size: {
      sm: 'pl-3 pr-3 pt-2 pb-2 text-sm',
    },
    paddingWithLeftIcon: {
      sm: 'pl-[40px]',
    },
    paddingWithRightIcon: {
      sm: 'pr-[40px]',
    },
  },
});

const leftIconVariants = tv({
  base: 'top-[50%] translate-y-[-50%] absolute',
  variants: {
    size: {
      sm: 'min-w-5 max-w-5 max-h-5 min-h-5 left-3',
    },
  },
});
const rightIconVariants = tv({
  base: 'top-[50%] translate-y-[-50%] absolute',
  variants: {
    size: {
      sm: 'min-w-5 max-w-5 max-h-5 min-h-5 right-3',
    },
  },
});

export { primaryInputVariants, leftIconVariants, rightIconVariants };
