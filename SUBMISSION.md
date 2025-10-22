# 📦 Submission Guide

## ✅ Pre-Submission Checklist

### Clean Build Artifacts (Required)

```bash
# Remove build folders
rm -rf android/build
rm -rf ios/build
rm -rf ios/Pods
rm -rf node_modules
rm -rf vendor/bundle

# Remove temp files
find . -name ".DS_Store" -delete
```

### Verify Everything Works

```bash
# Install dependencies
yarn install
cd ios && pod install && cd ..

# Run tests (should pass all 13 tests)
yarn test

# Run the app
yarn start
yarn ios  # or yarn android
```

Expected output:
- ✅ 13 tests passing
- ✅ No console errors
- ✅ App runs smoothly

---

## 📦 Create Submission ZIP

```bash
# From parent directory
cd ..
zip -r lendable-submission.zip lenablecalculator \
  -x "*/node_modules/*" \
  -x "*/Pods/*" \
  -x "*/build/*" \
  -x "*/.DS_Store" \
  -x "*/vendor/bundle/*" \
  -x "*.xcuserdata*"
```

**Expected ZIP size:** 5-10 MB (without node_modules/Pods)

---

## 📧 Email Template

**Subject:** Lendable Coding Exercise Submission

**Body:**
```
Hello,

Please find attached my React Native loan calculator submission.

Installation:
1. Extract ZIP
2. yarn install
3. cd ios && pod install && cd ..
4. yarn test (13 tests pass)
5. yarn ios (or yarn android)

Time spent: ~4 hours

Key features implemented:
- Loan amount slider (£1k-£20k)
- Loan term slider (1-5 years, 6-month steps)
- Dynamic interest rates (5%, 10%, 15%, 20%)
- Monthly payment calculation
- Clean component architecture
- Comprehensive tests

Thank you!
```

---

## 🎯 What's Included

### Source Code
✅ `src/` - All components, utils, constants, styles  
✅ `__tests__/` - 8 core tests  
✅ `App.js` - Main app  
✅ `package.json` - Dependencies  

### Configuration
✅ `ios/` - iOS config (no build/Pods)  
✅ `android/` - Android config (no build)  
✅ `jest.config.js` - Test config  
✅ `babel.config.js` - Babel config  

### Documentation
✅ `README.md` - Complete instructions  

### NOT Included (Correctly)
❌ `node_modules/` - Too large  
❌ `ios/Pods/` - Will reinstall  
❌ `ios/build/` - Build artifacts  
❌ `android/build/` - Build artifacts  

---

## 💡 Interview Talking Points

### Architecture
- Modular components (4 components)
- Centralized constants and styling
- Clean separation of concerns
- Reusable utility functions

### Key Features
- Dynamic interest rates based on amount tiers
- Standard amortization formula for calculations
- Half-year display (2½ years)
- Real-time calculation updates

### Testing
- 13 focused tests (not overly complex)
- Core business logic tested (6 tests)
- Component rendering tested (5 tests)
- Integration tests for full app (3 tests)
- All tests passing

### Trade-offs
- JavaScript vs TypeScript (faster for 4h constraint)
- Simple test suite (focused on essentials)
- Clean, interview-friendly codebase

---

## ✅ Final Verification

Before submitting:

- [ ] Tests pass: `yarn test` ✅
- [ ] Build artifacts removed ✅
- [ ] ZIP size < 15MB ✅
- [ ] README is clear ✅
- [ ] No personal info ✅

**Ready to submit!** 🚀

