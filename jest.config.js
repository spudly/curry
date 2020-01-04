module.exports = {
  transform: {'^.+\\.tsx?$': 'ts-jest'},
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  collectCoverageFrom: [
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
    '**/*.jsx',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '[.]config[.]js',
    '/coverage/',
    '[.]stories[.]',
  ],
  testPathIgnorePatterns: ['build', '[.]stories[.]'],
};
