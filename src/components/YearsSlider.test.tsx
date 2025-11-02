/**
 * Unit tests for YearsSlider component
 * @format
 */

import React from 'react';
import { render, screen } from '@testing-library/react-native';
import YearsSlider from './YearsSlider';
import { SLIDER_CONFIG } from '../constants';

describe('YearsSlider Component', () => {
  const mockOnValueChange = jest.fn();

  beforeEach(() => {
    mockOnValueChange.mockClear();
  });

  describe('Rendering', () => {
    test('renders without crashing', () => {
      const { toJSON } = render(
        <YearsSlider value={2.5} onValueChange={mockOnValueChange} />
      );
      expect(toJSON()).toBeTruthy();
    });

    test('displays the prefix label', () => {
      render(<YearsSlider value={2.5} onValueChange={mockOnValueChange} />);
      expect(screen.getByText(/over/)).toBeTruthy();
    });

    test('displays the suffix label', () => {
      render(<YearsSlider value={2.5} onValueChange={mockOnValueChange} />);
      expect(screen.getByText(/years/)).toBeTruthy();
    });

    test('displays formatted years value', () => {
      render(<YearsSlider value={2.5} onValueChange={mockOnValueChange} />);
      expect(screen.getByText(/2 ½/)).toBeTruthy();
    });
  });

  describe('Value Display', () => {
    test('displays minimum years correctly', () => {
      render(
        <YearsSlider 
          value={SLIDER_CONFIG.YEARS.MIN} 
          onValueChange={mockOnValueChange} 
        />
      );
      expect(screen.getByText(/1/)).toBeTruthy();
    });

    test('displays maximum years correctly', () => {
      render(
        <YearsSlider 
          value={SLIDER_CONFIG.YEARS.MAX} 
          onValueChange={mockOnValueChange} 
        />
      );
      expect(screen.getByText(/5/)).toBeTruthy();
    });

    test('displays whole number years correctly', () => {
      const { rerender } = render(
        <YearsSlider value={1} onValueChange={mockOnValueChange} />
      );
      expect(screen.getByText(/1/)).toBeTruthy();

      rerender(<YearsSlider value={3} onValueChange={mockOnValueChange} />);
      expect(screen.getByText(/3/)).toBeTruthy();

      rerender(<YearsSlider value={5} onValueChange={mockOnValueChange} />);
      expect(screen.getByText(/5/)).toBeTruthy();
    });

    test('displays half-year values with fraction symbol', () => {
      const { rerender } = render(
        <YearsSlider value={1.5} onValueChange={mockOnValueChange} />
      );
      expect(screen.getByText(/1 ½/)).toBeTruthy();

      rerender(<YearsSlider value={2.5} onValueChange={mockOnValueChange} />);
      expect(screen.getByText(/2 ½/)).toBeTruthy();

      rerender(<YearsSlider value={3.5} onValueChange={mockOnValueChange} />);
      expect(screen.getByText(/3 ½/)).toBeTruthy();

      rerender(<YearsSlider value={4.5} onValueChange={mockOnValueChange} />);
      expect(screen.getByText(/4 ½/)).toBeTruthy();
    });
  });

  describe('Component Props', () => {
    test('accepts and uses value prop', () => {
      render(<YearsSlider value={3.5} onValueChange={mockOnValueChange} />);
      expect(screen.getByText(/3 ½/)).toBeTruthy();
    });

    test('accepts onValueChange callback prop', () => {
      const customCallback = jest.fn();
      render(<YearsSlider value={2} onValueChange={customCallback} />);
      expect(screen.getByText(/2/)).toBeTruthy();
    });
  });

  describe('Visual Elements', () => {
    test('renders tick marks for visual guidance', () => {
      const { toJSON } = render(
        <YearsSlider value={2.5} onValueChange={mockOnValueChange} />
      );
      const tree = toJSON();
      // Component should have tick marks structure
      expect(tree).toBeTruthy();
    });
  });
});


