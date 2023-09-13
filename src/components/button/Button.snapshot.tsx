import { Button } from './Button';
import { render } from '@testing-library/react';

describe('Button snapshot tests', () => {
  it('renders with expected children and default props', () => {
    const { container } = render(<Button>Click Me</Button>);
    expect(container).toMatchSnapshot();
  });

  it('renders with disabled prop', () => {
    const { container } = render(<Button disabled>Click Me</Button>);
    expect(container).toMatchSnapshot();
  });

  it('renders with isLoading prop', () => {
    const { container } = render(<Button isLoading>Click Me</Button>);
    expect(container).toMatchSnapshot();
  });

  it('renders with onClick prop', () => {
    const { container } = render(
      <Button onClick={() => console.log('Button clicked')}>Click Me</Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with specified custom className', () => {
    const { container } = render(
      <Button className='custom-class'>Click Me</Button>,
    );
    expect(container).toMatchSnapshot();
  });
});
