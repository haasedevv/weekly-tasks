import {
  ButtonVariantsBase,
  handleButtonVariantProps,
  handleInternalVariantNameProps,
  UseSysButtonProps,
} from '../_types';
import { button } from '../variants';

function useSysButton({
  variant = 'primary',
  size = 'sm',
  disabled = false,
}: UseSysButtonProps) {
  const buttonVariant = handleButtonVariant({ variant, disabled });

  function handleInternalVariantName(
    props: handleInternalVariantNameProps,
  ): keyof ButtonVariantsBase['variant'] {
    if (props.disabled) return 'disabled';

    return props.variant;
  }

  function handleButtonVariant(props: handleButtonVariantProps): string {
    let internalVariant = handleInternalVariantName({ ...props });

    return button({
      variant: internalVariant,
      size,
    });
  }

  return { buttonVariant };
}

export { useSysButton };
