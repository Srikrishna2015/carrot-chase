# Carrot Chase Website Deployment Guide

This document contains instructions for completing the deployment of the Carrot Chase website to GitHub Pages or other hosting providers.

## Content Preparation

Before deploying, make sure to:

1. **Replace placeholder images** in the `/images` directory with actual game screenshots and assets:
   - `logo.png` - Game logo
   - `logo-small.png` - Smaller version of the logo for footer
   - `hero-bunny.png` - Main bunny character image for hero section
   - `gameplay-screenshot.png` - Screenshot of actual gameplay
   - `level1.png` through `level5.png` - Screenshots of each level
   - `gameplay-video-thumbnail.png` - Thumbnail for gameplay video
   - `google-play-badge.png` - Official Google Play Store badge

2. **Update the Google Play Store link**:
   - Once your game is published on the Play Store, update the download button link in `index.html`
   - Look for: `<a href="#" class="download-button google-play">`
   - Replace with: `<a href="https://play.google.com/store/apps/details?id=com.srikrishnasenthilkumar.carrotchase" class="download-button google-play">`

3. **Add a gameplay video**:
   - Create a gameplay video and upload it to YouTube
   - Replace the video placeholder in `index.html`
   - Look for the `<div class="video-placeholder">` section

## GitHub Pages Deployment

1. After pushing your code to GitHub, go to your repository settings
2. Navigate to the "Pages" section
3. Select the branch containing your website (usually "main")
4. Choose the "/docs" folder
5. Click "Save"

Your website will be available at: `https://YOUR_USERNAME.github.io/carrot-chase/`

## Other Hosting Options

### Netlify

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Drag and drop the `/docs` folder to Netlify's upload area
3. Your site will be deployed with a random subdomain
4. Configure a custom domain in the site settings if desired

### Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install the Vercel CLI: `npm i -g vercel`
3. Navigate to the `/docs` directory and run `vercel`
4. Follow the prompts to deploy your site

## Post-Deployment

After deployment:

1. Test all links and navigation
2. Verify all images load correctly
3. Test the website on different devices and browsers
4. Set up Google Analytics (optional) for website traffic tracking

## Updating the Website

When you need to update the website:

1. Make changes to the files in the `/docs` directory
2. If using GitHub Pages with the configured workflow, just push your changes
3. For other hosting providers, redeploy following their specific instructions