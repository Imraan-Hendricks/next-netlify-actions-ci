import { render } from '@testing-library/react';
import { TextSkeleton } from './TextSkeleton';

describe('TextSkeleton snapshot tests', () => {
  it('renders with specified custom className', () => {
    const mathRandomSpy = jest.spyOn(Math, 'random').mockReturnValue(95);
    const { container } = render(<TextSkeleton className='custom-class' />);
    expect(container).toMatchSnapshot();
    mathRandomSpy.mockRestore();
  });
});
