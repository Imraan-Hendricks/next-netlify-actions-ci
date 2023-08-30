import { Button } from './Button';
import { render } from '@testing-library/react';

describe('Button snapshot tests', () => {
  it('renders with expected children', () => {
    const { container } = render(<Button>Click Me</Button>);
    expect(container).toMatchSnapshot();
  });
});
