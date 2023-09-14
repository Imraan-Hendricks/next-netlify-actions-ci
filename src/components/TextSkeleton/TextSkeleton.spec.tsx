import { render } from '@testing-library/react';
import { TextSkeleton } from './TextSkeleton';

describe('TextSkeleton component tests', () => {
  it('applies additional custom classes', () => {
    const { container } = render(<TextSkeleton className='custom-class' />);
    const textSkeletonElement = container.querySelector('.custom-class');
    expect(textSkeletonElement).toBeInTheDocument();
  });
});
