import { forwardRef } from 'react';
import { SysInputProps } from './_types';
import { useSysInput } from './_hooks/use-sys-input';
import { leftIconVariants, rightIconVariants } from './variants';

const SysInput = forwardRef<HTMLInputElement, SysInputProps>(
  (
    {
      variant = 'primary',
      prependIcon: PrependIcon,
      appendIcon: AppendIcon,
      label,
      status,
      feedback,
      size,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const { inputVariant } = useSysInput({
      variant,
      size,
      status,
      disabled,
      appendIcon: AppendIcon,
      prependIcon: PrependIcon,
    });

    return (
      <div
        data-testid="sys-input"
        className="flex flex-col relative w-full"
      >
        {!!label && (
          <label
            data-testid="sys-input-label"
            className="mb-1 font-normal text-sm text-neutral-700"
          >
            {label}
          </label>
        )}

        <div className="w-full relative">
          {!!PrependIcon && (
            <PrependIcon className={leftIconVariants({ size })} />
          )}

          <input
            data-testid="sys-input-field"
            ref={ref}
            className={inputVariant}
            disabled={disabled}
            {...rest}
          />

          {!!AppendIcon && (
            <AppendIcon className={rightIconVariants({ size })} />
          )}
        </div>

        {!status && !!feedback && (
          <span
            data-testid="sys-input-feedback"
            className="absolute left-4 top-full font-normal text-sm text-red-600"
          >
            {feedback}
          </span>
        )}
      </div>
    );
  },
);

export default SysInput;
