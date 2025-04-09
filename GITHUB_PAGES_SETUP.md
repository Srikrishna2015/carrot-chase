# Setting Up GitHub Pages for Carrot Chase Website

Follow these steps to deploy the Carrot Chase game website to GitHub Pages:

## 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "carrot-chase")
4. Make it public
5. Click "Create repository"

## 2. Push Your Code to GitHub

From your local development environment, run the following commands:

```bash
# Initialize Git repository (if not already done)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/carrot-chase.git

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the branch you want to deploy (usually "main" or "gh-pages")
5. Choose the "/docs" folder as the source
6. Click "Save"

## 4. Access Your Website

Your website will be published at:
`https://YOUR_USERNAME.github.io/carrot-chase/`

It may take a few minutes for the site to be published after configuration.

## 5. Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain from a domain registrar (e.g., Namecheap, GoDaddy)
2. In your repository settings, under GitHub Pages, enter your custom domain
3. Set up the DNS records at your domain registrar:
   - Type: CNAME
   - Host: www
   - Value: YOUR_USERNAME.github.io
4. Wait for DNS changes to propagate (can take up to 48 hours)

## Maintaining Your Website

When you want to update your website:

1. Make changes to the files in the "/docs" or "/website" folder
2. Commit and push your changes to GitHub
3. GitHub will automatically publish the updated website

The GitHub Action workflow in `.github/workflows/deploy-website.yml` will handle the deployment process automatically whenever you push changes to the main branch.