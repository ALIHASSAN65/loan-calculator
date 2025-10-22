/**
 * Application Constants
 * Contains all labels, configuration values, and constants used throughout the app
 */

// Text Labels
export const LABELS = {
  BORROW_PREFIX: 'I want to borrow ',
  YEARS_PREFIX: 'over ',
  YEARS_SUFFIX: ' years',
  INTEREST_RATE: 'Interest rate',
  MONTHLY_REPAYMENT: 'Monthly repayment',
  BUTTON_TEXT: 'Get your quote »',
};

// Currency Configuration
export const CURRENCY = {
  SYMBOL: '£',
  DECIMAL_PLACES: 2,
};

// Slider Configuration
export const SLIDER_CONFIG = {
  AMOUNT: {
    MIN: 1000,
    MAX: 20000,
    STEP: 100,
    DEFAULT: 7500,
  },
  YEARS: {
    MIN: 1,
    MAX: 5,
    STEP: 0.5,
    DEFAULT: 2.5,
    TICKS: 4,
  },
};

// Interest Rate Configuration
export const INTEREST_RATE_CONFIG = {
  DEFAULT: 10, // Annual interest rate in percentage
};

// Color Palette
export const COLORS = {
  PRIMARY: '#f60367',
  SECONDARY: '#383b7e',
  WHITE: '#fff',
  BLACK: '#000',
  LIGHT_GRAY: '#eee',
  MEDIUM_GRAY: '#999',
  SLIDER_TRACK: '#F5D5E1',
  BACKGROUND_BLACK: '#000',
};

// Gradient Configuration
export const GRADIENT = {
  COLORS: ['#f60367', '#383b7e'],
  START: { x: 0, y: 1 },
  END: { x: 1, y: 0 },
};

// Layout Configuration
export const LAYOUT = {
  CARD_WIDTH: '85%',
  SLIDER_WIDTH: '90%',
  TICKS_WIDTH: '60%',
  BUTTON_WIDTH: '85%',
  BUTTON_HEIGHT: 65,
};

// Font Configuration
export const FONTS = {
  FAMILY: 'OpenSans-Regular',
  SIZES: {
    SMALL: 11,
    REGULAR: 15,
    LARGE: 25,
    XLARGE: 35,
  },
  WEIGHTS: {
    LIGHT: '300',
    REGULAR: '400',
    SEMIBOLD: '600',
  },
};

// Slider Styling Configuration
export const SLIDER_STYLE = {
  THUMB: {
    HEIGHT: 30,
    WIDTH: 30,
    BORDER_RADIUS: 30,
  },
  TICK: {
    WIDTH: 5,
    HEIGHT: 15,
    BORDER_RADIUS: 2,
  },
};

