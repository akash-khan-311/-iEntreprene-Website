/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        pill: {
          to: {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        particle: {
          '0%': {
            transform: 'rotate(0deg) translate(var(--start-x), var(--start-y))',
            opacity: '1',
            'animation-timing-function': 'cubic-bezier(0.55, 0, 1, 0.45)',
          },
          '70%': {
            transform: 'rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2))',
            'animation-timing-function': 'ease',
          },
          '85%': {
            transform: 'rotate(calc(var(--rotate) * 0.66)) translate(var(--end-x), var(--end-y))',
          },
          '100%': {
            transform: 'rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5))',
            opacity: '1',
          },
        },
        point: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
            'animation-timing-function': 'cubic-bezier(0.55, 0, 1, 0.45)',
          },
          '25%': {
            transform: 'scale(calc(var(--scale) * 0.25))',
          },
          '38%': {
            opacity: '1',
          },
          '65%': {
            transform: 'scale(var(--scale))',
            opacity: '1',
            'animation-timing-function': 'ease',
          },
          '85%': {
            transform: 'scale(var(--scale))',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0)',
            opacity: '0',
          },
        },
      },
      animation: {
        pill: 'pill 0.3s ease both',
        particle: 'particle var(--time) ease 1 -350ms',
        point: 'point var(--time) ease 1 -350ms',
      },
    },
  },
  plugins: [],
};
