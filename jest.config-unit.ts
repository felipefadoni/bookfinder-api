import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  collectCoverage: true,
  coverageProvider: 'v8',
  clearMocks: true,
  resetMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/domain/**/*.ts',
    '!<rootDir>/src/domain/**/repositories/*.ts',
    '!<rootDir>/src/domain/**/entity.ts',
    '!<rootDir>/src/domain/**/index.ts'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
};

export default config;
