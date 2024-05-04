# Saucedemo project TypeScript version

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## About the Project

Test framework implementation for https://www.ploom.co.uk/en website.

## Usage

To execute tests run command below inside your project root to install all dependencies needed for this test.

```bash
npm install
```

To execute all tests inside tests folder run command:

```bash
npx playwright test
```

By default tests will be run on Chrome, Firefox and Safari in parallel (2 workers).

To run all tests in non headless mode run command:

```bash
npx playwright test --headed
```

### Adding new type of browser

To run for eq. mobile screen browser make changes in file playwright.config.ts
