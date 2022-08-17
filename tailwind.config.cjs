/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'dark-brown': '#100100',
        'light-brown': '#510e20',
        'pink': '#b04d61',
        'light-pink': '#e37286',
        'dark-blue': '#000628',
        'light-blue': '#000d6b',
        'blue': '#183fc8',
        'light-blue-2': '#2252DA',
        'blue-error': '#333f85',
        'moon': '#9FA3FE',
        'sun': '#fed7c6'
      },
      flex: {
        'half': '50%'
      },
      backgroundImage: {
        'sunset': "url('./assets/sunset.jpg')",
        'midnight': "url('./assets/midnight.jpg')",
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(0%)'},
          '50%': { transform: 'translateY(-10%)'},
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        'moonAnimation': 'wave 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
