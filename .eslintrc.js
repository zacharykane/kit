/* eslint-env node */
module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:compat/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true
        }
    }
};
