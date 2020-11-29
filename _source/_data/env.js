// 11ty's current context
const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const STAGE_ENV = 'stage';

// the possible base URLs
const prodUrl = process.env.URL;
const stageUrl = process.env.DEPLOY_PRIME_URL;
const devUrl = '';

// set a base URL variable based on the current environment
const baseUrl = environment === PROD_ENV ? prodUrl : STAGE_ENV ? stageUrl : devUrl

// useful for env-specific template conditionals
const isProduction = environment === PROD_ENV;
const isStaging = environment === STAGE_ENV;

// the current branch name and Netlify deploy context
const branch = process.env.BRANCH;
const context = process.env.CONTEXT;

module.exports = {
  environment,
  isProduction,
  isStaging,
  baseUrl,
  branch,
  context
};
