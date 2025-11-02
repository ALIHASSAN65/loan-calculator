/**
 * Loan Calculator App
 * Main application component for calculating loan repayments
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Components
import {
  AmountSlider,
  YearsSlider,
  ResultBox,
  ActionButton,
} from './src/components';

// Constants and utilities
import {
  SLIDER_CONFIG,
  GRADIENT,
} from './src/constants';
import { 
  calculateMonthlyPayment,
  calculateInterestRate 
} from './src/utils/calculations';
import { commonStyles } from './src/styles/theme';

const LoanCalculator: React.FC = () => {
  // State management
  const [amount, setAmount] = useState<number>(SLIDER_CONFIG.AMOUNT.DEFAULT);
  const [years, setYears] = useState<number>(SLIDER_CONFIG.YEARS.DEFAULT);

  // Calculate derived values
  const interestRate = calculateInterestRate(amount);
  const monthlyPayment = calculateMonthlyPayment(amount, interestRate, years);

  // Handler for getting a quote
  const handleGetQuote = (): void => {
    // TODO: Implement quote request logic
    console.log('Get quote clicked', {
      amount,
      years,
      interestRate,
      monthlyPayment,
    });
  };

  // Handler for amount change
  const handleAmountChange = (value: number): void => {
    setAmount(Number(value));
  };

  // Handler for years change
  const handleYearsChange = (value: number): void => {
    setYears(Number(value));
  };

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.gradientWrapper}>
        <LinearGradient
          colors={GRADIENT.COLORS}
          start={GRADIENT.START}
          end={GRADIENT.END}
          style={commonStyles.gradient}
        >
          <View style={commonStyles.card}>
            <View style={commonStyles.cardContent}>
              {/* Loan Amount Slider */}
              <AmountSlider
                value={amount}
                onValueChange={handleAmountChange}
              />

              {/* Loan Term Slider */}
              <YearsSlider
                value={years}
                onValueChange={handleYearsChange}
              />
            </View>

            {/* Results Display */}
            <ResultBox
              interestRate={interestRate}
              monthlyPayment={monthlyPayment}
            />
          </View>
        </LinearGradient>
      </View>

      {/* Call-to-Action Button */}
      <ActionButton onPress={handleGetQuote} />
    </View>
  );
};

export default LoanCalculator;

