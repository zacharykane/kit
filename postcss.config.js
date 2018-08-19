/* eslint-env node */
module.exports = {
    plugins: [
        require('postcss-preset-env')({
            browsers: '> 1%, not ie 11, not op_mini all',
            autoprefixer: {
                env: '> 1%, not ie 11, not op_mini all',
            },
        }),
        require('postcss-sorting')({
            'properties-order': [
                'position',
                'z-index',
                'top',
                'right',
                'bottom',
                'left',
                'display',
                'flex',
                'overflow',
                'box-sizing',
                'width',
                'height',
                'border',
                'margin',
                'padding',
                'background',
                'color',
                'font-family',
                'font-size',
                'text-align',
            ],
        }),
    ],
};
