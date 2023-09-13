import { Button } from './Button';
import { render, fireEvent } from '@testing-library/react';

describe('Button component tests', () => {
  it('renders with expected children', () => {
    const { getByRole } = render(<Button>Click Me</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  it('renders with expected HTML tag', () => {
    const { getByRole } = render(<Button>Click Me</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  it('can be disabled', () => {
    const { getByRole } = render(<Button disabled>Click Me</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toHaveAttribute('disabled');
  });

  it('shows "loading..." when isLoading is true', () => {
    const { getByText } = render(<Button isLoading>Click Me</Button>);
    const loadingText = getByText('loading...');
    expect(loadingText).toBeInTheDocument();
  });

  it('executes onClick callback when clicked', () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button onClick={onClickMock}>Click Me</Button>,
    );
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies additional custom classes', () => {
    const { container } = render(
      <Button className='custom-class'>Click Me</Button>,
    );
    const buttonElement = container.querySelector('.custom-class');
    expect(buttonElement).toBeInTheDocument();
  });
});
