/* eslint-env node */
const presets = ['@babel/preset-react', '@emotion/babel-preset-css-prop'];

const plugins = ['@babel/plugin-proposal-class-properties'];

module.exports = api => {
    console.log('babel ran with:', api.env());

    if (api.env('test')) {
        presets.unshift([
            '@babel/preset-env',
            {
                debug: true,
            },
        ]);

        return {
            presets,
            plugins,
        };
    }

    api.cache.forever();

    presets.unshift([
        '@babel/preset-env',
        {
            debug: true,
            modules: false,
        },
    ]);

    return { presets, plugins };
};
