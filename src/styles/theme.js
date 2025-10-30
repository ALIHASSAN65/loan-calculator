/**
 * Theme styles for the application
 */

import { StyleSheet } from 'react-native';
import { COLORS, FONTS, LAYOUT, SLIDER_STYLE } from '../constants';

export const commonStyles = StyleSheet.create({
  // Layout Styles
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_BLACK,
  },
  gradientWrapper: {
    width: '100%',
    flex: 8.5,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Card Styles
  card: {
    width: LAYOUT.CARD_WIDTH,
    alignItems: 'center',
    // iOS shadow
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    // Android shadow
    elevation: 8,
    backgroundColor: COLORS.WHITE, // Required for Android elevation
    borderRadius:7,
   
  },
  cardContent: {
    backgroundColor: COLORS.WHITE,
    width: '100%',
    padding: 30,
    paddingBottom: 15,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    overflow: 'hidden',
  },
  
  // Text Styles
  labelText: {
    color: COLORS.BLACK,
    fontSize: FONTS.SIZES.REGULAR,
    fontFamily: FONTS.FAMILY,
    fontWeight: FONTS.WEIGHTS.REGULAR,
    marginBottom: 4, // Raises label text slightly above value text
  },
  labelTextWithSpacing: {
    marginBottom: 4,
    marginRight: 10,
  },
  valueText: {
    color: COLORS.MEDIUM_GRAY,
    fontSize: FONTS.SIZES.LARGE,
    fontWeight: FONTS.WEIGHTS.LIGHT,
    fontFamily: FONTS.FAMILY,
  },
  
  // Slider Styles
  slider: {
    width: LAYOUT.SLIDER_WIDTH,
    alignSelf: 'center',
    zIndex: 1,
  },
  sliderThumb: {
    height: SLIDER_STYLE.THUMB.HEIGHT,
    width: SLIDER_STYLE.THUMB.WIDTH,
    borderRadius: SLIDER_STYLE.THUMB.BORDER_RADIUS,
  },
  sliderWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  ticksContainer: {
    position: 'absolute',
    top: 12,
    width: LAYOUT.TICKS_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 0,
  },
  tick: {
    width: SLIDER_STYLE.TICK.WIDTH,
    height: SLIDER_STYLE.TICK.HEIGHT,
    backgroundColor: COLORS.SLIDER_TRACK,
    borderRadius: SLIDER_STYLE.TICK.BORDER_RADIUS,
  },
  
  // Row Layouts
  row: {
    flexDirection: 'row',
    width: LAYOUT.SLIDER_WIDTH,
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  rowCentered: {
    flexDirection: 'row',
    width: LAYOUT.SLIDER_WIDTH,
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: 10,
  },
});

export const resultBoxStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.LIGHT_GRAY,
    paddingTop: 23,
    paddingBottom: 20,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    overflow: 'hidden',
    // Android shadow
    elevation: 8,
  },
  resultItem: {
    flex: 1,
    alignItems: 'center',
  },
  resultValue: {
    color: COLORS.MEDIUM_GRAY,
    fontSize: FONTS.SIZES.XLARGE,
    fontFamily: FONTS.FAMILY,
    fontWeight: FONTS.WEIGHTS.LIGHT,
  },
  resultLabel: {
    color: COLORS.BLACK,
    fontSize: FONTS.SIZES.SMALL,
    textAlign: 'center',
    fontFamily: FONTS.FAMILY,
    fontWeight: FONTS.WEIGHTS.REGULAR,
  },
});

export const buttonStyles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 5,
    width: LAYOUT.BUTTON_WIDTH,
    height: LAYOUT.BUTTON_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: FONTS.SIZES.REGULAR,
    fontFamily: FONTS.FAMILY,
    fontWeight: FONTS.WEIGHTS.SEMIBOLD,
  },
});

