# GitHub Pages Deployment Guide

Follow these steps to deploy the updated Carrot Chase website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Basic knowledge of Git commands

## Deployment Steps

### 1. Clone your existing repository

```bash
git clone https://github.com/srikrishna2015/carrot-chase.git
cd carrot-chase
```

### 2. Create a branch (optional but recommended)

```bash
git checkout -b website-update
```

### 3. Replace the website files

1. Extract the updated website files (from `updated_website.tar.gz`)
2. Replace all files in the root directory 
   (make sure to preserve the `play` folder that contains the actual game)

### 4. Configure GitHub Pages

1. Make sure your repository has GitHub Pages enabled
2. Set the source to either:
   - The `main` branch (if deploying directly)
   - The `gh-pages` branch (if using a dedicated deployment branch)

### 5. Ensure proper file structure

Maintain this structure for GitHub Pages:
```
index.html              # Main website homepage
play/                   # Folder containing the playable game
  index.html            # Game entry point
  assets/               # Game assets
  ...
images/                 # Website images
videos/                 # Video content
styles.css              # Website styling
script.js               # Website functionality
```

### 6. Commit and push changes

```bash
git add .
git commit -m "Update website with improved video section"
git push origin website-update  # Or main if working directly on main
```

### 7. Create a Pull Request (if using branches)

1. Go to your repository on GitHub
2. Click "Compare & pull request"
3. Review changes and create the pull request
4. Merge the changes into the main branch

### 8. Verify deployment

1. Wait a few minutes for GitHub Pages to build
2. Visit your site at `https://srikrishna2015.github.io/carrot-chase/`
3. Test all features, especially:
   - Video playback 
   - Navigation links
   - "Play Now" button
   - Responsive design on different devices

## Troubleshooting

### 404 Errors

If you see 404 errors for certain files:
1. Check file paths in HTML
2. Ensure case sensitivity matches (GitHub Pages is case-sensitive)
3. Verify files are pushed to the correct branch

### Play Button Not Working

If the "Play Now" button doesn't work:
1. Check that the path in the href attribute is correct
2. Verify the play/index.html file exists
3. Make sure all game files are properly deployed

### Content Updates Not Showing

If updates aren't visible after deployment:
1. Clear your browser cache
2. Wait longer (GitHub Pages may take up to 10 minutes to update)
3. Check if you're viewing the correct URL