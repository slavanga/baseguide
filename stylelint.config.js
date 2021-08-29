module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  ignoreFiles: ['**/_mq.scss', '**/_normalize.scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'declaration-empty-line-before': null,
    'length-zero-no-unit': null,
    'no-descending-specificity': null,
  },
};
