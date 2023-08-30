import { Hero } from './Hero';
import { render } from '@testing-library/react';

describe('Hero component tests', () => {
  it('renders as a section element', () => {
    const { container } = render(<Hero />);
    const sectionElement = container.firstChild as HTMLElement | null;
    expect(sectionElement?.tagName).toBe('SECTION');
  });

  it('renders exactly one title', () => {
    const { getAllByRole } = render(<Hero />);
    const titleElements = getAllByRole('heading', { level: 1 });
    expect(titleElements).toHaveLength(1);
  });

  it('renders exactly one caption', () => {
    const { container } = render(<Hero />);
    const pElements = container.querySelectorAll('p');
    expect(pElements).toHaveLength(1);
  });

  it('renders exactly two buttons', () => {
    const { getAllByRole } = render(<Hero />);
    const buttonElements = getAllByRole('button');
    expect(buttonElements).toHaveLength(2);
  });
});
