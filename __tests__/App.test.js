/**
 * Integration test for main App component
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

describe('Loan Calculator App', () => {
  test('renders without crashing', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('displays default values correctly', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);

    // Check default amount (£7,500)
    expect(jsonString).toContain('£7500.00');
    
    // Check default years (2.5 years)
    expect(jsonString).toContain('"2 ½"');
    
    // Check labels present
    expect(jsonString).toContain('I want to borrow');
    expect(jsonString).toContain('Interest rate');
    expect(jsonString).toContain('Monthly repayment');
    expect(jsonString).toContain('Get your quote');
  });

  test('calculates monthly payment correctly', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<App />);
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);

    // Default: £7,500 @ 2.5 years @ 10% = ~£283.59
    expect(jsonString).toContain('£283.');
  });
});
