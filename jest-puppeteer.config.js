// jest-puppeteer.config.js
module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    command: 'yarn babel-node src/server/main.js',
    port: 4444,
  },
};
