/**
 * ActionButton Component
 * Call-to-action button for getting a quote
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LABELS } from '../constants';
import { buttonStyles } from '../styles/theme';

const ActionButton = ({ onPress }) => {
  return (
    <View style={buttonStyles.container}>
      <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
        <Text style={buttonStyles.buttonText}>{LABELS.BUTTON_TEXT}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;

