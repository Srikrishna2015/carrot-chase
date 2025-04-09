# Carrot Chase Website Update Instructions

## Overview

The Carrot Chase website is now set up with both:
1. A promotional landing page
2. A fully playable web version of the game

## How to Update Your GitHub Repository

If you've already pushed the initial website files to GitHub, you need to update them with these new files that include the playable game.

### Option 1: Using GitHub's Web Interface

1. Go to your GitHub repository: https://github.com/Srikrishna2015/carrot-chase
2. Delete all existing files (if any) by selecting them and clicking "Delete"
3. Upload these new files by clicking "Add file" → "Upload files"
4. Drag and drop all files from the final_export folder
5. Commit the changes

### Option 2: Using Git on Your Computer

If you're comfortable with Git:

1. Clone your repository:
   ```
   git clone https://github.com/Srikrishna2015/carrot-chase.git
   cd carrot-chase
   ```

2. Remove existing files (if any):
   ```
   git rm -rf .
   ```

3. Copy the new files into the repository folder

4. Add, commit and push:
   ```
   git add .
   git commit -m "Add playable game version"
   git push origin main
   ```

## Important Notes

1. The playable game is located in the `/play` directory
2. The main website links to the game from both the hero section and the dedicated "Play Online" section
3. The GitHub Pages site will automatically update once you push the changes
4. Your website will be available at: https://srikrishna2015.github.io/carrot-chase/
5. The playable game will be at: https://srikrishna2015.github.io/carrot-chase/play/

## Website Images

Don't forget to replace the placeholder images in the `/images` directory with actual game screenshots when available.