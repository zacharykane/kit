/* eslint-env node */
module.exports = {
    tabWidth: 4,
    useTabs: false,
    printWidth: 80,
    singleQuote: true,
    trailingComma: 'all',
    overrides: [
        {
            files: ['.*', '*.json', '.*.json', 'public/site.webmanifest'],
            options: {
                parser: 'json',
                tabWidth: 2,
                useTabs: false,
            },
        },
    ],
};
