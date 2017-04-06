const webpack = require('webpack');
const path = require('path');

const PROJECT_DEPS = process.env.PROJECT_DEPS || __dirname;
const APP_ROOT = path.resolve(PROJECT_DEPS, 'react-app');

console.log(PROJECT_DEPS);
module.exports = {
    entry: {
        main: './react-app/app/main.js',
    },
    output: {
        path: path.resolve(PROJECT_DEPS, 'public/javascripts/'),
        filename: '[name]_bundle.js',
    },
    module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                    ],
                },

            ],
        },
    resolveLoader: {
        modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
        moduleExtensions: ['-loader'],
    },
    resolve: {
        modules: [
            path.resolve(PROJECT_DEPS, 'node_modules'),
            path.resolve(PROJECT_DEPS, APP_ROOT),
        ],
        extensions: ['.js', '.jsx'],
    },
};
