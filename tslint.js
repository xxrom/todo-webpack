module.exports = {
  extends: ['tslint:recommended', 'tslint-react', 'tslint-config-prettier', 'tslint-immutable'],
  defaultSeverity: 'error',
  linterOptions: {
    exclude: ['src/generated/**/*.*'],
  },
  rules: {
    // Предпочитать Array<...> формат с параметром (https://github.com/palantir/tslint/issues/2946)
    'array-type': [true, 'generic'],
    'object-literal-sort-keys': false,
    // Переменные могу начинаться с большой буквы (styled)
    'variable-name': [true, 'allow-pascal-case'],
    // Нельзя console.log
    'no-console': [false, 'log'],
    // Не сортировать импорты
    'ordered-imports': [false],
    // I в IProps не нужно писать для интерфейсов (правильно просто Props)
    'interface-name': [true, 'never-prefix'],
    'interface-over-type-literal': false,
    // Можно прокидывать пропсы без значения в компоненты <A fullWidth />
    'jsx-boolean-value': [true, 'never'],

    'no-unused-expression': true,

    'max-line-length': {
      options: [100],
      severity: 'warning',
      'ignore-pattern': '^import |^export *',
    },

    // Группировка импортов
    'ordered-imports': [
      true,
      {
        'import-sources-order': 'any',
        'named-imports-order': 'lowercase-first',
        'grouped-imports': true,
        groups: [
          { name: 'root import', match: '^@components', order: 20 },
          { name: 'current dir', match: '^[.]', order: 20 },
          { name: 'parent dir', match: '^[.][.]', order: 20 },
          { name: 'others', match: '^', order: 10 },
        ],
      },
    ],
  },
};
