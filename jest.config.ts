import type { Config } from 'jest';

const config: Config = {
  verbose: false,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  collectCoverage: true,
  coverageProvider: 'v8',
  clearMocks: true,
  resetMocks: true,
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
};

export default config;
