/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{html,js,md}",
    "./layouts/**/*.{html,js}",
    "./assets/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af'
        },
        neutral: {
          white: '#FFFFFF',
          light: '#F7F7F7',
          gray: '#D1D5DB',
          dark: '#6B7280'
        }
      },
      fontFamily: {
        'sans': ['SF Pro Display', 'Inter', 'Roboto', 'system-ui', 'sans-serif'],
        'body': ['SF Pro Text', 'Inter', 'Roboto', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.2' }],
        'heading': ['24px', { lineHeight: '1.4' }],
        'base': ['16px', { lineHeight: '1.6' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      },
      maxWidth: {
        '8xl': '1280px'
      },
      backdropBlur: {
        'xs': '2px'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}