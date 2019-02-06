/* eslint-env node */
const presets = [
    [
        '@babel/preset-env',
        {
            debug: true,
            modules: false,
        },
    ],
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
];

const plugins = ['@babel/plugin-proposal-class-properties'];

module.exports = { presets, plugins };
