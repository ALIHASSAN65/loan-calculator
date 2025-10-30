/**
 * AmountSlider Component
 * Displays and controls the loan amount slider
 */

import React from 'react';
import { View, Text } from 'react-native';
import Slider from 'react-native-sliders';
import { LABELS, SLIDER_CONFIG, COLORS, SLIDER_STYLE } from '../constants';
import { formatCurrency } from '../utils/calculations';
import { commonStyles } from '../styles/theme';

interface AmountSliderProps {
  value: number;
  onValueChange: (value: number) => void;
}

const AmountSlider: React.FC<AmountSliderProps> = ({ value, onValueChange }) => {
  return (
    <>
      <View style={commonStyles.row}>
        <Text style={commonStyles.labelText}>{LABELS.BORROW_PREFIX}</Text>
        <Text style={commonStyles.valueText}>{formatCurrency(value)}</Text>
      </View>

      <Slider
        style={commonStyles.slider}
        minimumValue={SLIDER_CONFIG.AMOUNT.MIN}
        maximumValue={SLIDER_CONFIG.AMOUNT.MAX}
        step={SLIDER_CONFIG.AMOUNT.STEP}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor={COLORS.SLIDER_TRACK}
        maximumTrackTintColor={COLORS.SLIDER_TRACK}
        thumbTintColor={COLORS.PRIMARY}
        thumbStyle={commonStyles.sliderThumb}
      />
    </>
  );
};

export default AmountSlider;
