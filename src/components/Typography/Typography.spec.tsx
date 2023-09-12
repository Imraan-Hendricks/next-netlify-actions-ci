import { render } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography component tests', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Typography>Child Text</Typography>);
    const textElement = getByText('Child Text');
    expect(textElement).toBeInTheDocument();
  });

  it('renders with specified element type', () => {
    const { container } = render(<Typography as='h1'>Header 1</Typography>);
    const h1Element = container.querySelector('h1');
    expect(h1Element).toBeInTheDocument();
  });

  it('applies the correct variant class', () => {
    const { container } = render(
      <Typography variant='title'>Title Text</Typography>,
    );
    const typographyElement = container.querySelector('.text-6xl');
    expect(typographyElement).toBeInTheDocument();
  });

  it('renders with the "bold" class when "bold" prop is true', () => {
    const { container } = render(<Typography bold>Text with Bold</Typography>);
    const typographyElement = container.querySelector('.font-medium');
    expect(typographyElement).toBeInTheDocument();
  });

  it('renders with the "thin" class when "thin" prop is true', () => {
    const { container } = render(<Typography thin>Text with Thin</Typography>);
    const typographyElement = container.querySelector('.font-light');
    expect(typographyElement).toBeInTheDocument();
  });

  it('applies additional custom classes', () => {
    const { container } = render(
      <Typography className='custom-class'>Custom Class Text</Typography>,
    );
    const typographyElement = container.querySelector('.custom-class');
    expect(typographyElement).toBeInTheDocument();
  });
});
