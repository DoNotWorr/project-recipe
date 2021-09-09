import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PreviewContainer from './PreviewContainer';

describe('<PreviewContainer />', () => {
  test('it should mount', () => {
    render(<PreviewContainer />);
    
    const previewContainer = screen.getByTestId('PreviewContainer');

    expect(previewContainer).toBeInTheDocument();
  });
});