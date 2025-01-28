import inputTailwindVariantsEnum from '../_enums/variants';
import {
  handleInputVariantsProps,
  handleInternalVariantNameProps,
  InputBaseVariants,
  UseSysInputProps,
} from '../_types';

function useSysInput({
  variant,
  size,
  disabled,
  status,
  appendIcon,
  prependIcon,
}: UseSysInputProps) {
  const inputVariant = handleInputVariant({
    variant,
    size,
    disabled,
    status,
  });

  function handleInternalVariantName(
    props: handleInternalVariantNameProps,
  ): InputBaseVariants['variant'] {
    if (props.disabled) return 'disabled';

    if (props.status === false) return 'danger';

    return 'default';
  }

  function handleInputVariant(props: handleInputVariantsProps) {
    let internalVariant = handleInternalVariantName({ status, disabled });

    return inputTailwindVariantsEnum[props.variant]?.({
      size,
      variant: internalVariant,
      paddingWithLeftIcon: !!prependIcon ? size : undefined,
      paddingWithRightIcon: !!appendIcon ? size : undefined,
    });
  }

  return { inputVariant };
}

export { useSysInput };
