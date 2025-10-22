/**
 * Unit tests for ActionButton component
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';
import ActionButton from '../../src/components/ActionButton';

describe('ActionButton', () => {
  test('renders correctly', async () => {
    const mockOnPress = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ActionButton onPress={mockOnPress} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('displays correct button text', async () => {
    const mockOnPress = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ActionButton onPress={mockOnPress} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    expect(jsonString).toContain('Get your quote »');
  });

  test('calls onPress when button is pressed', async () => {
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

  test('button is touchable', async () => {
    const mockOnPress = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ActionButton onPress={mockOnPress} />
      );
    });

    const button = component.root.findByType(TouchableOpacity);
    
    expect(button).toBeTruthy();
  });
});

