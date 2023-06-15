/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './posts/**/*.mdx',
  ],
  safelist: ['duration-[500ms]'],
  theme: {
    extend: {
      fontFamily: { serif: ['var(--font-kaisei)'] },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        surface: {
          50: '#E4E6EE',
          900: '#242C46',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
