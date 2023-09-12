import { render } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography snapshot tests', () => {
  it('renders with expected children', () => {
    const { container } = render(<Typography>Text to display</Typography>);
    expect(container).toMatchSnapshot();
  });

  it('renders with specified element', () => {
    const { container } = render(
      <Typography as='h1'>Text to display</Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with specified variant', () => {
    const { container } = render(
      <Typography variant='h1'>Text to display</Typography>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with the "bold" class when "bold" prop is true', () => {
    const { container } = render(<Typography bold>Text to display</Typography>);
    expect(container).toMatchSnapshot();
  });

  it('renders with the "thin" class when "thin" prop is true', () => {
    const { container } = render(<Typography thin>Text to display</Typography>);
    expect(container).toMatchSnapshot();
  });

  it('renders with specified custom className', () => {
    const { container } = render(
      <Typography className='custom-class'>Text to display</Typography>,
    );
    expect(container).toMatchSnapshot();
  });
});
