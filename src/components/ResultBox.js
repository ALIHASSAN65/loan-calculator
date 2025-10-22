/**
 * ResultBox Component
 * Displays the calculation results (interest rate and monthly repayment)
 */

import React from 'react';
import { View, Text } from 'react-native';
import { LABELS } from '../constants';
import { formatCurrency } from '../utils/calculations';
import { resultBoxStyles } from '../styles/theme';

const ResultBox = ({ interestRate, monthlyPayment }) => {
  return (
    <View style={resultBoxStyles.container}>
      <View style={resultBoxStyles.resultItem}>
        <Text style={resultBoxStyles.resultValue}>{interestRate}%</Text>
        <Text style={resultBoxStyles.resultLabel}>{LABELS.INTEREST_RATE}</Text>
      </View>

      <View style={resultBoxStyles.resultItem}>
        <Text style={resultBoxStyles.resultValue}>
          {formatCurrency(monthlyPayment)}
        </Text>
        <Text style={resultBoxStyles.resultLabel}>
          {LABELS.MONTHLY_REPAYMENT}
        </Text>
      </View>
    </View>
  );
};

export default ResultBox;

