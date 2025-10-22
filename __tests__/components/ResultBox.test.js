/**
 * Unit tests for ResultBox component
 * @format
 */

import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ResultBox from '../../src/components/ResultBox';

describe('ResultBox Component', () => {
  describe('Rendering', () => {
    test('renders without crashing', () => {
      const { toJSON } = render(
        <ResultBox interestRate={10} monthlyPayment={284.88} />
      );
      expect(toJSON()).toBeTruthy();
    });

    test('displays both interest rate and monthly payment sections', () => {
      render(<ResultBox interestRate={10} monthlyPayment={284.88} />);
      
      expect(screen.getByText('Interest rate')).toBeTruthy();
      expect(screen.getByText('Monthly repayment')).toBeTruthy();
    });
  });

  describe('Interest Rate Display', () => {
    test('displays 5% interest rate correctly', () => {
      render(<ResultBox interestRate={5} monthlyPayment={100} />);
      expect(screen.getByText(/5/)).toBeTruthy();
      expect(screen.getByText(/%/)).toBeTruthy();
    });

    test('displays 10% interest rate correctly', () => {
      render(<ResultBox interestRate={10} monthlyPayment={100} />);
      // Verify 10% is displayed (may appear in multiple places with the label)
      const tree = screen.getAllByText(/10/);
      expect(tree.length).toBeGreaterThan(0);
      expect(screen.getByText(/%/)).toBeTruthy();
    });

    test('displays 15% interest rate correctly', () => {
      render(<ResultBox interestRate={15} monthlyPayment={100} />);
      expect(screen.getByText(/15/)).toBeTruthy();
      expect(screen.getByText(/%/)).toBeTruthy();
    });

    test('displays 20% interest rate correctly', () => {
      render(<ResultBox interestRate={20} monthlyPayment={100} />);
      expect(screen.getByText(/20/)).toBeTruthy();
      expect(screen.getByText(/%/)).toBeTruthy();
    });

    test('handles decimal interest rates', () => {
      render(<ResultBox interestRate={12.5} monthlyPayment={100} />);
      expect(screen.getByText(/12.5/)).toBeTruthy();
    });
  });

  describe('Monthly Payment Display', () => {
    test('displays formatted monthly payment with currency symbol', () => {
      render(<ResultBox interestRate={10} monthlyPayment={284.88} />);
      expect(screen.getByText('£284.88')).toBeTruthy();
    });

    test('displays whole number payments with decimals', () => {
      render(<ResultBox interestRate={10} monthlyPayment={300} />);
      expect(screen.getByText('£300.00')).toBeTruthy();
    });

    test('displays small monthly payments correctly', () => {
      render(<ResultBox interestRate={5} monthlyPayment={85.61} />);
      expect(screen.getByText('£85.61')).toBeTruthy();
    });

    test('displays large monthly payments correctly', () => {
      render(<ResultBox interestRate={20} monthlyPayment={529.45} />);
      expect(screen.getByText('£529.45')).toBeTruthy();
    });

    test('handles zero monthly payment', () => {
      render(<ResultBox interestRate={10} monthlyPayment={0} />);
      expect(screen.getByText('£0.00')).toBeTruthy();
    });

    test('formats monthly payment to 2 decimal places', () => {
      render(<ResultBox interestRate={10} monthlyPayment={283.59123} />);
      expect(screen.getByText('£283.59')).toBeTruthy();
    });
  });

  describe('Component Props', () => {
    test('updates when interestRate prop changes', () => {
      const { rerender } = render(
        <ResultBox interestRate={10} monthlyPayment={284.88} />
      );
      expect(screen.getByText(/10/)).toBeTruthy();

      rerender(<ResultBox interestRate={15} monthlyPayment={284.88} />);
      expect(screen.getByText(/15/)).toBeTruthy();
    });

    test('updates when monthlyPayment prop changes', () => {
      const { rerender } = render(
        <ResultBox interestRate={10} monthlyPayment={284.88} />
      );
      expect(screen.getByText('£284.88')).toBeTruthy();

      rerender(<ResultBox interestRate={10} monthlyPayment={346.65} />);
      expect(screen.getByText('£346.65')).toBeTruthy();
    });
  });

  describe('Layout and Labels', () => {
    test('displays labels correctly', () => {
      render(<ResultBox interestRate={10} monthlyPayment={284.88} />);
      
      const interestLabel = screen.getByText('Interest rate');
      const paymentLabel = screen.getByText('Monthly repayment');
      
      expect(interestLabel).toBeTruthy();
      expect(paymentLabel).toBeTruthy();
    });
  });

  describe('Real-world scenarios', () => {
    test('displays values for minimum loan (£1,000 @ 5% for 1 year)', () => {
      render(<ResultBox interestRate={5} monthlyPayment={85.61} />);
      const rateElements = screen.getAllByText(/5/);
      expect(rateElements.length).toBeGreaterThan(0);
      expect(screen.getByText('£85.61')).toBeTruthy();
    });

    test('displays values for typical loan (£7,500 @ 10% for 2.5 years)', () => {
      render(<ResultBox interestRate={10} monthlyPayment={283.59} />);
      expect(screen.getByText(/10/)).toBeTruthy();
      expect(screen.getByText('£283.59')).toBeTruthy();
    });

    test('displays values for maximum loan (£20,000 @ 20% for 5 years)', () => {
      render(<ResultBox interestRate={20} monthlyPayment={529.45} />);
      expect(screen.getByText(/20/)).toBeTruthy();
      expect(screen.getByText('£529.45')).toBeTruthy();
    });
  });
});

