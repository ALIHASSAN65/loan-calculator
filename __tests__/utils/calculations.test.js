/**
 * Unit tests for calculation utilities
 * @format
 */

import {
  calculateMonthlyPayment,
  calculateInterestRate,
  formatYears,
  formatCurrency,
} from '../../src/utils/calculations';

describe('calculateInterestRate', () => {
  test('returns correct rate for each tier', () => {
    expect(calculateInterestRate(2500)).toBe(5);   // £1,000-£4,999
    expect(calculateInterestRate(7500)).toBe(10);  // £5,000-£9,999
    expect(calculateInterestRate(12000)).toBe(15); // £10,000-£14,999
    expect(calculateInterestRate(17500)).toBe(20); // £15,000-£20,000
  });
});

describe('calculateMonthlyPayment', () => {
  test('calculates correct monthly payment', () => {
    const result = calculateMonthlyPayment(7500, 10, 2.5);
    expect(result).toBeCloseTo(283.59, 1);
  });

  test('returns 0 for invalid inputs', () => {
    expect(calculateMonthlyPayment(10000, 10, 0)).toBe(0);
  });
});

describe('formatYears', () => {
  test('formats years in decimal format', () => {
    expect(formatYears(2)).toBe('2');
    expect(formatYears(2.5)).toBe('2.5');
  });
});

describe('formatCurrency', () => {
  test('formats currency with £ symbol', () => {
    expect(formatCurrency(1000)).toBe('£1000.00');
    expect(formatCurrency(284.88)).toBe('£284.88');
  });
});
