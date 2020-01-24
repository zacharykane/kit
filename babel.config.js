/* eslint-env node */
const presets = [
    [
        '@babel/preset-env',
        {
            debug: true,
            modules: false
        }
    ]
];

const plugins = ['@babel/plugin-proposal-class-properties'];

module.exports = { presets, plugins };
