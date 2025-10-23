/**
 * Utility functions for loan calculations and formatting
 */

import { CURRENCY } from '../constants';

/**
 * Calculate interest rate based on loan amount
 * @param amount - Loan amount in pounds
 * @returns Interest rate percentage
 */
export const calculateInterestRate = (amount: number): number => {
  if (amount >= 1000 && amount <= 4999) return 5;
  if (amount >= 5000 && amount <= 9999) return 10;
  if (amount >= 10000 && amount <= 14999) return 15;
  if (amount >= 15000 && amount <= 20000) return 20;
  return 10; // Default fallback
};

/**
 * Calculate monthly loan payment using amortization formula
 * @param principal - Loan amount
 * @param annualRate - Annual interest rate (as percentage)
 * @param years - Loan term in years
 * @returns Monthly payment amount
 */
export const calculateMonthlyPayment = (
  principal: number,
  annualRate: number,
  years: number
): number => {
  const r = annualRate / 100 / 12; // Monthly interest rate
  const n = years * 12; // Total number of payments
  const M = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  
  return isFinite(M) ? M : 0;
};

/**
 * Format years display with half year symbol
 * @param value - Years value
 * @returns Formatted years string
 */
export const formatYears = (value: number): string => {
  if (value % 1 === 0.5) {
    return `${Math.floor(value)} ½`;
  }
  return value.toString();
};

/**
 * Format currency value
 * @param value - Numeric value
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted currency string
 */
export const formatCurrency = (
  value: number,
  decimals: number = CURRENCY.DECIMAL_PLACES
): string => {
  return `${CURRENCY.SYMBOL}${value.toFixed(decimals)}`;
};
