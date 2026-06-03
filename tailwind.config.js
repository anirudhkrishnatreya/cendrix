/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#081C3A',
          50: '#E8EEF6',
          100: '#C5D3E8',
          200: '#8FADD0',
          300: '#5A87B8',
          400: '#2E62A0',
          500: '#081C3A',
          600: '#061629',
          700: '#040F1C',
          800: '#02090F',
          900: '#010406',
        },
        emerald: {
          DEFAULT: '#00B67A',
          50: '#E0FFF4',
          100: '#B3FFE5',
          200: '#66FFD0',
          300: '#1AFFBC',
          400: '#00E89A',
          500: '#00B67A',
          600: '#008D5F',
          700: '#006644',
          800: '#003D29',
          900: '#00150E',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'premium': '0 4px 40px rgba(8,28,58,0.08)',
        'premium-lg': '0 8px 60px rgba(8,28,58,0.12)',
        'glow': '0 0 40px rgba(0,182,122,0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
