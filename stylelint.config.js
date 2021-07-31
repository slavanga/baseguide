module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  ignoreFiles: [
    '**/_mq.scss',
    '**/_normalize.scss',
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-same-name-blockless',
          'first-nested',
        ],
        ignore: [
          'after-comment',
        ],
        ignoreAtRules: ['else'],
      },
    ],
    'at-rule-no-unknown': null,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [
          'consecutive-duplicates-with-different-values',
        ],
      },
    ],
    'length-zero-no-unit': null,
    'max-empty-lines': 2,
    'no-descending-specificity': null,
    'value-keyword-case': null,
  },
};
