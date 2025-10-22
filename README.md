# Lendable Loan Calculator

A React Native loan calculator that calculates monthly repayments with dynamic interest rates based on loan amount.

---

## Features

- **Loan Amount Slider**: £1,000 - £20,000 in £100 increments
- **Loan Term Slider**: 1 - 5 years in 6-month steps (displays 2½ years)
- **Dynamic Interest Rates**: Automatically adjusts based on amount
- **Monthly Repayment**: Uses standard amortization formula
- **iOS & Android**: Cross-platform support

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
- Yarn
- Xcode (for iOS)
- Android Studio (for Android)

### Setup

```bash
# Install dependencies
yarn install

# iOS Setup (Mac only)
cd ios && pod install && cd ..
```

---

## Running the App

```bash
# Start Metro Bundler
yarn start

# Run on iOS
yarn ios

# Run on Android
yarn android
```

---

## Running Tests

```bash
# Run all tests
yarn test

# Run in watch mode
yarn test --watch
```

**Test Coverage:** 13 tests covering core functionality & components

---

## Project Structure

```
src/
├── components/           # UI components (TypeScript)
│   ├── AmountSlider.tsx  # Loan amount selector
│   ├── YearsSlider.tsx   # Loan term selector
│   ├── ResultBox.tsx     # Results display
│   ├── ActionButton.tsx  # CTA button
│   └── index.js          # Component exports
├── constants/
│   └── index.ts          # App constants (TypeScript with interfaces)
├── utils/
│   └── calculations.ts   # Loan calculations (TypeScript)
├── styles/
│   └── theme.js          # Centralized styling (JavaScript)
└── assets/
    └── fonts/            # OpenSans font family

__tests__/
├── utils/
│   └── calculations.test.js   # Core logic tests (6 tests)
├── components.test.js          # Component tests (5 tests)
└── App.test.js                 # Integration tests (3 tests)

App.js                          # Main app component
```

---

## Technical Implementation

### Loan Calculation Formula
Standard amortization formula:
```
M = P × [r(1 + r)^n] / [(1 + r)^n - 1]

where:
  M = Monthly Payment
  P = Principal (loan amount)
  r = Monthly interest rate (annual ÷ 12 ÷ 100)
  n = Number of payments (years × 12)
```

### Architecture Decisions
- **Component-based**: Modular, reusable components
- **TypeScript for core logic**: Type-safe utilities and constants
- **Centralized constants**: All labels and configs with type definitions
- **Pure functions**: Typed calculation utilities
- **Theme system**: Consistent styling throughout

### Dynamic Interest Rates
Interest rate automatically calculates based on loan amount:
```javascript
calculateInterestRate(amount) {
  if (amount >= 1000 && amount <= 4999) return 5;
  if (amount >= 5000 && amount <= 9999) return 10;
  if (amount >= 10000 && amount <= 14999) return 15;
  if (amount >= 15000 && amount <= 20000) return 20;
}
```

---

## Dependencies

### Core
- `react`: 19.1.0
- `react-native`: 0.81.4

### UI
- `react-native-linear-gradient`: ^2.8.3
- `react-native-sliders`: ^2.0.2

### Testing
- `jest`: ^29.6.3
- `react-test-renderer`: 19.1.0

---

## Technology Choices

- **React Native** with **TypeScript**
- **TypeScript** used for:
  - All components (`*.tsx` with typed props and React.FC)
  - Core utilities (`calculations.ts` with typed functions)
  - Constants (`index.ts` with interfaces and type exports)
- **JavaScript** for:
  - Styling (`theme.js` - no types needed)
  - Tests (simpler test syntax)
- **Jest** for testing
- **Yarn** for package management

Shows TypeScript proficiency while keeping practical complexity.

---

## Design Compliance

✅ Gradient background  
✅ Card with shadow  
✅ Two interactive sliders  
✅ Results display  
✅ Action button  
✅ OpenSans font  
✅ Matching color scheme  

---

## License

MIT
