/** @type {import('stylelint').Config} */

export default {
  extends: 'stylelint-config-standard',
  rules: {
    'property-no-unknown' : null,
    'at-rule-no-unknown' : null,
    'selector-class-pattern': null,
    'import-notation': null,
    'selector-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
  }
};
