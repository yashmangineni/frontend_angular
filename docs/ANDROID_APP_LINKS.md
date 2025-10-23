# Android App Links Setup Guide

This guide explains how to set up Android App Links for the FresherJobs application.

## What are Android App Links?

Android App Links allow users to tap a URL and immediately open your app if it's installed, bypassing the app chooser dialog. If the app isn't installed, the URL opens in the browser.

## Prerequisites

1. A verified website domain
2. An Android app with the proper intent filters
3. A Digital Asset Links file hosted on your website

## Setup Steps

### 1. Update AndroidManifest.xml

The app is already configured with intent filters for deep linking:

```xml
<!-- Deep linking intent filters -->
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="http" android:host="freshers.example.com" />
</intent-filter>

<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="https" android:host="freshers.example.com" />
</intent-filter>

<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="freshers" />
</intent-filter>
```

### 2. Generate Digital Asset Links File

To create the Digital Asset Links file, you need your app's signing key fingerprint:

1. Generate your app signing key (if you haven't already)
2. Get the SHA256 fingerprint of your signing key:

```bash
keytool -list -v -keystore my-release-key.keystore -alias my-key-alias
```

3. Update the `assetlinks.json` file with your package name and fingerprint:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.freshersjobs.app",
    "sha256_cert_fingerprints": [
      "YOUR_RELEASE_KEY_SHA256_FINGERPRINT_HERE"
    ]
  }
}]
```

### 3. Host the Digital Asset Links File

Upload the `assetlinks.json` file to your website at:

```
https://freshers.example.com/.well-known/assetlinks.json
```

The file must be accessible via HTTPS and served with content type `application/json`.

### 4. Test App Links

You can test the app links using the following ADB command:

```bash
adb shell am start -a android.intent.action.VIEW -d "https://freshers.example.com"
```

## Supported Links

The app supports the following URL patterns:

1. `https://freshers.example.com` - Opens the main app
2. `https://freshers.example.com/interview` - Opens the interview section
3. `https://freshers.example.com/login` - Opens the login page
4. `freshers://*` - Custom scheme links

## Example Deep Links

- Main app: `https://freshers.example.com`
- Interview section: `https://freshers.example.com/interview`
- Profile page: `https://freshers.example.com/profile`
- Specific job: `https://freshers.example.com/jobs/123`

## Troubleshooting

1. **App doesn't open automatically**: Make sure the Digital Asset Links file is correctly hosted and accessible
2. **Verification fails**: Check that the package name and fingerprint in the assetlinks.json match your app
3. **Link opens in browser**: Ensure `android:autoVerify="true"` is set in your intent filters

## For Development

During development, you can test deep links without App Links verification using custom schemes:

```bash
adb shell am start -a android.intent.action.VIEW -d "freshers://interview"
```

## Building and Deploying

To build the Android app with the updated configuration:

```bash
npm run build-android
```

To open the Android project in Android Studio:

```bash
npm run open-android
```