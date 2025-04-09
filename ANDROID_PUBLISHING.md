# Publishing Carrot Chase to the Google Play Store

This guide will walk you through the steps to publish your Carrot Chase game to the Google Play Store and launch the game's promotional website.

## Publisher Information

- Developer/Publisher Name: Srikrishna Senthilkumar

## Prerequisites

- A Google Play Developer account (requires a one-time $25 USD registration fee)
- Android Studio installed on your development machine
- The Java Development Kit (JDK) installed
- A keystore file for signing your app

## Building the Android App

1. First, run the build script:

```bash
./build-android.sh
```

This will:
- Build your web application
- Add the Android platform if it doesn't exist
- Sync the web assets to the Android project

2. Open the Android project in Android Studio:

```bash
npx cap open android
```

## Setting Up App Icons and Splash Screens

1. In Android Studio, navigate to `android/app/src/main/res`
2. Replace the icon files in the `mipmap` folders with your game's icon at different resolutions
3. Update the splash screen configuration in `android/app/src/main/res/values/styles.xml`

## Building a Release APK/AAB

1. In Android Studio, click on **Build** in the top menu
2. Select **Generate Signed Bundle / APK**
3. Choose **Android App Bundle (AAB)** or **APK** (AAB is preferred for the Play Store)
4. Create a new keystore file or use an existing one:
   - Store the keystore file securely - you'll need it for all future updates
   - Remember the keystore password and key alias
5. Choose **release** build variant
6. Click **Finish** and wait for the build to complete

## Publishing to Google Play Store

1. Sign in to your [Google Play Console](https://play.google.com/console)
2. Click **Create app**
3. Fill in the app details:
   - App name: Carrot Chase
   - Default language
   - App or game: Game
   - Free or paid: Choose your preference 
   - Developer name: Srikrishna Senthilkumar
   - Confirm you comply with Play policies and guidelines
4. Complete the required store listing information:
   - Short and full descriptions
   - Screenshots (at least 2)
   - Feature graphic (1024 x 500 px)
   - App icon
   - Content rating questionnaire
5. Set up your app's pricing and distribution
6. In the **App releases** section, create a new release:
   - Upload the signed AAB or APK file
   - Add release notes
   - Review and roll out the release

## Additional Tips

### Game Controls
For a better mobile experience, consider adding touch controls:

1. In the Capacitor configuration, add:
```typescript
// In capacitor.config.ts
plugins: {
  // Add touch input plugins if needed
}
```

2. Modify your game controls to work with touch input

### App Permissions
Review the Android manifest file (`android/app/src/main/AndroidManifest.xml`) to ensure you're only requesting necessary permissions.

### Testing
Always test your build on real Android devices before publishing to ensure the game runs smoothly.

### Updates
To update your app:
1. Make changes to your code
2. Run the build script again
3. Build a new signed AAB/APK with the **same keystore**
4. Create a new release in the Play Console with an incremented version code

## Troubleshooting

- If you encounter build issues, check the Capacitor and Android Studio logs
- Ensure your app meets the [Google Play Developer Program Policies](https://play.google.com/about/developer-content-policy/)
- Verify that your game performance is optimized for mobile devices

## Publishing the Game Website

A promotional website has been created for Carrot Chase in the `website/` directory. This site can be used to market the game and provide information to potential players.

### Preparing the Website

1. Take screenshots of all five game levels and save them in the `website/images/` folder
2. Create a gameplay video and update the video section in the website
3. Update the download link to point to your actual Google Play Store listing once published

### Publishing Options

1. **GitHub Pages**:
   - Create a GitHub repository for the website
   - Push the contents of the `website/` folder to the repository
   - Enable GitHub Pages in the repository settings

2. **Netlify or Vercel**:
   - Create an account on Netlify or Vercel
   - Deploy the website directly from the `website/` folder using their tools

3. **Traditional Web Hosting**:
   - Purchase a domain (e.g., carrotchasegame.com)
   - Sign up for web hosting
   - Upload the website files to your hosting provider

For more detailed instructions, refer to the `website/README.md` file.