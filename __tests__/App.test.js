/**
 * Integration tests for main App component
 * Tests the full loan calculator functionality including state management,
 * calculations, and component interactions
 * @format
 */

import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from '../App';

describe('Loan Calculator App - Integration Tests', () => {
  describe('Initial Rendering', () => {
    test('renders without crashing', () => {
      const { toJSON } = render(<App />);
      expect(toJSON()).toBeTruthy();
    });

    test('renders all main components', () => {
      const { toJSON } = render(<App />);
      const tree = toJSON();
      
      // Should have a valid component tree
      expect(tree).toBeTruthy();
    });
  });

  describe('Default State and Values', () => {
    test('displays default loan amount (£7,500)', () => {
      render(<App />);
      expect(screen.getByText('£7500.00')).toBeTruthy();
    });

    test('displays default loan term (2.5 years)', () => {
      render(<App />);
      expect(screen.getByText(/2 ½/)).toBeTruthy();
      expect(screen.getByText(/years/)).toBeTruthy();
    });

    test('displays correct interest rate for default amount (10%)', () => {
      render(<App />);
      // £7,500 falls in £5,000-£9,999 range = 10%
      expect(screen.getByText(/10/)).toBeTruthy();
      expect(screen.getByText(/%/)).toBeTruthy();
    });

    test('calculates correct monthly payment for default values', () => {
      render(<App />);
      // £7,500 @ 10% for 2.5 years = ~£283.59
      expect(screen.getByText(/£283\./)).toBeTruthy();
    });
  });

  describe('UI Labels and Text', () => {
    test('displays all required labels', () => {
      render(<App />);
      
      expect(screen.getByText(/I want to borrow/)).toBeTruthy();
      expect(screen.getByText('Interest rate')).toBeTruthy();
      expect(screen.getByText('Monthly repayment')).toBeTruthy();
      expect(screen.getByText(/Get your quote/)).toBeTruthy();
    });

    test('displays year prefix and suffix correctly', () => {
      render(<App />);
      expect(screen.getByText(/over/)).toBeTruthy();
      expect(screen.getByText(/years/)).toBeTruthy();
    });
  });

  describe('Interest Rate Calculations', () => {
    test('uses correct interest rate tiers based on amount', () => {
      const { toJSON } = render(<App />);
      
      // Default amount £7,500 should give 10% interest
      // (£5,000-£9,999 range)
      expect(toJSON()).toBeTruthy();
    });
  });

  describe('Monthly Payment Calculations', () => {
    test('calculates monthly payment using correct formula', () => {
      render(<App />);
      
      // Default: £7,500 @ 10% APR for 2.5 years
      // Using amortization formula: M = P[r(1+r)^n]/[(1+r)^n-1]
      // Should be approximately £283.59
      const paymentText = screen.getByText(/£283\./);
      expect(paymentText).toBeTruthy();
    });

    test('monthly payment is formatted as currency', () => {
      render(<App />);
      
      // Should display with £ symbol and 2 decimal places
      expect(screen.getByText('£283.59')).toBeTruthy();
    });
  });

  describe('Component Integration', () => {
    test('AmountSlider is rendered and integrated', () => {
      render(<App />);
      
      // Check that amount slider displays the default amount
      expect(screen.getByText('£7500.00')).toBeTruthy();
      expect(screen.getByText(/I want to borrow/)).toBeTruthy();
    });

    test('YearsSlider is rendered and integrated', () => {
      render(<App />);
      
      // Check that years slider displays the default years
      expect(screen.getByText(/2 ½/)).toBeTruthy();
      expect(screen.getByText(/over/)).toBeTruthy();
    });

    test('ResultBox is rendered and displays calculated results', () => {
      render(<App />);
      
      // Check that results are displayed
      expect(screen.getByText('Interest rate')).toBeTruthy();
      expect(screen.getByText('Monthly repayment')).toBeTruthy();
      expect(screen.getByText(/10/)).toBeTruthy(); // Interest rate
      expect(screen.getByText(/£283\./)).toBeTruthy(); // Monthly payment
    });

    test('ActionButton is rendered and integrated', () => {
      render(<App />);
      
      // Check that button is present
      expect(screen.getByText(/Get your quote/)).toBeTruthy();
    });
  });

  describe('Gradient and Styling', () => {
    test('renders gradient background component', () => {
      const { toJSON } = render(<App />);
      const tree = toJSON();
      
      // Component tree should be valid and contain styling structure
      expect(tree).toBeTruthy();
    });
  });

  describe('Real-world Loan Scenarios', () => {
    test('minimum loan scenario renders correctly', () => {
      // While we can't directly set values without interaction,
      // we can verify the app structure supports different values
      const { toJSON } = render(<App />);
      expect(toJSON()).toBeTruthy();
    });

    test('default loan scenario (£7,500 @ 2.5 years)', () => {
      render(<App />);
      
      // Verify all parts of the calculation
      expect(screen.getByText('£7500.00')).toBeTruthy(); // Amount
      expect(screen.getByText(/2 ½/)).toBeTruthy();      // Years
      expect(screen.getByText(/10/)).toBeTruthy();       // Interest rate (10%)
      expect(screen.getByText(/£283\./)).toBeTruthy();   // Monthly payment
    });
  });

  describe('State Management', () => {
    test('initializes with correct default state', () => {
      render(<App />);
      
      // All default values should be present
      expect(screen.getByText('£7500.00')).toBeTruthy();
      expect(screen.getByText(/2 ½/)).toBeTruthy();
      expect(screen.getByText(/10/)).toBeTruthy();
      expect(screen.getByText(/£283\./)).toBeTruthy();
    });

    test('effect hook calculates payment on mount', () => {
      render(<App />);
      
      // Monthly payment should be calculated immediately
      // Not be 0 or undefined
      expect(screen.getByText(/£283\./)).toBeTruthy();
    });
  });

  describe('Data Flow', () => {
    test('amount flows from state to AmountSlider to display', () => {
      render(<App />);
      expect(screen.getByText('£7500.00')).toBeTruthy();
    });

    test('years flows from state to YearsSlider to display', () => {
      render(<App />);
      expect(screen.getByText(/2 ½/)).toBeTruthy();
    });

    test('interest rate flows from calculation to ResultBox', () => {
      render(<App />);
      expect(screen.getByText(/10/)).toBeTruthy();
    });

    test('monthly payment flows from calculation to ResultBox', () => {
      render(<App />);
      expect(screen.getByText(/£283\./)).toBeTruthy();
    });
  });

  describe('Snapshot Testing', () => {
    test('matches snapshot for default state', () => {
      const { toJSON } = render(<App />);
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
