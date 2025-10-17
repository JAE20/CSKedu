# 📊 CSK Accounting Academy

> A comprehensive, interactive accounting learning platform designed to make accounting education accessible, engaging, and effective for students, business owners, and professionals.

![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🎯 Overview

CSK Accounting Academy is a full-featured educational platform that teaches accounting fundamentals through:

- **Interactive Learning Paths** - Role-based curricula for different learner types
- **Hands-On Practice Tools** - Real-time calculators and simulators
- **Progress Tracking** - Gamified learning with achievements and streaks
- **Structured Courses** - Step-by-step lessons with multimedia content
- **Accessibility-First Design** - WCAG 2.1 AA compliant color palette

## 🎨 Design System

### Color Palette

The platform uses a carefully selected color palette optimized for readability and engagement:

```css
Primary Colors:
  • #1d231c (Dark Charcoal)  - Primary text, headers, navigation
  • #209d50 (Vibrant Green)  - CTAs, progress, success states
  • #e3ede7 (Mint Cream)     - Section backgrounds, cards

Neutral Colors:
  • #ffffff (Pure White)     - Main backgrounds
  • #e1dfd9 (Light Gray)     - Borders, dividers
```

### Typography

- **Headings**: Poppins (bold, modern)
- **Body Text**: Inter (clean, highly readable)
- **Code/Monospace**: Fira Code

### Design Tokens

All design values are stored as CSS custom properties in `/public/css/variables.css` for:
- Colors & semantic color mappings
- Typography scales
- Spacing system
- Border radius values
- Shadows & transitions
- Z-index layers

## 🚀 Features

### 1. Learning Paths

Three specialized tracks tailored to different audiences:

- **Student Path**: Academic focus with exam preparation
- **Business Owner Path**: Practical financial management
- **Professional Path**: Advanced accounting principles

### 2. Interactive Practice Tools

#### Accounting Equation Calculator
- Real-time balance checking
- Visual feedback for correctness
- Multiple account types (Assets, Liabilities, Equity)

#### Journal Entry Simulator
- Randomized transaction scenarios
- Debit/credit practice
- Instant feedback with explanations

#### Financial Statement Builder
- Interactive income statement creation
- Auto-calculation of totals
- Accuracy validation

#### Quick Quiz System
- Randomized question sets
- Immediate feedback
- Score tracking and progress saving

### 3. Progress Tracking Dashboard

- **Statistics Overview**: Lessons completed, study time, average scores
- **Learning Streak**: Daily engagement tracking
- **Course Progress**: Visual progress bars for each module
- **Achievements System**: Unlockable badges for milestones
- **Current Lesson Tracking**: Pick up where you left off

### 4. Structured Course Content

- Sticky sidebar navigation
- Reading time estimates
- Interactive practice questions
- Highlighted key concepts
- Transaction examples with visual tables
- Lesson completion tracking

## 📁 Project Structure

```
CSKedu/
├── server.js                 # Express server
├── package.json             # Dependencies & scripts
│
├── public/
│   ├── index.html           # Homepage with learning paths
│   ├── dashboard.html       # Progress tracking dashboard
│   ├── practice.html        # Interactive practice tools
│   ├── course.html          # Sample course page
│   │
│   ├── css/
│   │   ├── variables.css    # Design tokens & CSS custom properties
│   │   ├── reset.css        # CSS reset & normalize
│   │   ├── main.css         # Global styles & components
│   │   ├── dashboard.css    # Dashboard-specific styles
│   │   ├── practice.css     # Practice tools styles
│   │   └── course.css       # Course page styles
│   │
│   └── js/
│       ├── main.js          # Global utilities & helpers
│       ├── dashboard.js     # Dashboard functionality
│       ├── practice.js      # Interactive tools logic
│       └── course.js        # Course page interactions
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd /Users/jerimiahtongco/Desktop/CSKedu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Development Mode

For auto-restart on file changes:

```bash
npm run dev
```

## 🎓 Usage Guide

### For Learners

1. **Choose Your Path**: Select from Student, Business Owner, or Professional tracks
2. **Complete Lessons**: Work through structured course content
3. **Practice**: Use interactive tools to reinforce learning
4. **Track Progress**: Monitor your achievements in the dashboard
5. **Take Quizzes**: Test your knowledge and earn high scores

### For Developers

#### Adding New Courses

1. Create course HTML in `/public/` directory
2. Follow the structure in `course.html`
3. Update navigation links
4. Add course data to JavaScript tracking

#### Customizing Colors

Edit `/public/css/variables.css`:

```css
:root {
  --color-primary: #209d50;  /* Your brand color */
  --color-charcoal: #1d231c; /* Text color */
  /* ... update other colors */
}
```

#### Adding Practice Tools

1. Add new tool section in `practice.html`
2. Create corresponding CSS in `practice.css`
3. Implement logic in `practice.js`
4. Add navigation button

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3 (Custom Properties), Vanilla JavaScript
- **Backend**: Node.js with Express
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Inter, Poppins)
- **Storage**: LocalStorage for user progress
- **Server**: Express.js

## ♿ Accessibility

The platform is designed with accessibility in mind:

- **WCAG 2.1 AA** compliant color contrast ratios
- **Keyboard Navigation** support
- **Focus Indicators** for interactive elements
- **Semantic HTML** structure
- **Screen Reader** friendly content
- **Reduced Motion** support for animations

## 📱 Responsive Design

Fully responsive across all device sizes:

- **Desktop**: Full sidebar navigation, multi-column layouts
- **Tablet**: Adaptive grid layouts
- **Mobile**: Stacked layouts, touch-optimized controls

## 🎯 Learning Objectives

### Foundations Module
- Understand the accounting equation
- Master double-entry bookkeeping
- Learn debits and credits
- Create chart of accounts

### Financial Statements Module
- Read and prepare income statements
- Understand balance sheets
- Analyze cash flow statements
- Interpret statement of equity

### Journal Entries Module
- Record business transactions
- Post to general ledger
- Prepare trial balance
- Make adjusting entries

### Financial Analysis Module
- Calculate financial ratios
- Perform trend analysis
- Compare financial statements
- Evaluate performance metrics

## 🎮 Gamification Features

- **Daily Streaks**: Encourage consistent learning
- **Achievement Badges**: Unlock milestones
- **Progress Bars**: Visual completion tracking
- **Score Tracking**: Quiz performance history
- **Leaderboards**: (Future enhancement)

## 🔐 Data Privacy

- All user progress stored locally (LocalStorage)
- No server-side user data collection
- No cookies or tracking scripts
- GDPR-friendly design

## 🚧 Future Enhancements

- [ ] User authentication system
- [ ] Certificate generation
- [ ] Video lesson integration
- [ ] Community forum
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Advanced reporting tools
- [ ] Instructor dashboard
- [ ] Real-time collaboration
- [ ] API for third-party integrations

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Development

### File Organization

- **HTML Files**: Semantic, accessible markup
- **CSS Files**: Modular, BEM-inspired naming
- **JS Files**: ES6+, modular functions
- **Assets**: Organized by type

### Code Style

- **CSS**: Mobile-first, custom properties
- **JavaScript**: Functional programming, no jQuery
- **HTML**: Semantic HTML5 elements

## 🎨 Design Principles

1. **Clarity**: Clear visual hierarchy
2. **Consistency**: Uniform design patterns
3. **Feedback**: Immediate user feedback
4. **Accessibility**: Inclusive design
5. **Performance**: Fast loading, smooth interactions

## 📞 Support

For questions or issues:
- Review the documentation
- Check existing GitHub issues
- Open a new issue with details

## 🙏 Acknowledgments

- Color palette designed for optimal learning
- Icons by Font Awesome
- Fonts by Google Fonts
- Design inspired by modern educational platforms

---

**Built with ❤️ for accounting education**

Made by CSK Education Team • 2025
