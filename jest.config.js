const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/custom-webpack-repro',
    '<rootDir>/libs/shared/header',
  ],
};
