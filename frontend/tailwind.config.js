/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      boxShadow: {
        'organic': '0 20px 60px rgba(134, 239, 172, 0.15)',
        'organic-lg': '0 30px 80px rgba(134, 239, 172, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}