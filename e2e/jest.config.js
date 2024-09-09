/** @type {import('jest').Config} */
module.exports = {
  maxWorkers: 1,
  // globalSetup: "./globalSetup.ts",
  globalTeardown: 'detox/runners/jest/globalTeardown',
  testEnvironment: 'detox/runners/jest/testEnvironment',
  testRunner: 'jest-circus/runner',
  testTimeout: 120000,
  reporters: ['detox/runners/jest/reporter'],
  verbose: true,

  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.test.js'],
  globalSetup: 'detox/runners/jest/globalSetup',
};
