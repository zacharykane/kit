/* eslint-env node */
const presets = ['@babel/preset-react', '@emotion/babel-preset-css-prop'];

const plugins = ['@babel/plugin-proposal-class-properties'];

module.exports = api => {
    if (api.env('test')) {
        // compile ESModules to CommonJS for Jest
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
