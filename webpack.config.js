const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name]-[chunk-hash:5].js',
        publicPath: ''
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
            title: '薛之谦'
        }),
        new cleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {
                test: /\.css|\.scss/,
                loaders: [
                    {
                        loader: 'style'
                    },
                    {
                        loader: 'css'
                    },
                    {
                        loader: 'sass'
                    },
                    {
                        loader: 'postcss'
                    }
                ]
            },
            {
                test: /\.js|\.jsx/,
                use: ['babel']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', 'scss', 'css']
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    devServer: {
        historyApiFallback: true,
        port: 8080,
        inline: true,
        contentBase: './dist',
        open: true
    }
};
