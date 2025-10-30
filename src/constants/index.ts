/**
 * Application Constants
 * Contains all labels, configuration values, and constants used throughout the app
 */

// Type definitions
export interface SliderRange {
  MIN: number;
  MAX: number;
  STEP: number;
  DEFAULT: number;
}

export interface YearsSliderConfig extends SliderRange {
  TICKS: number;
}

export interface InterestRateTier {
  MIN: number;
  MAX: number;
  RATE: number;
}

export interface GradientCoords {
  x: number;
  y: number;
}

// Text Labels
export const LABELS = {
  BORROW_PREFIX: 'I want to borrow ',
  YEARS_PREFIX: 'over ',
  YEARS_SUFFIX: ' years',
  INTEREST_RATE: 'Interest rate',
  MONTHLY_REPAYMENT: 'Monthly repayment',
  BUTTON_TEXT: 'Get your quote »',
} as const;

// Currency Configuration
export const CURRENCY = {
  SYMBOL: '£',
  DECIMAL_PLACES: 2,
} as const;

// Slider Configuration
export const SLIDER_CONFIG: {
  AMOUNT: SliderRange;
  YEARS: YearsSliderConfig;
} = {
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

// Interest Rate Configuration (Dynamic based on loan amount)
export const INTEREST_RATE_TIERS: {
  TIER_1: InterestRateTier;
  TIER_2: InterestRateTier;
  TIER_3: InterestRateTier;
  TIER_4: InterestRateTier;
} = {
  TIER_1: { MIN: 1000, MAX: 4999, RATE: 5 },
  TIER_2: { MIN: 5000, MAX: 9999, RATE: 10 },
  TIER_3: { MIN: 10000, MAX: 14999, RATE: 15 },
  TIER_4: { MIN: 15000, MAX: 20000, RATE: 20 },
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
} as const;

// Gradient Configuration
export const GRADIENT: {
  COLORS: readonly [string, string];
  START: GradientCoords;
  END: GradientCoords;
} = {
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
} as const;

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
} as const;

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
} as const;
