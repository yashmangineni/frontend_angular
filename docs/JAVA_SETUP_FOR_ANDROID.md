# Java Setup for Android Development

This guide explains how to set up Java for building Android applications with Capacitor.

## Prerequisites

To build Android applications with Capacitor, you need:
1. Java Development Kit (JDK) 17 or higher
2. Android Studio (which includes the Android SDK)

## Installing Java

### Option 1: Install OpenJDK

1. Download OpenJDK 17 or higher from [Adoptium](https://adoptium.net/)
2. Run the installer and follow the installation wizard
3. Note the installation directory (usually `C:\Program Files\Java\jdk-17.x.x`)

### Option 2: Use Android Studio's Built-in JDK

Android Studio comes with its own JDK. After installing Android Studio:
1. Open Android Studio
2. Go to File → Settings → Build, Execution, Deployment → Build Tools → Gradle
3. Set "Gradle JVM" to use the Android Studio default JDK

## Setting JAVA_HOME Environment Variable

### Windows

1. Open System Properties:
   - Press `Win + R`, type `sysdm.cpl`, and press Enter
   - Or right-click "This PC" → Properties → Advanced system settings

2. Click "Environment Variables"

3. Under "System Variables", click "New"

4. Set:
   - Variable name: `JAVA_HOME`
   - Variable value: Path to your JDK installation (e.g., `C:\Program Files\Java\jdk-17.0.2`)

5. Click OK to save

6. Find the "Path" variable in System Variables and select "Edit"

7. Add a new entry: `%JAVA_HOME%\bin`

8. Click OK to save all changes

9. Restart your command prompt or PowerShell

### Verification

Open a new command prompt and run:

```bash
java -version
javac -version
echo %JAVA_HOME%
```

You should see output similar to:

```
openjdk version "17.0.2" 2022-01-18
OpenJDK Runtime Environment (build 17.0.2+8-86)
OpenJDK 64-Bit Server VM (build 17.0.2+8-86, mixed mode, sharing)

javac 17.0.2

C:\Program Files\Java\jdk-17.0.2
```

## Building the Android App

After setting up Java, you can build the Android app:

```bash
cd freshers-angular
npm run build-android
```

This will:
1. Build the Angular web app
2. Copy the web assets to the Android project
3. Build the Android APK using Gradle

## Opening in Android Studio

To open the project in Android Studio:

```bash
npm run open-android
```

## Troubleshooting

### JAVA_HOME Not Set Error

If you still get "JAVA_HOME is not set" errors:

1. Make sure you've restarted your command prompt after setting the environment variable
2. Check that the path is correct and points to the JDK directory (not the bin subdirectory)
3. Verify with `echo %JAVA_HOME%` that it shows the correct path

### Wrong Java Version

If you get errors about Java version incompatibility:

1. Make sure you're using JDK 17 or higher
2. Check your PATH environment variable doesn't point to an older Java version
3. In Android Studio, go to File → Settings → Build, Execution, Deployment → Build Tools → Gradle and set the correct Gradle JVM

### Android Studio Can't Find Java

If Android Studio can't find Java:

1. Open Android Studio
2. Go to File → Settings → Build, Execution, Deployment → Build Tools → Gradle
3. Set "Gradle JVM" to use the Android Studio default or specify the correct JDK path

## Next Steps

After successfully setting up Java:

1. Build the Android app: `npm run build-android`
2. Open in Android Studio: `npm run open-android`
3. Generate signed APK or App Bundle for distribution
4. Set up Android App Links as described in `ANDROID_APP_LINKS.md`