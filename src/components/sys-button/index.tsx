import React, { forwardRef } from 'react';
import { button, icon } from './variants';
import classNames from 'classnames';
import { SysButtonProps } from './_types';
import { useSysButton } from './_hooks/use-sys-button';

const SysButton = forwardRef<HTMLButtonElement, SysButtonProps>(
  (
    {
      label,
      variant = 'primary',
      size = 'sm',
      prependIcon: PrependIcon,
      appendIcon: AppendIcon,
      ...rest
    },
    ref,
  ) => {
    const { buttonVariant } = useSysButton({
      size,
      variant,
      disabled: rest.disabled,
    });

    return (
      <button
        ref={ref}
        data-testid="sys-button"
        className={buttonVariant}
        {...rest}
      >
        {!!PrependIcon && (
          <PrependIcon
            className={classNames(
              icon({
                size,
              }),
            )}
          />
        )}

        {!!label && label}

        {!!AppendIcon && (
          <AppendIcon
            className={classNames(
              icon({
                size,
              }),
            )}
          />
        )}
      </button>
    );
  },
);

export default SysButton;
