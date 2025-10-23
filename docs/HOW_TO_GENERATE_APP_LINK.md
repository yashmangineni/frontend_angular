# How to Generate and Use Android App Links

This document explains how to generate and use Android App Links for the FresherJobs application.

## What You'll Get

After building and deploying the Android app, users can open your app directly from web links like:

- `https://freshers.example.com` - Opens the main app
- `https://freshers.example.com/interview` - Opens the interview section
- `https://freshers.example.com/login` - Opens the login page

## Prerequisites

1. Android Studio installed
2. A Google Play Developer account (for production deployment)
3. A verified domain for hosting the Digital Asset Links file

## Steps to Generate App Links

### 1. Build the Android App

```bash
cd freshers-angular
npm run build-android
```

This command will:
- Build the Angular web app
- Copy the web assets to the Android project
- Prepare the Android project for building

### 2. Open in Android Studio

```bash
npm run open-android
```

This opens the Android project in Android Studio.

### 3. Generate a Signed APK or App Bundle

In Android Studio:
1. Go to Build → Generate Signed Bundle / APK
2. Choose Android App Bundle (recommended for Google Play) or APK
3. Create or use an existing keystore
4. Note the SHA256 fingerprint of your signing key

### 4. Update Digital Asset Links File

Update the `assetlinks.json` file with:
- Your app's package name: `com.freshersjobs.app`
- Your app's SHA256 fingerprint from step 3

### 5. Host Digital Asset Links File

Upload the `assetlinks.json` file to your website at:
`https://freshers.example.com/.well-known/assetlinks.json`

### 6. Test App Links

Test the app links using ADB:

```bash
adb shell am start -a android.intent.action.VIEW -d "https://freshers.example.com"
```

## Supported Deep Links

The app supports the following URL patterns:

| URL | Opens |
|-----|-------|
| `https://freshers.example.com` | Main app |
| `https://freshers.example.com/interview` | Interview section |
| `https://freshers.example.com/login` | Login page |
| `https://freshers.example.com/signup` | Signup page |
| `https://freshers.example.com/profile` | User profile |
| `https://freshers.example.com/rate` | Rating page |
| `https://freshers.example.com/share` | Share page |
| `freshers://*` | Custom scheme links |

## Example Usage

### For Marketing Campaigns
```
https://freshers.example.com/interview?utm_source=linkedin&utm_medium=social
```

### For Job Listings
```
https://freshers.example.com/jobs/12345
```

### For Direct Page Access
```
https://freshers.example.com/profile
```

## Verification

To verify that your App Links are working correctly:

1. Install your app on an Android device
2. Visit a supported URL in Chrome
3. The app should open automatically without showing the app chooser dialog

If the app chooser dialog appears, check:
- The Digital Asset Links file is correctly hosted
- The package name and fingerprint match your app
- The intent filters in AndroidManifest.xml are correct

## Troubleshooting

### App Doesn't Open Automatically
- Ensure `android:autoVerify="true"` is set in intent filters
- Verify the Digital Asset Links file is accessible at the correct URL
- Check that the package name and fingerprint match exactly

### Link Opens in Browser
- Make sure your app is properly installed on the device
- Verify the domain is correctly configured in the intent filters

### Digital Asset Links Verification Fails
- Use the [Statement List Generator and Tester](https://developers.google.com/digital-asset-links/tools/generator) tool
- Check the HTTP response headers for the assetlinks.json file
- Ensure the file is served with content type `application/json`

## For Development Testing

During development, you can test deep links without App Links verification:

```bash
adb shell am start -a android.intent.action.VIEW -d "freshers://interview"
```

## Production Deployment

For production deployment to Google Play:
1. Build an Android App Bundle (AAB)
2. Upload to Google Play Console
3. Ensure the Digital Asset Links file is hosted on your production domain
4. Update the assetlinks.json with your production app's fingerprint

The Android App Links will work automatically once deployed, providing a seamless experience for users clicking links to your app.