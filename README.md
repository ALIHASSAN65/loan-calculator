# Lendable Loan Calculator

A React Native loan calculator app that calculates monthly repayments based on loan amount, term, and dynamic interest rates.

---

## Features

- **Loan Amount Slider**: £1,000 - £20,000 in £100 increments
- **Loan Term Slider**: 1 - 5 years in 6-month steps (displays as 2½ years, etc.)
- **Dynamic Interest Rates**: Automatically adjusts based on loan amount
- **Monthly Repayment Calculation**: Uses standard amortization formula
- **Responsive Design**: Works on iOS and Android devices
- **Production-Grade Code**: Modular components, centralized constants, comprehensive tests

### Interest Rate Tiers

| Amount Borrowed | Interest Rate |
|----------------|---------------|
| £1,000-£4,999  | 5%            |
| £5,000-£9,999  | 10%           |
| £10,000-£14,999| 15%           |
| £15,000-£20,000| 20%           |

---

## Installation

### Prerequisites
- Node.js (v20+)
- npm or yarn
- Xcode (for iOS)
- Android Studio (for Android)

### Setup

1. **Install dependencies:**
```bash
npm install
```

2. **iOS Setup** (Mac only):
```bash
cd ios
pod install
cd ..
```

---

## Running the App

### Start Metro Bundler
```bash
npm start
```

### Run on iOS
```bash
npm run ios
```

### Run on Android
```bash
npm run android
```

---

## Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in watch mode:
```bash
npm test -- --watch
```

### Run with coverage:
```bash
npm test -- --coverage
```

**Test Results:** ✅ 79 tests passing

---

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AmountSlider.js   # Loan amount slider
│   ├── YearsSlider.js    # Loan term slider
│   ├── ResultBox.js      # Results display
│   ├── ActionButton.js   # CTA button
│   └── index.js          # Barrel exports
├── constants/            # Application constants
│   └── index.js          # Labels, colors, configs
├── utils/                # Utility functions
│   └── calculations.js   # Loan calculations & formatters
├── styles/               # Theme and styling
│   └── theme.js          # Centralized styles
└── assets/               # Static assets
    └── fonts/            # Custom fonts (OpenSans)

__tests__/                # Test files
├── components/           # Component tests
├── utils/                # Utility tests
├── constants/            # Constants tests
└── App.test.js           # Integration tests

App.js                    # Main application component
```

---

## Technical Decisions

### Architecture
- **Component-based structure**: Modular, reusable components
- **Centralized constants**: All labels, colors, and configs in one place
- **Utility functions**: Pure functions for calculations and formatting
- **Theme system**: Centralized styling for consistency

### Calculations
- **Amortization Formula**: Standard financial formula for monthly payments
  ```
  M = P × [r(1 + r)^n] / [(1 + r)^n - 1]
  where:
  M = Monthly Payment
  P = Principal (loan amount)
  r = Monthly interest rate (annual rate ÷ 12 ÷ 100)
  n = Number of payments (years × 12)
  ```
- **Dynamic Interest Rates**: Calculated based on loan amount tiers

### Testing
- **Unit Tests**: All utilities and components tested
- **Integration Tests**: Full app rendering and functionality
- **Test Coverage**: 79 tests covering calculations, components, and integration
- **Mocking**: External dependencies properly mocked for isolated testing

---

## Dependencies

### Core
- `react`: 19.1.0
- `react-native`: 0.81.4

### UI Components
- `react-native-linear-gradient`: ^2.8.3 (Gradient backgrounds)
- `react-native-sliders`: ^2.0.2 (Interactive sliders)
- `react-native-safe-area-context`: ^5.5.2 (Notch/safe area handling)

### Testing
- `jest`: ^29.6.3
- `react-test-renderer`: 19.1.0

---

## Development Notes

### Time Spent
Approximately 4 hours on:
- Component architecture and implementation (1.5h)
- Dynamic interest rate logic (0.5h)
- Comprehensive test suite (1.5h)
- Code organization and documentation (0.5h)

### Trade-offs Made
- **JavaScript over TypeScript**: Faster development for the time constraint
- **Single theme file**: Simpler for small app, scalable to co-located styles later
- **No animations**: Focused on functionality and code quality
- **Basic responsive**: Percentage-based layouts, room for improvement with normalize functions

### Future Improvements
- Add responsive font scaling for better device support
- Implement SafeAreaView for notched devices
- Add animations for slider changes
- Support landscape orientation
- Implement dark mode
- Add accessibility features (screen reader support)
- Migrate to TypeScript

---

## Design Compliance

✅ Gradient background matching mockup  
✅ Card with shadow elevation  
✅ Two interactive sliders  
✅ Results display (interest rate & monthly payment)  
✅ Action button ("Get your quote")  
✅ OpenSans font family  
✅ Color scheme matching design  
✅ Responsive percentage-based layouts  

---

## Testing

All tests pass with no console errors:

```
Test Suites: 7 passed, 7 total
Tests:       79 passed, 79 total
Snapshots:   1 passed, 1 total
```

Test categories:
- ✅ Interest rate tier calculations (5 tests)
- ✅ Monthly payment calculations (9 tests)
- ✅ Formatting utilities (10 tests)
- ✅ Component rendering (24 tests)
- ✅ Constants validation (20 tests)
- ✅ Integration tests (11 tests)

---

## License

MIT License
