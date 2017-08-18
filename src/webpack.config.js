var path = require('path');

module.exports = {
    entry: {
        index: './js/index.js',
        pages: './js/pages.js'
    },
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            // include: [
            //     path.resolve(__dirname, 'js')
            // ],
            loader: 'babel-loader',
            options: {
                presets: ['env'],
                // plugins: ['transform-runtime']
            },
            // use: {
            //     loader: 'babel-loader',
            //     options: {
            //         presets: ['env']
            //     }
            // }
        }]
    }
};