# 🧪 Test Documentation

## Overview
Comprehensive test suite for the Loan Calculator application using Jest and React Test Renderer.

## Test Structure

```
__tests__/
├── components/              # Component unit tests
│   ├── AmountSlider.test.js
│   ├── YearsSlider.test.js
│   ├── ResultBox.test.js
│   └── ActionButton.test.js
├── utils/                   # Utility function tests
│   └── calculations.test.js
├── constants/               # Constants validation tests
│   └── index.test.js
└── App.test.js             # Integration tests
```

## Test Coverage

### 1. **Utility Functions** (`calculations.test.js`)
**Tests:** 19 test cases

- ✅ `calculateMonthlyPayment()` - 9 tests
  - Standard loan calculations
  - Edge cases (0 years, min/max values)
  - Payment behavior with different inputs
  
- ✅ `formatYears()` - 5 tests
  - Whole numbers
  - Half years with ½ symbol
  - Edge cases
  
- ✅ `formatCurrency()` - 5 tests
  - Default formatting
  - Custom decimal places
  - Zero and negative values
  - Rounding behavior

### 2. **Component Tests**

#### **AmountSlider** (5 tests)
- Renders correctly
- Displays formatted currency
- Shows label text
- Handles min/max values

#### **YearsSlider** (7 tests)
- Renders correctly
- Displays whole and half years
- Shows tick marks
- Handles min/max values

#### **ResultBox** (8 tests)
- Renders correctly
- Displays interest rate
- Displays monthly payment
- Shows correct labels
- Handles different values

#### **ActionButton** (4 tests)
- Renders correctly
- Displays button text
- Calls onPress handler
- Button is touchable

### 3. **Integration Tests** (`App.test.js`)
**Tests:** 11 test cases

- App renders without crashes
- Default state values display correctly
- All sections present
- Monthly payment calculation on mount
- All child components render
- Snapshot testing

### 4. **Constants Tests** (`index.test.js`)
**Tests:** 8 test suites

- Validates all constants exist
- Checks correct values
- Validates data types and formats
- Ensures configuration consistency

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Specific Test File
```bash
npm test calculations.test.js
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

### Run Tests with Coverage
```bash
npm test -- --coverage
```

## Test Statistics

| Category | Files | Test Cases | Status |
|----------|-------|------------|--------|
| **Utils** | 1 | 19 | ✅ Ready |
| **Components** | 4 | 24 | ✅ Ready |
| **Integration** | 1 | 11 | ✅ Ready |
| **Constants** | 1 | 8 suites | ✅ Ready |
| **TOTAL** | 7 | 50+ tests | ✅ Ready |

## Key Test Scenarios

### Calculation Tests
```javascript
// Test Case 1: Standard loan
£7,500 @ 2.5 years @ 10% = £284.88/month ✓

// Test Case 2: Minimum loan
£1,000 @ 1 year @ 10% = £87.92/month ✓

// Test Case 3: Maximum loan
£20,000 @ 5 years @ 10% = £424.94/month ✓

// Test Case 4: Mid-range loan
£10,000 @ 3 years @ 10% = £322.67/month ✓
```

### Component Rendering Tests
- All components render without errors ✓
- Props are correctly passed and displayed ✓
- Event handlers work as expected ✓
- Default values display correctly ✓

### Integration Tests
- App initializes with correct defaults ✓
- All child components are present ✓
- Calculations run on mount ✓
- User interface elements are accessible ✓

## Test Quality Features

✅ **Comprehensive Coverage** - Tests for all components and utilities  
✅ **Edge Cases** - Handles min/max values and edge scenarios  
✅ **Integration Tests** - Ensures components work together  
✅ **Calculation Accuracy** - Verifies loan formula correctness  
✅ **Snapshot Testing** - Detects unexpected UI changes  
✅ **Mock Functions** - Tests callbacks and event handlers  
✅ **Async Handling** - Proper async/await for React 19  

## Expected Test Results

When you run `npm test`, you should see:

```
PASS  __tests__/utils/calculations.test.js
PASS  __tests__/components/AmountSlider.test.js
PASS  __tests__/components/YearsSlider.test.js
PASS  __tests__/components/ResultBox.test.js
PASS  __tests__/components/ActionButton.test.js
PASS  __tests__/constants/index.test.js
PASS  __tests__/App.test.js

Test Suites: 7 passed, 7 total
Tests:       50+ passed, 50+ total
Snapshots:   1 written, 1 total
Time:        X.XXXs
```

## Troubleshooting

### Issue: "Cannot find module"
**Solution:**
```bash
npm install
npm test
```

### Issue: "Transform failed"
**Solution:** Ensure babel.config.js is properly configured (already done).

### Issue: Snapshot failures
**Solution:** Update snapshots if changes are intentional:
```bash
npm test -- -u
```

## Test Best Practices Implemented

1. ✅ **Descriptive test names** - Clear what each test verifies
2. ✅ **Arrange-Act-Assert** - Proper test structure
3. ✅ **Independent tests** - No dependencies between tests
4. ✅ **Mock external dependencies** - Isolated unit tests
5. ✅ **Async handling** - Proper React 19 async patterns
6. ✅ **Edge case coverage** - Min/max and boundary values
7. ✅ **Integration tests** - Components work together
8. ✅ **Readable assertions** - Clear expectations

## Adding New Tests

### For a New Component:
```javascript
// __tests__/components/NewComponent.test.js
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import NewComponent from '../../src/components/NewComponent';

describe('NewComponent', () => {
  test('renders correctly', async () => {
    let component;
    
    await ReactTestRenderer.act(() => {
      component = ReactTestRenderer.create(<NewComponent />);
    });
    
    expect(component.toJSON()).toBeTruthy();
  });
});
```

### For a New Utility:
```javascript
// __tests__/utils/newUtil.test.js
import { myFunction } from '../../src/utils/newUtil';

describe('myFunction', () => {
  test('returns expected result', () => {
    const result = myFunction(input);
    expect(result).toBe(expectedOutput);
  });
});
```

## Continuous Integration Ready

These tests are ready to be integrated into CI/CD pipelines:
- ✅ No interactive prompts
- ✅ Exit codes for pass/fail
- ✅ Fast execution
- ✅ No external dependencies

## Summary

This test suite provides:
- **Comprehensive coverage** of all application code
- **Calculation accuracy** verification
- **Component isolation** testing
- **Integration** testing
- **Professional quality** suitable for production

All tests follow React Native and Jest best practices and are ready for immediate execution.

