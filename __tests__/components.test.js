/**
 * Component tests
 * @format
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import AmountSlider from '../src/components/AmountSlider';
import YearsSlider from '../src/components/YearsSlider';
import ResultBox from '../src/components/ResultBox';
import ActionButton from '../src/components/ActionButton';

describe('Component Rendering', () => {
  test('AmountSlider renders correctly', () => {
    const mockOnValueChange = jest.fn();
    const { toJSON } = render(
      <AmountSlider value={7500} onValueChange={mockOnValueChange} />
    );

    expect(toJSON()).toBeTruthy();
  });

  test('YearsSlider renders correctly', () => {
    const mockOnValueChange = jest.fn();
    const { toJSON } = render(
      <YearsSlider value={2.5} onValueChange={mockOnValueChange} />
    );

    expect(toJSON()).toBeTruthy();
  });

  test('ResultBox renders correctly', () => {
    const { toJSON } = render(
      <ResultBox interestRate={10} monthlyPayment={284.88} />
    );

    expect(toJSON()).toBeTruthy();
  });

  test('ActionButton renders correctly', () => {
    const mockOnPress = jest.fn();
    const { toJSON } = render(
      <ActionButton onPress={mockOnPress} />
    );

    expect(toJSON()).toBeTruthy();
  });

  test('ActionButton calls onPress handler', () => {
    const mockOnPress = jest.fn();
    render(<ActionButton onPress={mockOnPress} />);

    const button = screen.getByText(/Get your quote/);
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});

