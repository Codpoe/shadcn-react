const rootTailwindConfig = require('../../tailwind.config.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...rootTailwindConfig,
  content: ['./src/app/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
};
