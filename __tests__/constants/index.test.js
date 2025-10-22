/**
 * Unit tests for constants
 * @format
 */

import {
  LABELS,
  CURRENCY,
  SLIDER_CONFIG,
  INTEREST_RATE_TIERS,
  COLORS,
  GRADIENT,
  LAYOUT,
  FONTS,
  SLIDER_STYLE,
} from '../../src/constants';

describe('Constants', () => {
  describe('LABELS', () => {
    test('contains all required labels', () => {
      expect(LABELS.BORROW_PREFIX).toBeDefined();
      expect(LABELS.YEARS_PREFIX).toBeDefined();
      expect(LABELS.YEARS_SUFFIX).toBeDefined();
      expect(LABELS.INTEREST_RATE).toBeDefined();
      expect(LABELS.MONTHLY_REPAYMENT).toBeDefined();
      expect(LABELS.BUTTON_TEXT).toBeDefined();
    });

    test('labels have correct values', () => {
      expect(LABELS.BORROW_PREFIX).toBe('I want to borrow ');
      expect(LABELS.YEARS_PREFIX).toBe('over ');
      expect(LABELS.YEARS_SUFFIX).toBe(' years');
      expect(LABELS.INTEREST_RATE).toBe('Interest rate');
      expect(LABELS.MONTHLY_REPAYMENT).toBe('Monthly repayment');
      expect(LABELS.BUTTON_TEXT).toBe('Get your quote »');
    });
  });

  describe('CURRENCY', () => {
    test('has correct symbol', () => {
      expect(CURRENCY.SYMBOL).toBe('£');
    });

    test('has correct decimal places', () => {
      expect(CURRENCY.DECIMAL_PLACES).toBe(2);
    });
  });

  describe('SLIDER_CONFIG', () => {
    test('AMOUNT has correct configuration', () => {
      expect(SLIDER_CONFIG.AMOUNT.MIN).toBe(1000);
      expect(SLIDER_CONFIG.AMOUNT.MAX).toBe(20000);
      expect(SLIDER_CONFIG.AMOUNT.STEP).toBe(100);
      expect(SLIDER_CONFIG.AMOUNT.DEFAULT).toBe(7500);
    });

    test('YEARS has correct configuration', () => {
      expect(SLIDER_CONFIG.YEARS.MIN).toBe(1);
      expect(SLIDER_CONFIG.YEARS.MAX).toBe(5);
      expect(SLIDER_CONFIG.YEARS.STEP).toBe(0.5);
      expect(SLIDER_CONFIG.YEARS.DEFAULT).toBe(2.5);
      expect(SLIDER_CONFIG.YEARS.TICKS).toBe(4);
    });

    test('default values are within ranges', () => {
      expect(SLIDER_CONFIG.AMOUNT.DEFAULT).toBeGreaterThanOrEqual(SLIDER_CONFIG.AMOUNT.MIN);
      expect(SLIDER_CONFIG.AMOUNT.DEFAULT).toBeLessThanOrEqual(SLIDER_CONFIG.AMOUNT.MAX);
      
      expect(SLIDER_CONFIG.YEARS.DEFAULT).toBeGreaterThanOrEqual(SLIDER_CONFIG.YEARS.MIN);
      expect(SLIDER_CONFIG.YEARS.DEFAULT).toBeLessThanOrEqual(SLIDER_CONFIG.YEARS.MAX);
    });
  });

  describe('INTEREST_RATE_TIERS', () => {
    test('has all tiers defined', () => {
      expect(INTEREST_RATE_TIERS.TIER_1).toBeDefined();
      expect(INTEREST_RATE_TIERS.TIER_2).toBeDefined();
      expect(INTEREST_RATE_TIERS.TIER_3).toBeDefined();
      expect(INTEREST_RATE_TIERS.TIER_4).toBeDefined();
    });

    test('tier 1: £1,000-£4,999 at 5%', () => {
      expect(INTEREST_RATE_TIERS.TIER_1.MIN).toBe(1000);
      expect(INTEREST_RATE_TIERS.TIER_1.MAX).toBe(4999);
      expect(INTEREST_RATE_TIERS.TIER_1.RATE).toBe(5);
    });

    test('tier 2: £5,000-£9,999 at 10%', () => {
      expect(INTEREST_RATE_TIERS.TIER_2.MIN).toBe(5000);
      expect(INTEREST_RATE_TIERS.TIER_2.MAX).toBe(9999);
      expect(INTEREST_RATE_TIERS.TIER_2.RATE).toBe(10);
    });

    test('tier 3: £10,000-£14,999 at 15%', () => {
      expect(INTEREST_RATE_TIERS.TIER_3.MIN).toBe(10000);
      expect(INTEREST_RATE_TIERS.TIER_3.MAX).toBe(14999);
      expect(INTEREST_RATE_TIERS.TIER_3.RATE).toBe(15);
    });

    test('tier 4: £15,000-£20,000 at 20%', () => {
      expect(INTEREST_RATE_TIERS.TIER_4.MIN).toBe(15000);
      expect(INTEREST_RATE_TIERS.TIER_4.MAX).toBe(20000);
      expect(INTEREST_RATE_TIERS.TIER_4.RATE).toBe(20);
    });

    test('tiers have no gaps', () => {
      expect(INTEREST_RATE_TIERS.TIER_2.MIN).toBe(INTEREST_RATE_TIERS.TIER_1.MAX + 1);
      expect(INTEREST_RATE_TIERS.TIER_3.MIN).toBe(INTEREST_RATE_TIERS.TIER_2.MAX + 1);
      expect(INTEREST_RATE_TIERS.TIER_4.MIN).toBe(INTEREST_RATE_TIERS.TIER_3.MAX + 1);
    });
  });

  describe('COLORS', () => {
    test('contains all required colors', () => {
      expect(COLORS.PRIMARY).toBe('#f60367');
      expect(COLORS.SECONDARY).toBe('#383b7e');
      expect(COLORS.WHITE).toBe('#fff');
      expect(COLORS.BLACK).toBe('#000');
      expect(COLORS.LIGHT_GRAY).toBe('#eee');
      expect(COLORS.MEDIUM_GRAY).toBe('#999');
      expect(COLORS.SLIDER_TRACK).toBe('#F5D5E1');
      expect(COLORS.BACKGROUND_BLACK).toBe('#000');
    });

    test('colors are valid hex codes', () => {
      const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
      
      expect(COLORS.PRIMARY).toMatch(hexRegex);
      expect(COLORS.SECONDARY).toMatch(hexRegex);
      expect(COLORS.WHITE).toMatch(hexRegex);
    });
  });

  describe('GRADIENT', () => {
    test('has correct gradient colors', () => {
      expect(GRADIENT.COLORS).toEqual(['#f60367', '#383b7e']);
    });

    test('has correct gradient positions', () => {
      expect(GRADIENT.START).toEqual({ x: 0, y: 1 });
      expect(GRADIENT.END).toEqual({ x: 1, y: 0 });
    });
  });

  describe('LAYOUT', () => {
    test('contains all layout values', () => {
      expect(LAYOUT.CARD_WIDTH).toBe('85%');
      expect(LAYOUT.SLIDER_WIDTH).toBe('90%');
      expect(LAYOUT.TICKS_WIDTH).toBe('60%');
      expect(LAYOUT.BUTTON_WIDTH).toBe('85%');
      expect(LAYOUT.BUTTON_HEIGHT).toBe(65);
    });
  });

  describe('FONTS', () => {
    test('has correct font family', () => {
      expect(FONTS.FAMILY).toBe('OpenSans-Regular');
    });

    test('has all font sizes', () => {
      expect(FONTS.SIZES.SMALL).toBe(11);
      expect(FONTS.SIZES.REGULAR).toBe(15);
      expect(FONTS.SIZES.LARGE).toBe(25);
      expect(FONTS.SIZES.XLARGE).toBe(35);
    });

    test('has all font weights', () => {
      expect(FONTS.WEIGHTS.LIGHT).toBe('300');
      expect(FONTS.WEIGHTS.REGULAR).toBe('400');
      expect(FONTS.WEIGHTS.SEMIBOLD).toBe('600');
    });
  });

  describe('SLIDER_STYLE', () => {
    test('has correct thumb dimensions', () => {
      expect(SLIDER_STYLE.THUMB.HEIGHT).toBe(30);
      expect(SLIDER_STYLE.THUMB.WIDTH).toBe(30);
      expect(SLIDER_STYLE.THUMB.BORDER_RADIUS).toBe(30);
    });

    test('has correct tick dimensions', () => {
      expect(SLIDER_STYLE.TICK.WIDTH).toBe(5);
      expect(SLIDER_STYLE.TICK.HEIGHT).toBe(15);
      expect(SLIDER_STYLE.TICK.BORDER_RADIUS).toBe(2);
    });
  });
});

