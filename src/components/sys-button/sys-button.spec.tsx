import React from 'react';
import { render, screen } from '@testing-library/react';
import SysButton from './index';
import '@testing-library/jest-dom';
import { SysButtonProps } from './_types';
import { button } from './variants';

const setup = (props = {} as SysButtonProps) => {
  render(<SysButton {...props} />);

  const sysButtonElement = screen.getByTestId('sys-button');

  return {
    sysButtonElement,
  };
};

describe('SysButton', () => {
  it('should render the button with the label text', () => {
    const { sysButtonElement } = setup({
      label: 'Click here',
      variant: 'primary',
    });

    const label = screen.getByText('Click here');

    expect(sysButtonElement).toBeInTheDocument();
    expect(sysButtonElement).toContainElement(label);
    expect(sysButtonElement).toHaveClass(button.variants.variant.primary);
  });

  it('should render the button with prependIcon, appendIcon, and label', () => {
    const SvgMock1 = () => <svg data-testid="sys-button-prepend-icon" />;
    const SvgMock2 = () => <svg data-testid="sys-button-append-icon" />;

    const { sysButtonElement } = setup({
      label: 'Button with icons',
      prependIcon: SvgMock1,
      appendIcon: SvgMock2,
    });

    const prependIcon = screen.getByTestId('sys-button-prepend-icon');
    const appendIcon = screen.getByTestId('sys-button-append-icon');
    const label = screen.getByText('Button with icons');

    expect(sysButtonElement).toBeInTheDocument();
    expect(sysButtonElement).toContainElement(prependIcon);
    expect(sysButtonElement).toContainElement(appendIcon);
    expect(sysButtonElement).toContainElement(label);
  });

  it('should render the button disabled', () => {
    const handleClick = jest.fn();

    const { sysButtonElement } = setup({
      label: 'Button',
      disabled: true,
      onClick: handleClick,
    });

    const label = screen.getByText('Button');

    expect(sysButtonElement).toBeInTheDocument();
    expect(sysButtonElement).toContainElement(label);
    expect(sysButtonElement).toHaveClass(button.variants.variant.disabled);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
