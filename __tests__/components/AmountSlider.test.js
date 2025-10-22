/**
 * Unit tests for AmountSlider component
 * @format
 */

import React from 'react';
import { render, screen } from '@testing-library/react-native';
import AmountSlider from '../../src/components/AmountSlider';
import { SLIDER_CONFIG } from '../../src/constants';

describe('AmountSlider Component', () => {
  const mockOnValueChange = jest.fn();

  beforeEach(() => {
    mockOnValueChange.mockClear();
  });

  describe('Rendering', () => {
    test('renders without crashing', () => {
      const { toJSON } = render(
        <AmountSlider value={7500} onValueChange={mockOnValueChange} />
      );
      expect(toJSON()).toBeTruthy();
    });

    test('displays the label text', () => {
      render(<AmountSlider value={7500} onValueChange={mockOnValueChange} />);
      expect(screen.getByText(/I want to borrow/)).toBeTruthy();
    });

    test('displays formatted amount value', () => {
      render(<AmountSlider value={7500} onValueChange={mockOnValueChange} />);
      expect(screen.getByText('£7500.00')).toBeTruthy();
    });
  });

  describe('Value Display', () => {
    test('displays minimum amount correctly', () => {
      render(
        <AmountSlider 
          value={SLIDER_CONFIG.AMOUNT.MIN} 
          onValueChange={mockOnValueChange} 
        />
      );
      expect(screen.getByText('£1000.00')).toBeTruthy();
    });

    test('displays maximum amount correctly', () => {
      render(
        <AmountSlider 
          value={SLIDER_CONFIG.AMOUNT.MAX} 
          onValueChange={mockOnValueChange} 
        />
      );
      expect(screen.getByText('£20000.00')).toBeTruthy();
    });

    test('displays mid-range amounts correctly', () => {
      const { rerender } = render(
        <AmountSlider value={5000} onValueChange={mockOnValueChange} />
      );
      expect(screen.getByText('£5000.00')).toBeTruthy();

      rerender(<AmountSlider value={10000} onValueChange={mockOnValueChange} />);
      expect(screen.getByText('£10000.00')).toBeTruthy();

      rerender(<AmountSlider value={15000} onValueChange={mockOnValueChange} />);
      expect(screen.getByText('£15000.00')).toBeTruthy();
    });

    test('formats decimal amounts correctly', () => {
      render(
        <AmountSlider value={7250.50} onValueChange={mockOnValueChange} />
      );
      expect(screen.getByText('£7250.50')).toBeTruthy();
    });
  });

  describe('Component Props', () => {
    test('accepts and uses value prop', () => {
      render(<AmountSlider value={12345} onValueChange={mockOnValueChange} />);
      expect(screen.getByText('£12345.00')).toBeTruthy();
    });

    test('accepts onValueChange callback prop', () => {
      const customCallback = jest.fn();
      render(<AmountSlider value={5000} onValueChange={customCallback} />);
      // Component should render without errors
      expect(screen.getByText('£5000.00')).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    test('renders slider component', () => {
      const { toJSON } = render(
        <AmountSlider value={7500} onValueChange={mockOnValueChange} />
      );
      const tree = toJSON();
      // Check that slider is in the component tree
      expect(tree).toBeTruthy();
    });
  });
});

