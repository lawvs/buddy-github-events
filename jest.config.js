module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'node'],
  testMatch: ['**/__tests__/**/*.{ts,tsx}', '**/?(*.)+(spec|test).{ts,tsx}'],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
}
