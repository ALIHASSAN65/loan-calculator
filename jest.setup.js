/**
 * Jest setup file
 * Mock external dependencies that don't work well with Jest
 */

// Mock react-native-linear-gradient
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

// Mock react-native-sliders
jest.mock('react-native-sliders', () => {
  const React = require('react');
  return React.forwardRef((props, ref) => {
    const { View } = require('react-native');
    return React.createElement(View, { ...props, ref });
  });
});

// Suppress console warnings from deprecated lifecycle methods in react-native-sliders
const originalWarn = console.warn;
console.warn = (...args) => {
  const warningMessage = args[0];
  if (
    typeof warningMessage === 'string' &&
    (warningMessage.includes('componentWillMount') ||
      warningMessage.includes('componentWillReceiveProps'))
  ) {
    return;
  }
  originalWarn(...args);
};

