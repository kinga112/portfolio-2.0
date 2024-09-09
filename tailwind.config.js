import { transform } from 'typescript';

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'custom-100': '#FAB1D9',
        'custom-300': '#C792BE',
        'custom-500': '#9575A1',
        'custom-700': '#675A82',
        'custom-900': '#3C3F60',
        'custom-950': '#0A121F',
        // 'custom-950': '#0E1D35',
        // 'custom': '#15253F'
        'custom': '#192D4D'
      },
      transitionDelay: {
        '50': '75ms',
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
        '550': '550ms'
      },
      animation: {
        'infinite-scroll-fastest': 'infinite-scroll 20s linear infinite',
        'infinite-scroll-fast': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-slow': 'infinite-scroll 30s linear infinite',
        'infinite-scroll-slowest': 'infinite-scroll 40s linear infinite',
        'flip': 'flip 300ms linear',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        },
        'flip':{
          from: { transform: 'rotateY(0deg)'},
          to: { transform: 'rotateY(180deg)' },
        },
      }
    },
  },
  plugins: [
    addVariablesForColors,
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
