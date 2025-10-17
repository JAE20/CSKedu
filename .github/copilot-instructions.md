# Copilot Instructions for CSK Accounting Academy

## Project Overview
This is an interactive accounting education platform built with vanilla JavaScript, Express.js, and a strict design system. The app teaches accounting fundamentals through structured lessons, interactive practice tools, and gamified progress tracking.

## Architecture & Data Flow

### Client-Side State Management
- **localStorage** is the single source of truth for all user data
- Progress tracking uses `topicProgress` object: `{topicId: boolean}`
- Streak tracking: `lastVisit` (date string) + `streak` (number)
- No backend persistence—all state is browser-local

### Page Structure & Responsibilities
- `index.html`: Marketing homepage with learning paths
- `course.html`: Lesson viewer with sticky sidebar nav + `course.js` for dynamic content loading
- `practice.html`: Interactive tools (accounting equation calculator, journal simulator, ratio calculator, quiz)
- `dashboard.html`: Analytics dashboard showing stats, progress bars, achievements, streak tracking

### JavaScript Architecture
**`public/js/main.js`** - Shared utilities:
- Mobile menu toggle, smooth scrolling, scroll animations (Intersection Observer)
- Used across all pages—loaded first in HTML

**`public/js/course.js`** - Course content management:
- `courseData` object contains all lesson content as template literals
- Dynamic rendering: `loadTopic(topicId)` injects HTML into `#topicContent`
- Navigation: `loadNextTopic()` / `loadPreviousTopic()` with circular logic
- Completion tracking: `markTopicComplete()` saves to localStorage

**`public/js/dashboard.js`** - Analytics:
- `calculateStreak()`: Compares `lastVisit` to today, increments or resets
- `updateProgressBars()`: Maps completed topics to learning path percentages
- Path definitions: `student`, `businessOwner`, `aspiringAccountant`, `professional` arrays

## Design System (CRITICAL)

### Color Palette - **NEVER DEVIATE**
Located in `public/css/variables.css`:
```css
--color-charcoal: #1d231c   /* Primary text, headers */
--color-green: #209d50      /* CTAs, progress, success */
--color-mint: #e3ede7       /* Backgrounds, cards */
--color-white: #ffffff      /* Main bg */
--color-light-gray: #e1dfd9 /* Borders */
```

### Using the Design System
- **Always use CSS custom properties** from `variables.css`—never hardcode colors
- Spacing: Use `--space-{1-24}` scale (e.g., `--space-4` = 1rem)
- Typography: `--text-{xs|sm|base|lg|xl|2xl|3xl|4xl|5xl}` + `--font-{normal|medium|semibold|bold}`
- Interactive states: `--interactive-hover`, `--interactive-active` for green buttons

### Component Patterns
- **Cards**: `.card` with `.card-header`, `.card-content` structure
- **Buttons**: `.btn.btn-primary` (green) or `.btn.btn-secondary` (outline)
- **Grids**: `.grid.grid-{2|3|4}` for responsive columns
- **Progress bars**: `.progress-bar` wrapper with `.progress-fill` child (green)

## Development Workflow

### Running the App
```bash
npm install
npm start  # Starts Express server on http://localhost:3000
```
Server config: `server.js` serves static files from `public/` directory.

### Adding New Course Content
1. Add topic object to `courseData.topics` array in `public/js/course.js`
2. Structure: `{id, title, subtitle, level, duration, content}` where `content` is HTML string
3. Update sidebar navigation in `course.html` with matching topic ID
4. Add topic ID to relevant learning path arrays in `dashboard.js` for progress tracking

### Interactive Tool Pattern (practice.html)
Tools use inline `onclick` handlers to toggle visibility:
```javascript
function showTool(toolId) {
  // Hide all tool sections
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  // Show selected tool
  document.getElementById(toolId).style.display = 'block';
}
```

## Project-Specific Conventions

### HTML Structure
- All pages load stylesheets in order: `reset.css` → `variables.css` → `main.css` → page-specific CSS
- Header component is duplicated across pages (no templating)—update all instances when changing navigation
- FontAwesome 6.4.2 CDN for icons

### CSS Organization
- `reset.css`: Browser normalization
- `variables.css`: Design tokens only (no selectors)
- `main.css`: Core components + utility classes (300+ lines)
- Page-specific CSS: `course.css`, `practice.css`, `dashboard.css` for specialized layouts

### localStorage Keys
- `topicProgress`: `{[topicId: string]: boolean}`
- `lastVisit`: ISO date string
- `streak`: Numeric string
- Access pattern: Always use `JSON.parse(localStorage.getItem(key) || '{}')` with fallback

### Accounting-Specific Components
- **Accounting tables**: Use `.accounting-table` class with `.debit`/`.credit` cell classes for color coding
- **Formula displays**: `.highlight-box.formula` with charcoal background + white text
- **Key concepts**: `.highlight-box.key-concept` with mint background
- **Transaction examples**: Structured as `<table>` with Account/Debit/Credit columns

## Common Pitfalls

1. **Don't add new colors**—the 5-color palette is intentional and strict
2. **Mobile menu**: Uses `#menuToggle` button to toggle `.active` class on `#navMain`—don't break this ID dependency
3. **Topic IDs**: Must match between `course.js` data, HTML sidebar links, and dashboard path arrays
4. **Sticky nav**: `.topic-nav` uses `position: sticky` with specific z-index—changing position breaks layout

## Testing Checklist
- [ ] Test mobile menu toggle (<768px viewport)
- [ ] Verify topic completion saves to localStorage and updates dashboard
- [ ] Check color contrast with browser devtools (all text must meet WCAG AA)
- [ ] Validate streak increments correctly across multiple days
- [ ] Ensure all pages load CSS in correct order (variables before main)

## Key Files for Reference
- Design tokens: `public/css/variables.css`
- Component library: `public/css/main.css`
- Course content schema: `public/js/course.js` (lines 1-80)
- Progress tracking logic: `public/js/dashboard.js` (`calculateStreak`, `updateProgressBars`)
