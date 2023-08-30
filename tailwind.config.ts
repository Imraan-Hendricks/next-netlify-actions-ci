import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
};

export default config;
