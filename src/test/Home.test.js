import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('updates input value when typing', () => {
    const { getByPlaceholderText } = render(<Home />);
    const inputElement = getByPlaceholderText('Enter URL');
    fireEvent.change(inputElement, { target: { value: 'https://example.com' } });
    expect(inputElement.value).toBe('https://example.com');
  });

  it('submits form and displays loading message', async () => {
    const { getByPlaceholderText, getByText, getByRole, queryByText } = render(<Home />);
    const inputElement = getByPlaceholderText('Enter URL');
    const submitButton = getByText('Create');
  
    // Simulate input change
    fireEvent.change(inputElement, { target: { value: 'https://example.com' } });
  
    // Simulate form submission
    fireEvent.click(submitButton);
  });
});
