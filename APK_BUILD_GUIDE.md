# APK Build Guide

This guide explains how to build and download the Android APK for the CrackIT Job application.

## Prerequisites

1. Android Studio installed on your computer
2. Node.js and npm installed
3. Capacitor CLI installed

## Building the APK

### Method 1: Using npm scripts (Recommended)

1. Build the Angular app and generate the APK:
   ```bash
   npm run build-android
   ```

2. Open the Android project in Android Studio:
   ```bash
   npm run open-android
   ```

3. In Android Studio, build the APK:
   - Go to Build > Build Bundle(s) / APK(s) > Build APK(s)
   - The APK will be located in `android/app/build/outputs/apk/debug/`

### Method 2: Manual steps

1. Build the Angular application:
   ```bash
   npm run build
   ```

2. Copy the built files to the Capacitor project:
   ```bash
   npx cap copy
   ```

3. Update the Capacitor project:
   ```bash
   npx cap update android
   ```

4. Build the Android project:
   ```bash
   npx cap build android
   ```

5. Open the project in Android Studio:
   ```bash
   npx cap open android
   ```

6. In Android Studio, build the APK:
   - Go to Build > Build Bundle(s) / APK(s) > Build APK(s)

## APK Location

The generated APK will be located at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

## Troubleshooting

### Microphone Issues
- Make sure you've granted microphone permissions to the app
- Check that your device's microphone is working properly
- Ensure the AndroidManifest.xml includes the necessary permissions:
  ```xml
  <uses-permission android:name="android.permission.RECORD_AUDIO" />
  <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
  ```

### Network Issues
- The app requires internet access to connect to the backend
- Make sure the backend server is running
- Check the network security configuration in `android/app/src/main/res/xml/network_security_config.xml`

### Build Issues
- Make sure all dependencies are installed: `npm install`
- Update Capacitor: `npx cap update`
- Clean the build: `npx cap clean` and rebuild