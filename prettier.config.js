/* eslint-env node */
module.exports = {
    tabWidth: 4,
    useTabs: false,
    printWidth: 80,
    singleQuote: true,
    railingComma: 'all',
    oerrides: [
        {
            files: ['.*', '*.json', '.*.json', 'public/site.webmanifest'],
            options: {
                parser: 'json',
                tabWidth: 2,
                useTabs: false
            }
        }
    ]
};
