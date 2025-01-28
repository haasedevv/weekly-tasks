import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SysInput from './index';
import { primaryInputVariants } from './variants';
import { SysInputProps } from './_types';

const setup = (props = {} as SysInputProps) => {
  render(<SysInput {...props} />);

  const sysInputElement = screen.getByTestId('sys-input');
  const sysInputFieldElement = screen.getByTestId('sys-input-field');
  const sysInputFeedback = screen.queryByTestId('sys-input-feedback');
  const sysInputLabel = screen.queryByTestId('sys-input-label');

  return {
    sysInputElement,
    sysInputFieldElement,
    sysInputFeedback,
    sysInputLabel,
  };
};

describe('SysInput', () => {
  it('should render the primary input', () => {
    const { sysInputElement, sysInputFieldElement } = setup();

    expect(sysInputElement).toBeInTheDocument();
    expect(sysInputElement).toContainElement(sysInputFieldElement);
  });

  it('should render the input with label', () => {
    const { sysInputElement, sysInputFieldElement, sysInputLabel } = setup({
      label: 'Test',
      variant: 'primary',
    });

    expect(sysInputElement).toBeInTheDocument();
    expect(sysInputElement).toContainElement(sysInputLabel);
    expect(sysInputFieldElement).toHaveClass(
      primaryInputVariants.variants.variant.default,
    );
    expect(sysInputLabel).toHaveTextContent(/^Test$/);
    expect(sysInputLabel).toHaveClass(
      'mb-1 font-normal text-sm text-neutral-700',
    );
  });

  it('should render primary input with error and feedback', () => {
    const { sysInputElement, sysInputFieldElement, sysInputFeedback } = setup({
      variant: 'primary',
      status: false,
      feedback: 'feedback',
    });

    expect(sysInputElement).toBeInTheDocument();
    expect(sysInputFieldElement).toBeInTheDocument();
    expect(sysInputFeedback).toHaveTextContent(/^feedback$/);
    expect(sysInputFieldElement).toHaveClass(
      primaryInputVariants.variants.variant.danger,
    );
  });

  it('should render primary input disabled', () => {
    const { sysInputFieldElement } = setup({
      variant: 'primary',
      disabled: true,
      value: '',
    });

    expect(sysInputFieldElement).toBeInTheDocument();
    expect(sysInputFieldElement).toBeDisabled();
    expect(sysInputFieldElement).not.toHaveFocus();
    expect(sysInputFieldElement).toHaveClass(
      primaryInputVariants.variants.variant.disabled,
    );
  });
});
