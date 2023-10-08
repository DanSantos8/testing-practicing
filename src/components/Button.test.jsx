import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('should render the button', () => {
  const { getByText } = render(<Button label="Clique aqui" />);
  const linkElement = getByText(/Clique aqui/i);
  expect(linkElement).toBeInTheDocument();
});