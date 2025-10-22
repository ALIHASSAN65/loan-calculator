/**
 * Unit tests for AmountSlider component
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import AmountSlider from '../../src/components/AmountSlider';

describe('AmountSlider', () => {
  test('renders correctly with default props', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <AmountSlider value={7500} onValueChange={mockOnValueChange} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('displays formatted currency value', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <AmountSlider value={10000} onValueChange={mockOnValueChange} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    expect(jsonString).toContain('£10000.00');
  });

  test('displays borrow label text', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <AmountSlider value={5000} onValueChange={mockOnValueChange} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    expect(jsonString).toContain('I want to borrow');
  });

  test('renders with minimum value', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <AmountSlider value={1000} onValueChange={mockOnValueChange} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('renders with maximum value', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <AmountSlider value={20000} onValueChange={mockOnValueChange} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });
});

