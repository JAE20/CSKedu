# Tailwind CSS Setup & Usage Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Tailwind CSS
In a new terminal, run the Tailwind watcher:
```bash
npm run tailwind
```

This command:
- Watches all HTML and JS files for changes
- Automatically rebuilds `public/css/tailwind.css`
- Keeps running in the background while you develop

### 3. Start the Development Server
In another terminal, start your Express server:
```bash
npm start
```

The app will be available at `http://localhost:3000`

---

## For Production Build

### Build Optimized CSS
```bash
npm run build:css
```

This generates a production-optimized `tailwind.css` with only the classes you're using.

---

(continued...)
