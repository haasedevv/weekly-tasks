import { ComponentProps } from 'react';

export type SysInputProps = {
  label?: string;
  status?: boolean;
  feedback?: string;
  variant?: 'primary';
  size?: 'sm';
  appendIcon?: React.ElementType;
  prependIcon?: React.ElementType;
} & Omit<ComponentProps<'input'>, 'size'>;

export type UseSysInputProps = Pick<
  SysInputProps,
  'status' | 'disabled' | 'size' | 'appendIcon' | 'prependIcon'
> &
  Required<Pick<SysInputProps, 'variant'>>;

export type handleInputVariantsProps = Pick<
  SysInputProps,
  'status' | 'disabled' | 'size'
> &
  Required<Pick<SysInputProps, 'variant'>>;

export type handleInternalVariantNameProps = {
  status?: boolean;
  disabled?: boolean;
};

export type InputBaseVariants = {
  variant?: 'default' | 'danger' | 'disabled';
  size?: 'sm';
};
