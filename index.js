/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Suppress deprecation warnings from react-native-sliders library
// The library uses componentWillMount which is deprecated but still functional
const originalWarn = console.warn;
console.warn = (...args) => {
  const warningMessage = args[0];
  if (
    typeof warningMessage === 'string' &&
    (warningMessage.includes('componentWillMount') ||
      warningMessage.includes('componentWillReceiveProps') ||
      warningMessage.includes('unsafe-component-lifecycles'))
  ) {
    return;
  }
  originalWarn(...args);
};

AppRegistry.registerComponent(appName, () => App);
