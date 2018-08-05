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
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'prettier/react'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['import', 'react', 'jsx-a11y', 'prettier'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        'prettier/prettier': 'error'
    }
};
