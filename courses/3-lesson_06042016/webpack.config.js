var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: "cheap-inline-module-source-map",
    entry: {
        class: [
            './src/app.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}) //for minification
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ["react", "es2015", "stage-0"]     //for build
                    //presets: ["react", "es2015", "stage-0", "react-hmre"]    //for hot replacement
                }
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};