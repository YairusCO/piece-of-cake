import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Selected from './Selected';

describe('<Selected />', () => {
  test('it should mount', () => {
    render(<Selected />);
    
    const selected = screen.getByTestId('Selected');

    expect(selected).toBeInTheDocument();
  });
});