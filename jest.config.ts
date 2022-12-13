import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  collectCoverage: true,
  coverageProvider: 'v8',
  clearMocks: true,
  resetMocks: true,
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
      enableTsDiagnostics: true
    }
  }
};

export default config;
