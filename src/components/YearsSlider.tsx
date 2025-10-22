/**
 * YearsSlider Component
 * Displays and controls the loan term (years) slider with intermediate ticks
 */

import React from 'react';
import { View, Text } from 'react-native';
import Slider from 'react-native-sliders';
import { LABELS, SLIDER_CONFIG, COLORS, SLIDER_STYLE } from '../constants';
import { formatYears } from '../utils/calculations';
import { commonStyles } from '../styles/theme';

interface YearsSliderProps {
  value: number;
  onValueChange: (value: number) => void;
}

const YearsSlider: React.FC<YearsSliderProps> = ({ value, onValueChange }) => {
  // Render intermediate ticks for visual guidance
  const renderTicks = (steps: number) => (
    Array.from({ length: steps }, (_, i) => (
      <View key={i} style={commonStyles.tick} />
    ))
  );

  return (
    <>
      <View style={commonStyles.rowCentered}>
        <Text style={[commonStyles.labelText, { marginRight: 10 }]}>
          {LABELS.YEARS_PREFIX}
        </Text>
        <Text style={commonStyles.valueText}>
          {formatYears(value)}{LABELS.YEARS_SUFFIX}
        </Text>
      </View>

      <View style={commonStyles.sliderWrapper}>
        <View style={commonStyles.ticksContainer}>
          {renderTicks(SLIDER_CONFIG.YEARS.TICKS)}
        </View>
        <Slider
          style={commonStyles.slider}
          minimumValue={SLIDER_CONFIG.YEARS.MIN}
          maximumValue={SLIDER_CONFIG.YEARS.MAX}
          step={SLIDER_CONFIG.YEARS.STEP}
          value={value}
          onValueChange={onValueChange}
          minimumTrackTintColor={COLORS.SLIDER_TRACK}
          maximumTrackTintColor={COLORS.SLIDER_TRACK}
          thumbTintColor={COLORS.PRIMARY}
          thumbStyle={{
            height: SLIDER_STYLE.THUMB.HEIGHT,
            width: SLIDER_STYLE.THUMB.WIDTH,
            borderRadius: SLIDER_STYLE.THUMB.BORDER_RADIUS,
          }}
        />
      </View>
    </>
  );
};

export default YearsSlider;
