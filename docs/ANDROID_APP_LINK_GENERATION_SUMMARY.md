# Android App Link Generation Summary

This document provides a quick reference for generating and using Android App Links for the FresherJobs application.

## What You Get

After completing the setup, users can open your app directly from web links:

- `https://freshers.example.com` → Opens main app
- `https://freshers.example.com/interview` → Opens interview section
- `https://freshers.example.com/login` → Opens login page
- And more...

## Quick Setup Steps

### 1. Prerequisites
- [ ] Android Studio installed
- [ ] Java JDK 17+ configured (see `JAVA_SETUP_FOR_ANDROID.md`)
- [ ] Google Play Developer account (for production)

### 2. Build the App
```bash
cd freshers-angular
npm run build-android
npm run open-android
```

### 3. Generate Signing Key
In Android Studio:
1. Build → Generate Signed Bundle / APK
2. Follow wizard to create new key store
3. Note the SHA256 fingerprint

### 4. Configure Digital Asset Links
Update `assetlinks.json` with:
```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.freshersjobs.app",
    "sha256_cert_fingerprints": [
      "YOUR_ACTUAL_SHA256_FINGERPRINT_HERE"
    ]
  }
}]
```

### 5. Host Asset Links File
Upload to: `https://freshers.example.com/.well-known/assetlinks.json`

### 6. Test
```bash
adb shell am start -a android.intent.action.VIEW -d "https://freshers.example.com"
```

## Supported URLs

| URL Pattern | App Section |
|-------------|-------------|
| `https://freshers.example.com` | Home |
| `https://freshers.example.com/interview` | Interview Prep |
| `https://freshers.example.com/login` | Login |
| `https://freshers.example.com/signup` | Signup |
| `https://freshers.example.com/profile` | Profile |
| `https://freshers.example.com/rate` | Rating |
| `https://freshers.example.com/share` | Share |
| `freshers://*` | Custom scheme |

## Key Files Modified

1. `android/app/src/main/AndroidManifest.xml` - Added intent filters
2. `capacitor.config.ts` - Updated app ID
3. `android/app/src/main/res/values/strings.xml` - Updated package name
4. `src/app/services/deeplink.service.ts` - Added deep link handling
5. `src/app/app.ts` - Integrated deep link service

## Documentation Files

- `ANDROID_APP_LINKS.md` - Complete setup guide
- `HOW_TO_GENERATE_APP_LINK.md` - Step-by-step instructions
- `JAVA_SETUP_FOR_ANDROID.md` - Java configuration guide

## Testing URLs

During development:
```bash
# Test HTTPS links
adb shell am start -a android.intent.action.VIEW -d "https://freshers.example.com/interview"

# Test custom scheme
adb shell am start -a android.intent.action.VIEW -d "freshers://profile"
```

## Production Deployment

1. Build Android App Bundle (AAB) in Android Studio
2. Upload to Google Play Console
3. Ensure assetlinks.json is hosted on production domain
4. Update fingerprint in assetlinks.json with production key

## Troubleshooting Checklist

- [ ] Intent filters have `android:autoVerify="true"`
- [ ] Digital Asset Links file is accessible at correct URL
- [ ] Package name matches exactly
- [ ] SHA256 fingerprint is correct
- [ ] File served with `application/json` content type
- [ ] HTTPS used for hosting (required for verification)

## Example Implementation

The app now handles deep links through:
1. AndroidManifest.xml intent filters
2. DeeplinkService that parses URLs
3. Router navigation to appropriate pages

Users can share links like `https://freshers.example.com/jobs/12345` which will open directly to that job in the app.

## Next Steps

1. Set up Java environment (if not done)
2. Build and test the Android app
3. Generate signing key for production
4. Host Digital Asset Links file
5. Verify App Links with testing tools