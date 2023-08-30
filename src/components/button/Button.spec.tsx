import { Button } from './Button';
import { render } from '@testing-library/react';

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
});
