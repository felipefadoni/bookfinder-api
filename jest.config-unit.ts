import config from './jest.config';

config.displayName = 'test-unit';
config.collectCoverageFrom = [
  '<rootDir>/src/app/controllers/**/**/validator/*.ts',
  '<rootDir>/src/domain/**/*.ts',
  '!<rootDir>/src/app/controllers/**/**/validator/index.ts',
  '!<rootDir>/src/domain/**/repositories/*.ts',
  '!<rootDir>/src/domain/**/entity.ts',
  '!<rootDir>/src/domain/**/index.ts'
];

export default config;
