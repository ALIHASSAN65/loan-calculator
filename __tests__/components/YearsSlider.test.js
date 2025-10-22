/**
 * Unit tests for YearsSlider component
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import YearsSlider from '../../src/components/YearsSlider';

describe('YearsSlider', () => {
  test('renders correctly with default props', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <YearsSlider value={2.5} onValueChange={mockOnValueChange} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('displays whole year value correctly', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <YearsSlider value={3} onValueChange={mockOnValueChange} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    // Check for "3" and " years" separately as they're rendered as separate children
    expect(jsonString).toContain('"3"');
    expect(jsonString).toContain('" years"');
  });

  test('displays half year with ½ symbol', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <YearsSlider value={2.5} onValueChange={mockOnValueChange} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    // Check for "2 ½" and " years" separately as they're rendered as separate children
    expect(jsonString).toContain('"2 ½"');
    expect(jsonString).toContain('" years"');
  });

  test('displays "over" prefix text', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <YearsSlider value={2} onValueChange={mockOnValueChange} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    expect(jsonString).toContain('over');
  });

  test('renders ticks for visual guidance', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <YearsSlider value={2.5} onValueChange={mockOnValueChange} />
      );
    });

    const root = component.root;
    // Ticks are rendered as View elements, should have 4 ticks
    const views = root.findAllByType('View');
    
    expect(views.length).toBeGreaterThan(3);
  });

  test('renders with minimum value', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <YearsSlider value={1} onValueChange={mockOnValueChange} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('renders with maximum value', async () => {
    const mockOnValueChange = jest.fn();
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <YearsSlider value={5} onValueChange={mockOnValueChange} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });
});

