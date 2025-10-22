# Demo Videos Directory

Place your app demo videos here:

- `ios.mp4` or `ios.mov` - Screen recording from iOS simulator/device
- `android.mp4` - Screen recording from Android emulator/device

## How to Record Demo Videos

### iOS (Simulator)
1. Run the app: `yarn ios`
2. Open QuickTime Player
3. File → New Screen Recording
4. Click the down arrow next to record button, select the iOS Simulator
5. Click record and demonstrate the app (changing sliders, showing calculations)
6. Stop recording and save as `ios.mov` or `ios.mp4`

**OR using Simulator directly:**
1. Run the app: `yarn ios`
2. In the simulator, press `Cmd + R` to start recording
3. Demonstrate the app
4. Press `Cmd + R` again to stop
5. Video saved to Desktop, rename to `ios.mov`

### Android (Emulator)
1. Run the app: `yarn android`
2. In the emulator toolbar, click the three dots (⋮) → Screen record
3. Start recording and demonstrate the app
4. Stop recording
5. Save the video as `android.mp4`

**OR using ADB:**
```bash
adb shell screenrecord /sdcard/demo.mp4
# (Demonstrate your app for up to 3 minutes)
# Press Ctrl+C to stop
adb pull /sdcard/demo.mp4 ./android.mp4
```

## Adding Videos to README

### Option 1: Upload to Repository
1. Place video files in this directory
2. In README.md, use relative paths:
```markdown
<video src="./screenshots/ios.mp4" width="300" controls></video>
```

### Option 2: Upload via GitHub (Recommended)
1. Edit README.md on GitHub
2. Drag and drop your video files directly into the editor
3. GitHub will automatically upload and generate URLs
4. The videos will be hosted by GitHub and embed automatically

## Recommended Video Specs
- Format: MP4 or MOV
- Duration: 10-30 seconds
- Resolution: Native device resolution
- File size: < 10MB (for better loading)
- Content: Show slider interactions and real-time calculations

