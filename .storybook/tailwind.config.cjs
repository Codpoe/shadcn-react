const rootTailwindConfig = require('../tailwind.config.cjs');

module.exports = {
  ...rootTailwindConfig,
  content: ["./src/**/*.stories.{js,jsx,ts,tsx}"],
}
