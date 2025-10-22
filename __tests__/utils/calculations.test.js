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
  test('returns 5% for amounts £1,000-£4,999', () => {
    expect(calculateInterestRate(1000)).toBe(5);
    expect(calculateInterestRate(2500)).toBe(5);
    expect(calculateInterestRate(4999)).toBe(5);
  });

  test('returns 10% for amounts £5,000-£9,999', () => {
    expect(calculateInterestRate(5000)).toBe(10);
    expect(calculateInterestRate(7500)).toBe(10);
    expect(calculateInterestRate(9999)).toBe(10);
  });

  test('returns 15% for amounts £10,000-£14,999', () => {
    expect(calculateInterestRate(10000)).toBe(15);
    expect(calculateInterestRate(12000)).toBe(15);
    expect(calculateInterestRate(14999)).toBe(15);
  });

  test('returns 20% for amounts £15,000-£20,000', () => {
    expect(calculateInterestRate(15000)).toBe(20);
    expect(calculateInterestRate(17500)).toBe(20);
    expect(calculateInterestRate(20000)).toBe(20);
  });

  test('returns default 10% for edge cases', () => {
    expect(calculateInterestRate(999)).toBe(10);
    expect(calculateInterestRate(20001)).toBe(10);
  });
});

describe('calculateMonthlyPayment', () => {
  test('calculates correct monthly payment for standard loan', () => {
    const principal = 7500;
    const annualRate = 10;
    const years = 2.5;
    const result = calculateMonthlyPayment(principal, annualRate, years);
    
    // Expected: ~£283.59/month
    expect(result).toBeCloseTo(283.59, 1);
  });

  test('calculates correct monthly payment for 1 year loan', () => {
    const principal = 1000;
    const annualRate = 10;
    const years = 1;
    const result = calculateMonthlyPayment(principal, annualRate, years);
    
    // Expected: ~£87.92/month
    expect(result).toBeCloseTo(87.92, 1);
  });

  test('calculates correct monthly payment for 5 year loan', () => {
    const principal = 20000;
    const annualRate = 10;
    const years = 5;
    const result = calculateMonthlyPayment(principal, annualRate, years);
    
    // Expected: ~£424.94/month
    expect(result).toBeCloseTo(424.94, 1);
  });

  test('calculates correct monthly payment for 3 year loan', () => {
    const principal = 10000;
    const annualRate = 10;
    const years = 3;
    const result = calculateMonthlyPayment(principal, annualRate, years);
    
    // Expected: ~£322.67/month
    expect(result).toBeCloseTo(322.67, 1);
  });

  test('returns 0 for invalid calculations (0 years)', () => {
    const result = calculateMonthlyPayment(10000, 10, 0);
    expect(result).toBe(0);
  });

  test('handles minimum loan amount', () => {
    const principal = 1000;
    const annualRate = 10;
    const years = 1;
    const result = calculateMonthlyPayment(principal, annualRate, years);
    
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(principal);
  });

  test('handles maximum loan amount', () => {
    const principal = 20000;
    const annualRate = 10;
    const years = 5;
    const result = calculateMonthlyPayment(principal, annualRate, years);
    
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(principal / 12);
  });

  test('monthly payment increases with higher principal', () => {
    const payment1 = calculateMonthlyPayment(5000, 10, 2);
    const payment2 = calculateMonthlyPayment(10000, 10, 2);
    
    expect(payment2).toBeGreaterThan(payment1);
    expect(payment2).toBeCloseTo(payment1 * 2, 0);
  });

  test('monthly payment decreases with longer term', () => {
    const payment1 = calculateMonthlyPayment(10000, 10, 2);
    const payment2 = calculateMonthlyPayment(10000, 10, 5);
    
    expect(payment1).toBeGreaterThan(payment2);
  });
});

describe('formatYears', () => {
  test('formats whole numbers correctly', () => {
    expect(formatYears(1)).toBe('1');
    expect(formatYears(2)).toBe('2');
    expect(formatYears(3)).toBe('3');
    expect(formatYears(4)).toBe('4');
    expect(formatYears(5)).toBe('5');
  });

  test('formats half years with ½ symbol', () => {
    expect(formatYears(1.5)).toBe('1 ½');
    expect(formatYears(2.5)).toBe('2 ½');
    expect(formatYears(3.5)).toBe('3 ½');
    expect(formatYears(4.5)).toBe('4 ½');
  });

  test('handles edge cases', () => {
    expect(formatYears(0.5)).toBe('0 ½');
    expect(formatYears(10)).toBe('10');
    expect(formatYears(10.5)).toBe('10 ½');
  });
});

describe('formatCurrency', () => {
  test('formats currency with default decimal places', () => {
    expect(formatCurrency(1000)).toBe('£1000.00');
    expect(formatCurrency(7500)).toBe('£7500.00');
    expect(formatCurrency(20000)).toBe('£20000.00');
  });

  test('formats currency with decimal values', () => {
    expect(formatCurrency(284.88)).toBe('£284.88');
    expect(formatCurrency(322.67)).toBe('£322.67');
    expect(formatCurrency(424.94)).toBe('£424.94');
  });

  test('formats currency with custom decimal places', () => {
    expect(formatCurrency(1000.123, 0)).toBe('£1000');
    expect(formatCurrency(1000.123, 1)).toBe('£1000.1');
    expect(formatCurrency(1000.123, 3)).toBe('£1000.123');
  });

  test('handles zero and negative values', () => {
    expect(formatCurrency(0)).toBe('£0.00');
    expect(formatCurrency(-100)).toBe('£-100.00');
  });

  test('rounds decimal places correctly', () => {
    expect(formatCurrency(10.125)).toBe('£10.13');
    expect(formatCurrency(10.124)).toBe('£10.12');
  });
});

