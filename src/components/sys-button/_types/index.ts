import { ComponentProps } from 'react';
import { button, icon } from '../variants';

type SysButtonPropsBase = {
  label?: string;
  variant?: 'primary';
  size?: 'sm' | 'md';
  disabled?: boolean;
} & ComponentProps<'button'>;

type SysButtonTextProps = {
  prependIcon?: React.ElementType;
  appendIcon?: React.ElementType;
};

export type SysButtonProps = SysButtonPropsBase & SysButtonTextProps;

export type UseSysButtonProps = Pick<
  SysButtonPropsBase,
  'variant' | 'size' | 'disabled'
>;

export type ButtonVariantsBase = typeof button.variants;
export type IconVariantProps = typeof icon.variants;

export type handleButtonVariantProps = {
  variant: Exclude<UseSysButtonProps['variant'], undefined>;
  disabled: boolean;
};

export type handleInternalVariantNameProps = Required<
  Pick<SysButtonProps, 'disabled' | 'variant'>
>;
