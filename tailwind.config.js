/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './public/js/**/*.js'
  ],
  theme: {
    extend: {
      // Custom color palette matching your design system
      colors: {
        charcoal: {
          light: '#2a3129',
          DEFAULT: '#1d231c',
          dark: '#141814',
        },
        green: {
          light: '#26b85e',
          DEFAULT: '#209d50',
          dark: '#1a8342',
          darker: '#156835',
        },
        mint: {
          light: '#f0f3f0',
          DEFAULT: '#e3ede7',
          dark: '#d6e2da',
        },
        gray: {
          light: '#e1dfd9',
          lighter: '#e8e6e0',
          DEFAULT: '#6b7269',
          muted: '#6b7269',
        },
        status: {
          success: '#209d50',
          info: '#1b8585',
          warning: '#c28a1a',
          error: '#c41d1d',
        },
      },
      // Font configuration
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Cascadia Code', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
      },
      // Spacing scale
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
      },
      // Border radius
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      // Shadows
      boxShadow: {
        sm: '0 1px 2px 0 rgba(29, 35, 28, 0.05)',
        md: '0 4px 6px -1px rgba(29, 35, 28, 0.1), 0 2px 4px -1px rgba(29, 35, 28, 0.06)',
        lg: '0 10px 15px -3px rgba(29, 35, 28, 0.1), 0 4px 6px -2px rgba(29, 35, 28, 0.05)',
        xl: '0 20px 25px -5px rgba(29, 35, 28, 0.1), 0 10px 10px -5px rgba(29, 35, 28, 0.04)',
      },
      // Transitions
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      // Responsive breakpoints (Tailwind defaults + custom)
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      // Container
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      // Z-index
      zIndex: {
        sticky: '10',
        modal: '50',
        dropdown: '40',
      },
      // Line height
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
      },
      // Font weight
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Disable Tailwind's default font family if needed
    // fontFamily: false,
  },
}
