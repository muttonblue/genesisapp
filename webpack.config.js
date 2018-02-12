const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'eval',
    entry: './src/index.js',
    output: {
        publicPath: '/static/',
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            sourceMap: true,
                            module: true,
                            localIdentName: '[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        query: {
                            outputStyle: 'expanded',
                            sourceMap: true
                        }
                    },
                ]
            }
        ],
    }
};