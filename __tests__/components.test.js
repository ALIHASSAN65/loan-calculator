/**
 * Component tests
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';
import AmountSlider from '../src/components/AmountSlider';
import YearsSlider from '../src/components/YearsSlider';
import ResultBox from '../src/components/ResultBox';
import ActionButton from '../src/components/ActionButton';

describe('Component Rendering', () => {
  test('AmountSlider renders correctly', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <AmountSlider value={7500} onValueChange={mockOnValueChange} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('YearsSlider renders correctly', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <YearsSlider value={2.5} onValueChange={mockOnValueChange} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('ResultBox renders correctly', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ResultBox interestRate={10} monthlyPayment={284.88} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('ActionButton renders correctly', async () => {
    const mockOnPress = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ActionButton onPress={mockOnPress} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('ActionButton calls onPress handler', async () => {
    const mockOnPress = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ActionButton onPress={mockOnPress} />
      );
    });

    const button = component.root.findByType(TouchableOpacity);
    
    await ReactTestRenderer.act(() => {
      button.props.onPress();
    });

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});

