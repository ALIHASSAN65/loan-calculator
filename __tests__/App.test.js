/**
 * Integration test for main App component
 * @format
 */

import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from '../App';

describe('Loan Calculator App', () => {
  test('renders without crashing', () => {
    const { toJSON } = render(<App />);
    expect(toJSON()).toBeTruthy();
  });

  test('displays default values correctly', () => {
    render(<App />);

    // Check default amount (£7,500)
    expect(screen.getByText('£7500.00')).toBeTruthy();
    
    // Check default years (2.5 years) - text is split across Text components
    expect(screen.getByText(/2.5/)).toBeTruthy();
    expect(screen.getByText(/years/)).toBeTruthy();
    
    // Check labels present
    expect(screen.getByText(/I want to borrow/)).toBeTruthy();
    expect(screen.getByText('Interest rate')).toBeTruthy();
    expect(screen.getByText('Monthly repayment')).toBeTruthy();
    expect(screen.getByText(/Get your quote/)).toBeTruthy();
  });

  test('calculates monthly payment correctly', () => {
    render(<App />);

    // Default: £7,500 @ 2.5 years @ 10% = ~£283.59
    const monthlyPayment = screen.getByText(/£283\./);
    expect(monthlyPayment).toBeTruthy();
  });
});
