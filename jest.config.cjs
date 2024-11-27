module.exports = {
  testEnvironment: "jsdom",
  // transform js and jsx files with babel-jest
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  testPathIgnorePatterns: [
    "/e2e-tests/",
  ],

  collectCoverageFrom: [
    // Collect coverage from all js or jsx files in src folder
    "src/**/*.{js,jsx}", 
    // Exclude test files from coverage
    "!src/**/*.test.{js,jsx}", 
    // Exclude main.jsx from coverage
    "!src/main.jsx",
    // Exclude App.jsx from coverage
    "!src/App.jsx", 
    // Exclude Layout.jsx from coverage
    "!src/Layout.jsx", 
    // Exclude routes.jsx from coverage
    "!src/routes.jsx",
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  moduleNameMapper: {
    "d3": "<rootDir>/node_modules/d3/dist/d3.min.js",
  }
};

