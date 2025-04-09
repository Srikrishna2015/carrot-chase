# Website Update Instructions

This document provides instructions on how to update specific parts of your Carrot Chase website.

## Replacing the Video Placeholder

### Option 1: Use a Direct MP4 Video

1. Record your gameplay video
2. Edit the video to be 2-3 minutes long
3. Export it as an MP4 file
4. Name it `gameplay.mp4`
5. Upload it to the `videos/` folder
6. The video player is already configured to use this file

### Option 2: Use a YouTube Embed (Recommended)

1. Upload your video to YouTube
2. Get the embed code
3. Open `index.html`
4. Find the video container section:

```html
<div class="video-container">
    <!-- Video Element - Replace the src with your actual gameplay video -->
    <video width="100%" height="auto" controls poster="images/gameplay-video-thumbnail.svg">
        <source src="videos/gameplay.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <p class="video-note">Note: Upload your gameplay video as "videos/gameplay.mp4" to replace this placeholder.</p>
</div>
```

5. Replace it with the YouTube embed:

```html
<div class="video-container">
    <!-- YouTube Embed -->
    <iframe width="100%" height="420" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

6. Replace `YOUR_VIDEO_ID` with your actual YouTube video ID
7. Delete the note paragraph

## Updating Google Play Link

1. Open `index.html`
2. Find the download section:

```html
<a href="#" class="download-button google-play">
    <img src="images/google-play-badge.png" alt="Get it on Google Play">
</a>
```

3. Replace the `#` in `href="#"` with your actual Google Play Store URL

## Adding New Level Screenshots

1. Capture screenshots of each level
2. Edit and crop them to a consistent size
3. Save them as SVG or PNG files in the `images/` folder
4. Open `index.html`
5. Find the levels section with the slider
6. Update the image paths in each slide