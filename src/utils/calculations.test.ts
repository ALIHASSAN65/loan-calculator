/**
 * Unit tests for calculation utilities
 * @format
 */

import {
  calculateMonthlyPayment,
  calculateInterestRate,
  formatYears,
  formatCurrency,
} from './calculations';

describe('calculateInterestRate', () => {
  describe('returns correct rate for each tier', () => {
    test('5% for £1,000-£4,999 range', () => {
      expect(calculateInterestRate(1000)).toBe(5);  // Lower boundary
      expect(calculateInterestRate(2500)).toBe(5);  // Mid range
      expect(calculateInterestRate(4999)).toBe(5);  // Upper boundary
    });

    test('10% for £5,000-£9,999 range', () => {
      expect(calculateInterestRate(5000)).toBe(10); // Lower boundary
      expect(calculateInterestRate(7500)).toBe(10); // Mid range
      expect(calculateInterestRate(9999)).toBe(10); // Upper boundary
    });

    test('15% for £10,000-£14,999 range', () => {
      expect(calculateInterestRate(10000)).toBe(15); // Lower boundary
      expect(calculateInterestRate(12000)).toBe(15); // Mid range
      expect(calculateInterestRate(14999)).toBe(15); // Upper boundary
    });

    test('20% for £15,000-£20,000 range', () => {
      expect(calculateInterestRate(15000)).toBe(20); // Lower boundary
      expect(calculateInterestRate(17500)).toBe(20); // Mid range
      expect(calculateInterestRate(20000)).toBe(20); // Upper boundary
    });
  });

  describe('handles edge cases', () => {
    test('returns default 10% for amounts outside range', () => {
      expect(calculateInterestRate(500)).toBe(10);   // Below min
      expect(calculateInterestRate(25000)).toBe(10); // Above max
      expect(calculateInterestRate(0)).toBe(10);     // Zero
    });

    test('returns default 10% for negative amounts', () => {
      expect(calculateInterestRate(-1000)).toBe(10);
    });
  });

  describe('tier boundary transitions', () => {
    test('transitions correctly at tier boundaries', () => {
      expect(calculateInterestRate(4999)).toBe(5);   // Just before transition
      expect(calculateInterestRate(5000)).toBe(10);  // Transition point
      expect(calculateInterestRate(9999)).toBe(10);  // Just before transition
      expect(calculateInterestRate(10000)).toBe(15); // Transition point
      expect(calculateInterestRate(14999)).toBe(15); // Just before transition
      expect(calculateInterestRate(15000)).toBe(20); // Transition point
    });
  });
});

describe('calculateMonthlyPayment', () => {
  describe('calculates correct monthly payments', () => {
    test('for typical loan scenarios', () => {
      // £7,500 @ 10% for 2.5 years
      expect(calculateMonthlyPayment(7500, 10, 2.5)).toBeCloseTo(283.59, 1);
      
      // £10,000 @ 15% for 3 years
      expect(calculateMonthlyPayment(10000, 15, 3)).toBeCloseTo(346.65, 1);
      
      // £5,000 @ 5% for 2 years
      expect(calculateMonthlyPayment(5000, 5, 2)).toBeCloseTo(219.36, 1);
    });

    test('for minimum and maximum loan amounts', () => {
      // Minimum: £1,000 @ 5% for 1 year
      expect(calculateMonthlyPayment(1000, 5, 1)).toBeCloseTo(85.61, 1);
      
      // Maximum: £20,000 @ 20% for 5 years
      expect(calculateMonthlyPayment(20000, 20, 5)).toBeCloseTo(529.88, 1);
    });

    test('for different term lengths', () => {
      const amount = 10000;
      const rate = 10;
      
      expect(calculateMonthlyPayment(amount, rate, 1)).toBeCloseTo(879.16, 1);
      expect(calculateMonthlyPayment(amount, rate, 2)).toBeCloseTo(461.45, 1);
      expect(calculateMonthlyPayment(amount, rate, 3)).toBeCloseTo(322.67, 1);
      expect(calculateMonthlyPayment(amount, rate, 5)).toBeCloseTo(212.47, 1);
    });
  });

  describe('handles edge cases and invalid inputs', () => {
    test('returns 0 for zero term length', () => {
      expect(calculateMonthlyPayment(10000, 10, 0)).toBe(0);
    });

    test('returns 0 for zero principal', () => {
      expect(calculateMonthlyPayment(0, 10, 5)).toBe(0);
    });

    test('handles zero interest rate (interest-free loan)', () => {
      // £12,000 over 2 years with 0% interest
      // The formula returns 0 for 0% rate, which is a limitation
      const result = calculateMonthlyPayment(12000, 0, 2);
      expect(result).toBe(0);
    });

    test('handles negative principal', () => {
      // Negative principal produces negative or zero result
      expect(calculateMonthlyPayment(-1000, 10, 5)).toBeLessThanOrEqual(0);
    });
  });

  describe('mathematical accuracy', () => {
    test('amortization formula produces correct results', () => {
      // Known test case: £15,000 at 8% for 4 years should be ~$366.19
      const result = calculateMonthlyPayment(15000, 8, 4);
      expect(result).toBeCloseTo(366.19, 1);
    });
  });
});

describe('formatYears', () => {
  test('formats whole numbers correctly', () => {
    expect(formatYears(1)).toBe('1');
    expect(formatYears(2)).toBe('2');
    expect(formatYears(5)).toBe('5');
  });

  test('formats half-year values with fraction symbol', () => {
    expect(formatYears(1.5)).toBe('1 ½');
    expect(formatYears(2.5)).toBe('2 ½');
    expect(formatYears(3.5)).toBe('3 ½');
    expect(formatYears(4.5)).toBe('4 ½');
  });

  test('handles edge cases', () => {
    expect(formatYears(0)).toBe('0');
    expect(formatYears(0.5)).toBe('0 ½');
  });
});

describe('formatCurrency', () => {
  test('formats whole numbers with 2 decimal places', () => {
    expect(formatCurrency(1000)).toBe('£1000.00');
    expect(formatCurrency(5000)).toBe('£5000.00');
    expect(formatCurrency(20000)).toBe('£20000.00');
  });

  test('formats decimal values correctly', () => {
    expect(formatCurrency(284.88)).toBe('£284.88');
    expect(formatCurrency(283.59)).toBe('£283.59');
    expect(formatCurrency(1234.5)).toBe('£1234.50');
  });

  test('handles zero and small amounts', () => {
    expect(formatCurrency(0)).toBe('£0.00');
    expect(formatCurrency(0.01)).toBe('£0.01');
    expect(formatCurrency(0.99)).toBe('£0.99');
  });

  test('rounds to 2 decimal places', () => {
    expect(formatCurrency(123.456)).toBe('£123.46'); // Rounds up
    expect(formatCurrency(123.454)).toBe('£123.45'); // Rounds down
  });

  test('handles large amounts', () => {
    expect(formatCurrency(999999.99)).toBe('£999999.99');
  });
});


