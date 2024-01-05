// 11ty's current context
const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const STAGE_ENV = 'stage';

// the possible base URLs
const prodUrl = process.env.URL;
const stageUrl = process.env.DEPLOY_PRIME_URL;
const devUrl = '';

// set the baseUrl according to the environment
let baseUrl;
if (environment === PROD_ENV) {
  baseUrl = prodUrl;
} else if (environment === STAGE_ENV) {
  baseUrl = stageUrl;
} else {
  baseUrl = devUrl;
}

// useful for env-specific template conditionals
const isProduction = environment === PROD_ENV;
const isStaging = environment === STAGE_ENV;

// the current branch name and Netlify deploy context
const branch = process.env.BRANCH;
const context = process.env.CONTEXT;

export {
  environment,
  isProduction,
  isStaging,
  baseUrl,
  branch,
  context,
};
