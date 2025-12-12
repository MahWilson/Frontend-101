# Notes App - Frontend 101 Workshop

A fun, colorful notes app built with React and Vite, featuring:
- ✨ Animated gradient background
- 🎨 Colorful sticky note design with random colors
- 🔍 Search functionality
- 📊 Note count badge
- 🎯 Responsive grid layout
- 💫 Smooth animations
- 🎮 Minecraft-like pixelated font

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Deployment to Netlify

### Option 1: Manual Deployment (Quick Demo)

1. Run `npm run build` in your terminal
2. Go to [Netlify](https://netlify.com)
3. Create a new site
4. Drag and drop the `/dist` folder
5. Get your live URL instantly!

### Option 2: Automatic GitHub Deployment (Recommended)

1. Push your code to GitHub
2. Go to Netlify → Add new site → Import from Git
3. Connect your GitHub account
4. Select your repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click Deploy
7. Every push to GitHub = automatic new deployment! 🚀

### Important: Create netlify.toml File

**If you're building from scratch** (not forking this repo), you need to create a `netlify.toml` file in your project root:

Create a file called `netlify.toml` with this content:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This file tells Netlify:
- How to build your app (`npm run build`)
- Where to find the built files (`dist` folder)
- How to handle routing (for single-page apps)

**Note:** If you forked/cloned this repo, the `netlify.toml` file is already included! ✅

## Workshop Steps

- Step 1: Create React App
- Step 2: Add Note Input
- Step 3: Display Notes
- Step 4: Delete Notes
- Step 5: Styling & Enhancements

## Tech Stack

- React 19
- Vite
- CSS3 (with animations)
- Google Fonts (Press Start 2P)
