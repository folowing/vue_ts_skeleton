module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/env', '@babel/typescript'];

  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-classes', { loose: true }],
    ['@babel/plugin-transform-template-literals', { loose: true }],
    ['lodash'],
  ];

  return { presets, plugins };
};
