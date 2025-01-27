import { tv } from 'tailwind-variants';

const button = tv({
  base: 'rounded-sm outline-none select-none font-semibold flex flex-nowrap items-center border',
  variants: {
    size: {
      sm: 'px-3 py-1 text-sm gap-2',
      md: 'px-3 py-1 text-md gap-2',
    },
    variant: {
      primary:
        'text-white bg-blue-700 border-blue-700 hover:border-blue-600 hover:bg-blue-600 active:bg-blue-500 active:border-blue-500',
      disabled: 'text-neutral-500 bg-neutral-300',
    },
  },
});

const icon = tv({
  variants: {
    size: {
      sm: 'min-w-[18px] max-w-[18px] min-h-[18px] max-h-[18px]',
      md: 'min-w-[22px] max-w-[22px] min-h-[22px] max-h-[22px]',
    },
  },
});

export { button, icon };
