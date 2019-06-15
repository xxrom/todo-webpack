module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        loose: true,
      },
    ],
    '@babel/typescript',
    '@babel/react',
    'linaria/babel',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'react-hot-loader/babel',
    '@babel/plugin-transform-runtime',
    [
      'transform-imports',
      {
        '@material-ui/core': {
          transform: '@material-ui/core/${member}',
          preventFullImport: true,
        },
        '@components': {
          transform: function(importName) {
            process.stdout.write('.');
            return `@components/${importName}/${importName}`;
          },
          preventFullImport: true,
        },
      },
    ],
  ],
};
