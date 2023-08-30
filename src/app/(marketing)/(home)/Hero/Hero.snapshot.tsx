import { Hero } from './Hero';
import { render } from '@testing-library/react';

describe('Hero snapshot tests', () => {
  it('renders section', () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});
