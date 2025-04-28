/** @type {import('stylelint').Config} */

export default {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown' : null,
    'custom-property-pattern': null,
    'declaration-property-value-no-unknown': null,
    'import-notation': null,
    'no-descending-specificity': null,
    'property-no-unknown' : null,
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'selector-no-vendor-prefix': null,
    'selector-pseudo-element-no-unknown': null,
    'value-no-vendor-prefix': null,
  }
};
