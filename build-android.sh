#!/bin/bash

# Build the web app
echo "Building the web application..."
npm run build

# Add Android platform if it doesn't exist
if [ ! -d "android" ]; then
  echo "Adding Android platform..."
  npx cap add android
else
  echo "Android platform already exists"
fi

# Sync web assets to Android project
echo "Syncing web assets to Android..."
npx cap sync

echo "Android build preparation complete!"
echo "To finish building the APK, you need to:"
echo "1. Open the Android project in Android Studio: npx cap open android"
echo "2. Build the APK using Android Studio's build menu"
echo "3. Sign the APK for Play Store submission"