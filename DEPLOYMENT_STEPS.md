# Step-by-Step: Deploy to Netlify via GitHub

## Prerequisites
- ✅ Your code is pushed to GitHub
- ✅ You have a `netlify.toml` file in your project root
  - **Note:** If you used the template or forked the repo, this file is already included!
  - **If building from scratch:** See README.md for how to create it

---

## Step 1: Go to Netlify
1. Open your browser
2. Go to [netlify.com](https://netlify.com)
3. Sign in (or create an account if you don't have one)

---

## Step 2: Add New Site
1. Click **"Add new site"** button (top right)
2. Select **"Import an existing project"**

---

## Step 3: Connect to Git Provider
1. Click **"Deploy with GitHub"** (or GitLab/Bitbucket)
2. Authorize Netlify to access your GitHub account
3. Click **"Authorize Netlify"** in the popup

---

## Step 4: Select Your Repository
1. Search for your repository: `Frontend-101` (or your repo name)
2. Click on your repository to select it

---

## Step 5: Configure Build Settings
Netlify should auto-detect settings from `netlify.toml`:
- **Build command**: `npm run build` (auto-filled)
- **Publish directory**: `dist` (auto-filled)

**If not auto-filled, enter manually:**
- Build command: `npm run build`
- Publish directory: `dist`

---

## Step 6: Deploy!
1. Click **"Deploy site"** button
2. Wait for the build to complete (usually 1-2 minutes)
3. You'll see a progress bar showing the build status

---

## Step 7: Get Your Live URL
1. Once deployment is complete, you'll see:
   - ✅ **"Site is live"** message
   - Your unique URL: `https://your-app-name.netlify.app`
2. Click the URL to view your deployed app!

---

## Step 8: Automatic Deployments (Bonus!)
🎉 **Every time you push to GitHub, Netlify automatically deploys a new version!**

- Push code → GitHub → Netlify auto-deploys
- No manual steps needed after initial setup!

---

## Troubleshooting

**If you see a white screen:**
- Check that `netlify.toml` file exists in your repo
- Verify build command is `npm run build`
- Verify publish directory is `dist`

**If build fails:**
- Check the build logs in Netlify dashboard
- Make sure all dependencies are in `package.json`
- Try running `npm run build` locally first to test

