// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  modulePaths: ['<rootDir>/src/'],

  // The path to a module that runs some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['./testFileSetup.js'],
};
