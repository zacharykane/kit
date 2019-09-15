/* eslint-env node */
module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        'plugin:compat/recommended'
    ],
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true
        }
    },
    rules: {
        'linebreak-style': [
            'warn',
            'unix'
        ]
    }
};
