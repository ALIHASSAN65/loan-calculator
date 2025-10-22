/**
 * Utility functions for loan calculations and formatting
 */

import { CURRENCY } from '../constants';

/**
 * Calculate interest rate based on loan amount
 * @param {number} amount - Loan amount
 * @returns {number} Interest rate percentage
 */
export const calculateInterestRate = (amount) => {
  if (amount >= 1000 && amount <= 4999) return 5;
  if (amount >= 5000 && amount <= 9999) return 10;
  if (amount >= 10000 && amount <= 14999) return 15;
  if (amount >= 15000 && amount <= 20000) return 20;
  return 10; // Default fallback
};

/**
 * Calculate monthly loan payment using amortization formula
 * @param {number} principal - Loan amount
 * @param {number} annualRate - Annual interest rate (as percentage)
 * @param {number} years - Loan term in years
 * @returns {number} Monthly payment amount
 */
export const calculateMonthlyPayment = (principal, annualRate, years) => {
  const r = annualRate / 100 / 12; // Monthly interest rate
  const n = years * 12; // Total number of payments
  const M = principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  
  return isFinite(M) ? M : 0;
};

/**
 * Format years display with half year symbol
 * @param {number} value - Years value
 * @returns {string} Formatted years string
 */
export const formatYears = (value) => {
  if (value % 1 === 0.5) {
    return `${Math.floor(value)} ½`;
  }
  return value.toString();
};

/**
 * Format currency value
 * @param {number} value - Numeric value
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value, decimals = CURRENCY.DECIMAL_PLACES) => {
  return `${CURRENCY.SYMBOL}${value.toFixed(decimals)}`;
};

