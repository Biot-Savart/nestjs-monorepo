import { render } from '@testing-library/react';

import BigButton from './big-button';

describe('BigButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BigButton />);
    expect(baseElement).toBeTruthy();
  });
});
