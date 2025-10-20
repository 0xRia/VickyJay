/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ['Poppins', "sans-serif"],
        clash: ["clash", "sans-serif"],
        clashbold: ["clashBold", "sans-serif"]
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1220px",
        xxl: "1400px",
      },
      keyframes: {
    'pulse-glow': {
      '0%, 100%': {
        filter: 'drop-shadow(0 0 4px #3B82F6) drop-shadow(0 0 10px #3B82F6)',
        transform: 'scale(1)',
      },
      '50%': {
        filter: 'drop-shadow(0 0 8px #60A5FA) drop-shadow(0 0 20px #93C5FD)',
        transform: 'scale(1.1)',
      },
    },
  },
  animation: {
    'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
    'pulse-glow-fast': 'pulse-glow 1s infinite ease-in-out',
  },
    },
  },
  plugins: [
    // require('tailwindcss'),
    // require('tailwindcss-gradients'),
    // require('tailwindcss-border-gradient'),
  ],
}