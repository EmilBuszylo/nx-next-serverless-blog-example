const {join} = require('path');
const {createGlobPatternsForDependencies} = require('@nrwl/next/tailwind');
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        accent: {
          default: colors.green["700"]
        },
        font: {
          light: colors.gray["700"],
          default: colors.gray["900"],
        },
        border: {
          light: colors.gray["200"],
          default: colors.gray["300"],
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
