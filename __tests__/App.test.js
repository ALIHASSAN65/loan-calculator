/**
 * Integration tests for main App component
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

describe('LoanCalculator App', () => {
  test('renders correctly', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('renders with default state values', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);

    // Check default amount (£7,500)
    expect(jsonString).toContain('£7500.00');
    
    // Check default years (2.5 years) - rendered as separate children
    expect(jsonString).toContain('"2 ½"');
    expect(jsonString).toContain('" years"');
    
    // Check interest rate (10%) - rendered as separate children
    expect(jsonString).toContain('"10"');
    expect(jsonString).toContain('"%"');
  });

  test('displays all main sections', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);

    // Check all labels are present
    expect(jsonString).toContain('I want to borrow');
    expect(jsonString).toContain('over');
    expect(jsonString).toContain('Interest rate');
    expect(jsonString).toContain('Monthly repayment');
    expect(jsonString).toContain('Get your quote »');
  });

  test('calculates monthly payment on mount', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);

    // Default calculation: £7,500 @ 2.5 years @ 10% = ~£283.59
    expect(jsonString).toContain('£283.');
  });

  test('contains LinearGradient component', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    const root = component.root;
    const gradients = root.findAllByType('LinearGradient');

    expect(gradients.length).toBeGreaterThan(0);
  });

  test('contains AmountSlider component', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);

    expect(jsonString).toContain('I want to borrow');
  });

  test('contains YearsSlider component', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);

    expect(jsonString).toContain('over');
    expect(jsonString).toContain('years');
  });

  test('contains ResultBox component', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);

    expect(jsonString).toContain('Interest rate');
    expect(jsonString).toContain('Monthly repayment');
  });

  test('contains ActionButton component', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);

    expect(jsonString).toContain('Get your quote »');
  });

  test('app structure is consistent', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    // Should render without throwing
    expect(component.toJSON()).toMatchSnapshot();
  });
});

