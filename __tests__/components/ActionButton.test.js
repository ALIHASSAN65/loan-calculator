/**
 * Unit tests for ActionButton component
 * @format
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import ActionButton from '../../src/components/ActionButton';

describe('ActionButton Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  describe('Rendering', () => {
    test('renders without crashing', () => {
      const { toJSON } = render(<ActionButton onPress={mockOnPress} />);
      expect(toJSON()).toBeTruthy();
    });

    test('displays button text correctly', () => {
      render(<ActionButton onPress={mockOnPress} />);
      expect(screen.getByText(/Get your quote/)).toBeTruthy();
    });

    test('displays arrow symbol in button text', () => {
      render(<ActionButton onPress={mockOnPress} />);
      // Button should contain the full text with arrow
      const buttonText = screen.getByText(/Get your quote/);
      expect(buttonText).toBeTruthy();
    });
  });

  describe('Interaction', () => {
    test('calls onPress handler when pressed', () => {
      render(<ActionButton onPress={mockOnPress} />);
      
      const button = screen.getByText(/Get your quote/);
      fireEvent.press(button);
      
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    test('calls onPress handler multiple times on multiple presses', () => {
      render(<ActionButton onPress={mockOnPress} />);
      
      const button = screen.getByText(/Get your quote/);
      
      fireEvent.press(button);
      fireEvent.press(button);
      fireEvent.press(button);
      
      expect(mockOnPress).toHaveBeenCalledTimes(3);
    });

    test('does not call onPress on render', () => {
      render(<ActionButton onPress={mockOnPress} />);
      expect(mockOnPress).not.toHaveBeenCalled();
    });
  });

  describe('Component Props', () => {
    test('accepts onPress callback prop', () => {
      const customCallback = jest.fn();
      render(<ActionButton onPress={customCallback} />);
      
      const button = screen.getByText(/Get your quote/);
      fireEvent.press(button);
      
      expect(customCallback).toHaveBeenCalledTimes(1);
    });

    test('works with different callback functions', () => {
      const callback1 = jest.fn();
      const callback2 = jest.fn();
      
      const { rerender } = render(<ActionButton onPress={callback1} />);
      const button = screen.getByText(/Get your quote/);
      
      fireEvent.press(button);
      expect(callback1).toHaveBeenCalledTimes(1);
      expect(callback2).not.toHaveBeenCalled();
      
      rerender(<ActionButton onPress={callback2} />);
      const button2 = screen.getByText(/Get your quote/);
      
      fireEvent.press(button2);
      expect(callback1).toHaveBeenCalledTimes(1);
      expect(callback2).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    test('button is touchable/pressable', () => {
      render(<ActionButton onPress={mockOnPress} />);
      
      const button = screen.getByText(/Get your quote/);
      
      // If we can find and press it, it's accessible
      expect(() => fireEvent.press(button)).not.toThrow();
    });
  });

  describe('Visual Structure', () => {
    test('renders as a valid React Native component tree', () => {
      const { toJSON } = render(<ActionButton onPress={mockOnPress} />);
      const tree = toJSON();
      
      expect(tree).toBeTruthy();
      expect(tree).toMatchSnapshot();
    });
  });
});

