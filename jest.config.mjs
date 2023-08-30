import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */

const config = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',

  testMatch: [
    '<rootDir>/src/**/*.(spec|test).ts',
    '<rootDir>/src/**/*.(spec|test|snapshot).tsx',
  ],

  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },

  silent: true,
  verbose: true,
};

export default createJestConfig(config);
