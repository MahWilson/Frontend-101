# 🚀 React Setup — Beginner-Friendly (Vite Only)

This guide will help you set up your development environment before the workshop. Choose one path that works best for you!

---

## PATH 1 — Local Setup (VS Code + Node.js + Vite)

### Step 0 — Requirements

- ✅ Laptop with Windows / Mac
- ✅ Internet connection
- ✅ No coding experience required

---

### Step 1 — Install VS Code

1. Go to [VS Code download page](https://code.visualstudio.com/)
2. Click **"Download for Windows (Stable)"** (or Mac version)
3. Run the downloaded `.exe` (or `.dmg` on Mac)
4. Click **Next → Next → Install** using default settings
5. **Important:** Tick **"Add to PATH"** if the checkbox appears
6. Finish installation → Open VS Code (blue icon)

> **Why VS Code?** It's beginner-friendly, free, lightweight, and works for all React projects.

---

### Step 2 — Install Node.js (LTS Version)

1. Go to [Node.js download page](https://nodejs.org/)
2. Download the **LTS** (Long Term Support) version
3. Run installer → Click **Next → Next → Install** (default settings)
4. After installation, open **Command Prompt / PowerShell / Terminal**:

```bash
node -v
npm -v
```

- You should see version numbers for both → Node.js and npm installed correctly ✅

> **Why Node.js?** npm (comes with Node) is required to install and run React/Vite.

---

### Step 3 — Create Your Project Folder

1. Open **File Explorer / Finder**
2. Go to **Desktop** or **Documents**
3. Right-click → **New → Folder** → name it:

```text
my-vite-app
```

4. This is where your Vite project will live.

---

### Step 4 — Open Folder in VS Code

1. Launch VS Code
2. Click **File → Open Folder**
3. Navigate to `my-vite-app` → Click **Select Folder**

> **What you'll see:**
> VS Code sidebar will be mostly empty. Window title shows: `my-vite-app — Visual Studio Code`.

---

### Step 5 — Install VS Code Extensions (Optional but Recommended)

| Extension                   | Purpose                    |
| --------------------------- | -------------------------- |
| ES7+ React/Redux Snippets   | Fast React code shortcuts  |
| JavaScript (ES6) Syntax     | Highlight JS syntax        |
| Prettier                    | Code formatting            |
| npm Scripts                 | Run commands easily        |
| GitHub Copilot *(optional)* | AI assistance while coding |

1. Click **Extensions icon** (left toolbar) or press `Ctrl+Shift+X`
2. Search by name → Click **Install**

---

### Step 6 — Create Vite Project

1. Open **VS Code terminal**:
   - **Windows:** `Terminal → New Terminal` or press `` Ctrl+` ``
   - **Mac:** `Terminal → New Terminal` or press `` Cmd+` ``

2. Run these commands one by one:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

3. Open browser: `http://localhost:5173`
4. You should see **Vite + React welcome page** ✅

> ✅ **Starter code base**: This is what you get immediately after `npm create vite@latest` + `npm install`.  
> ✅ **Complete code base**: After you paste or add the Notes App, Counter, or other components we provide.

---

### Step 7 — Starter + Complete Code Base Structure (Local)

**Starter (after Vite install)**

```
my-app/
 ├─ src/
 │   ├─ main.jsx
 │   └─ App.jsx
 ├─ index.html
 ├─ package.json
 └─ vite.config.js
```

**Complete (after adding workshop code)**

```
my-app/
 ├─ src/
 │   ├─ main.jsx
 │   ├─ App.jsx
 │   ├─ components/
 │   │     ├─ Counter.jsx
 │   │     ├─ InputBox.jsx
 │   │     └─ NoteItem.jsx
 ├─ public/
 │   └─ logo.png
 ├─ styles/
 │   └─ global.css
 ├─ package.json
 └─ vite.config.js
```

---

## PATH 2 — Online Setup (StackBlitz)

### Step 0 — Requirements

- ✅ Internet connection
- ✅ Browser (Chrome, Firefox, Edge, Safari)

---

### Step 1 — Navigate to StackBlitz

1. Go to [https://stackblitz.com](https://stackblitz.com/)
2. Click **"Try for Free Now"** or **"Start coding"**
3. Sign up / log in with GitHub / Google / Email

---

### Step 2 — Create a React Project

1. Click **"Create Project"** → Search **"React (JS)" template**
2. Click **"Fork Template"** → This clones a starter React project
3. StackBlitz will auto-install dependencies

> ✅ **Starter code base**: The project you forked from template  
> ✅ **Complete code base**: After you copy all workshop code (Notes App, Counter, etc.)

---

### Step 3 — Develop & Preview

- Edit files directly in browser
- Preview updates live (auto-refresh)
- No local installation needed!

---

### Step 4 — Deploy via GitHub + Netlify

1. **Push StackBlitz project to GitHub:**
   - Click **Git → Connect to GitHub**
   - Push project to your repository

2. **Deploy on Netlify:**
   - Go to [Netlify](https://www.netlify.com/) → **New site from Git → Select repo**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click **Deploy site** → Get your live link

---

### Step 5 — Starter + Complete Code Base (StackBlitz)

- **Starter** → The forked template only (`App.jsx`, `main.jsx`)
- **Complete** → After copying Notes App / Counter / components

---

## ✅ Summary Table

| Path       | Setup                 | Preview           | Deploy                         | Starter / Complete                                                |
| ---------- | --------------------- | ----------------- | ------------------------------ | ----------------------------------------------------------------- |
| Local      | VS Code + Node + Vite | `npm run dev`     | Drag & drop / GitHub → Netlify | Starter: after Vite install, Complete: after adding workshop code |
| StackBlitz | Browser editor        | Auto live preview | GitHub → Netlify               | Starter: forked template, Complete: after adding workshop code    |

---

## 🎯 Which Path Should You Choose?

**Choose Local Setup (PATH 1) if:**
- ✅ You want to code on your laptop
- ✅ You prefer a full-featured code editor
- ✅ You want to learn the "real" development workflow
- ✅ You have Node.js installed or can install it

**Choose StackBlitz (PATH 2) if:**
- ✅ You can't install software on your computer
- ✅ You want to start coding immediately (no setup)
- ✅ You prefer working in the browser
- ✅ You have limited storage space

---

## 🆘 Troubleshooting

### Local Setup Issues

**"npm is not recognized"**
- Node.js might not be installed or not in PATH
- Reinstall Node.js and make sure to check "Add to PATH"

**"Port 5173 already in use"**
- Another app is using that port
- Run: `npm run dev -- --port 3000` to use a different port

**"npm install fails"**
- Check your internet connection
- Try: `npm cache clean --force` then `npm install` again

### StackBlitz Issues

**Project won't load**
- Refresh the page
- Try a different browser
- Clear browser cache

**Can't connect to GitHub**
- Make sure you're logged into GitHub
- Check your internet connection

---

## 📚 Next Steps

After completing setup:

1. ✅ Make sure you can see the Vite welcome page (local) or StackBlitz preview
2. ✅ Familiarize yourself with the file structure
3. ✅ You're ready for the workshop! 🎉

---

## 📝 Pre-Workshop Checklist

- [ ] VS Code installed (if using local setup)
- [ ] Node.js installed and verified (`node -v` works)
- [ ] Vite project created and running (`npm run dev` shows welcome page)
- [ ] OR StackBlitz account created and React project forked
- [ ] Browser ready (Chrome/Firefox/Edge recommended)
- [ ] Internet connection stable

**Ready to code!** 🚀

