/* eslint-env node */
/* eslint-disable no-console */
module.exports = api => {
    console.log('Babel ran under:', api.env());

    const presets = [
        [
            '@babel/preset-env',
            {
                debug: api.env(['development', 'test']),
                modules: api.env('test') ? 'commonjs' : false,
            },
        ],
        '@babel/preset-react',
        '@emotion/babel-preset-css-prop',
    ];

    const plugins = ['@babel/plugin-proposal-class-properties'];

    api.cache.forever();

    return { presets, plugins };
};
