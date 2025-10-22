# Source Code Structure

This directory contains the refactored, production-ready source code for the Loan Calculator application.

## 📁 Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── AmountSlider.js  # Loan amount slider component
│   ├── YearsSlider.js   # Loan term slider with ticks
│   ├── ResultBox.js     # Results display component
│   ├── ActionButton.js  # CTA button component
│   └── index.js         # Barrel exports for components
│
├── constants/           # Application constants
│   └── index.js         # Labels, colors, config values
│
├── utils/              # Utility functions
│   └── calculations.js  # Loan calculations & formatters
│
├── styles/             # Theme and styling
│   └── theme.js         # Centralized styles
│
├── assets/             # Static assets
│   └── fonts/          # Custom fonts
│
└── README.md           # This file
```

## 🧩 Components

### AmountSlider
Displays and controls the loan amount selection.
- **Props:**
  - `value` (number): Current amount value
  - `onValueChange` (function): Callback when slider changes

### YearsSlider
Displays and controls the loan term (years) selection with visual tick marks.
- **Props:**
  - `value` (number): Current years value
  - `onValueChange` (function): Callback when slider changes

### ResultBox
Displays the calculated interest rate and monthly repayment.
- **Props:**
  - `interestRate` (number): Interest rate percentage
  - `monthlyPayment` (number): Calculated monthly payment

### ActionButton
Call-to-action button for initiating quote request.
- **Props:**
  - `onPress` (function): Callback when button is pressed

## 📋 Constants

All application constants are centralized in `constants/index.js`:

- **LABELS**: All user-facing text strings
- **CURRENCY**: Currency configuration (symbol, decimal places)
- **SLIDER_CONFIG**: Min/max/step values for sliders
- **INTEREST_RATE_CONFIG**: Interest rate settings
- **COLORS**: Application color palette
- **GRADIENT**: Gradient configuration
- **LAYOUT**: Layout dimensions and spacing
- **FONTS**: Typography settings
- **SLIDER_STYLE**: Slider styling configuration

## 🛠 Utilities

### calculations.js
Contains helper functions for loan calculations:

- `calculateMonthlyPayment(principal, annualRate, years)`: Calculates monthly loan payment using amortization formula
- `formatYears(value)`: Formats years display with half-year symbol (½)
- `formatCurrency(value, decimals)`: Formats numbers as currency strings

## 🎨 Styling

All styles are centralized in `styles/theme.js`:

- **commonStyles**: Shared layout and component styles
- **resultBoxStyles**: Styles specific to ResultBox component
- **buttonStyles**: Styles specific to ActionButton component

All styles reference constants for consistency and maintainability.

## 🔧 Usage Example

```javascript
import React from 'react';
import { AmountSlider, YearsSlider } from './src/components';
import { SLIDER_CONFIG } from './src/constants';

const MyComponent = () => {
  const [amount, setAmount] = useState(SLIDER_CONFIG.AMOUNT.DEFAULT);
  
  return (
    <AmountSlider 
      value={amount} 
      onValueChange={setAmount} 
    />
  );
};
```

## ✅ Benefits of This Structure

1. **Modularity**: Each component is self-contained and reusable
2. **Maintainability**: Easy to locate and update specific functionality
3. **Scalability**: Simple to add new components or features
4. **Consistency**: Centralized constants ensure uniform behavior
5. **Testability**: Components can be tested in isolation
6. **Type Safety**: Clear prop interfaces for each component
7. **Code Reusability**: Shared utilities and styles reduce duplication
8. **Internationalization Ready**: All labels in constants for easy translation

## 🚀 Best Practices Implemented

- Single Responsibility Principle: Each component has one clear purpose
- DRY (Don't Repeat Yourself): Shared utilities and constants
- Separation of Concerns: Logic, styling, and presentation separated
- Clear naming conventions: Descriptive file and function names
- Comprehensive documentation: Comments and JSDoc annotations
- Barrel exports: Clean import statements
- Professional code organization: Industry-standard folder structure

