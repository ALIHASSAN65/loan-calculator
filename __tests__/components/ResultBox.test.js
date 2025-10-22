/**
 * Unit tests for ResultBox component
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ResultBox from '../../src/components/ResultBox';

describe('ResultBox', () => {
  test('renders correctly with default props', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ResultBox interestRate={10} monthlyPayment={284.88} />
      );
    });

    expect(component.toJSON()).toBeTruthy();
  });

  test('displays interest rate correctly', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ResultBox interestRate={10} monthlyPayment={284.88} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    // Check for "10" and "%" separately as they're rendered as separate children
    expect(jsonString).toContain('"10"');
    expect(jsonString).toContain('"%"');
  });

  test('displays formatted monthly payment', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ResultBox interestRate={10} monthlyPayment={284.88} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    expect(jsonString).toContain('£284.88');
  });

  test('displays interest rate label', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ResultBox interestRate={10} monthlyPayment={284.88} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    expect(jsonString).toContain('Interest rate');
  });

  test('displays monthly repayment label', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ResultBox interestRate={10} monthlyPayment={284.88} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    expect(jsonString).toContain('Monthly repayment');
  });

  test('renders with different interest rates', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ResultBox interestRate={5} monthlyPayment={100} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    // Check for "5" and "%" separately as they're rendered as separate children
    expect(jsonString).toContain('"5"');
    expect(jsonString).toContain('"%"');
  });

  test('renders with different monthly payments', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ResultBox interestRate={10} monthlyPayment={500.50} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    expect(jsonString).toContain('£500.50');
  });

  test('handles zero monthly payment', async () => {
    let component;

    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(
        <ResultBox interestRate={10} monthlyPayment={0} />
      );
    });

    const tree = component.toJSON();
    const jsonString = JSON.stringify(tree);
    
    expect(jsonString).toContain('£0.00');
  });
});

